import { gql, registerModule } from "../ez";
import type { EZContext } from "graphql-ez";
import type { PrismaNS, PrismaClient } from "api-base";

import type {
  Resolvers,
  ProgressOverTimeQueriesuserBktArgs,
  ProgressOverTimeQueriesgroupBktArgs,
} from "../ez.generated";

import { addBucket, asBucket, startOfBucket, toKey } from "./utils/bucket";
import { avgLevelFromBktJson } from "./utils/bktModel";
import { iterateModelStatesBkt } from "./utils/modelStateIterator";

type Context = EZContext & { prisma: PrismaClient };

export const progressOverTimeModule = registerModule(
  gql`
    extend type Query {
      """
      Progress series (BKT) added by user and group.

      Returns points per bucket (DAY/WEEK/MONTH).
      """
      progressOverTime: ProgressOverTimeQueries!
    }
    "Temporal granularity of the bucket."
    enum ProgressOverTimeBucket {
      "Group by day (UTC)"
      DAY
      "Group by week (UTC)"
      WEEK
      "Group by month (UTC)"
      MONTH
    }
    "Input: individual progress series (BKT)"
    input ProgressOverTimeUserInput {
      "Projects identifier"
      projectsIds: [IntID!]!
      "User identifier"
      userId: IntID!
      "Domain identifier"
      domainId: IntID!
      "Initial date of the range (inclusive)"
      startDate: DateTime!
      "End date of the range (inclusive)"
      endDate: DateTime!
      "Temporary bucket (default DAY)"
      bucket: ProgressOverTimeBucket! = DAY
      "List of valid KC codes"
      kcCodes: [String!]!
    }

    input ProgressOverTimeGroupInput {
      "Projects identifier"
      projectsIds: [IntID!]!
      "Group identifier"
      groupId: IntID!
      "Current user identifier"
      currentUserId: IntID
      "Domain identifier"
      domainId: IntID!
      "Initial date of the range (inclusive)"
      startDate: DateTime!
      "End date of the range (inclusive)"
      endDate: DateTime!
      "Temporary bucket (default DAY)"
      bucket: ProgressOverTimeBucket! = DAY
      "List of valid KC codes"
      kcCodes: [String!]!
    }
    "Point in the time series"
    type ProgressOverTimePoint {
      "Bucket start time (UTC)"
      at: DateTime!
      "Latest ModelState.updatedAt used within the bucket"
      snapshotUpdatedAt: DateTime
      "Average level (BKT) over kcCodes"
      avgLevel: Float
      "Number of KCs actually used"
      nKcsUsed: Int!
      "Solo group. Users who contributed to the average"
      nUsers: Int
    }
    "Time series (includes buckets with no data such as null)"
    type ProgressOverTimeSeries {
      points: [ProgressOverTimePoint!]!
    }

    type ProgressOverTimeQueries {
      """
      User series: the last snapshot per bucket within the range is taken and
      avgLevel is calculated over kcCodes.
      """
      userBkt(input: ProgressOverTimeUserInput!): ProgressOverTimeSeries!
      """
      Group series: latest snapshot per user+bucket and then
      average across users.
      """
      groupBkt(input: ProgressOverTimeGroupInput!): ProgressOverTimeSeries!
    }
  `,
  {
    id: "ProgressOverTime",
    dirname: import.meta.url,
    resolvers: {
      Query: {
        progressOverTime() {
          return {};
        },
      },
      ProgressOverTimeQueries: {
        async userBkt(
          _root,
          { input }: ProgressOverTimeQueriesuserBktArgs,
          { prisma }: Context
        ) {
          const bucket = asBucket(input.bucket);
          const startDate = new Date(input.startDate);
          const endDate = new Date(input.endDate);

          const allowed = new Set<string>(input.kcCodes ?? []);

          const lastByBucket = new Map<
            string,
            {
              snapshotUpdatedAt: Date;
              avgLevel: number | null;
              nKcsUsed: number;
            }
          >();

          const where: PrismaNS.ModelStateWhereInput = {
            userId: input.userId,
            domainId: input.domainId,
            type: "BKT",
            updatedAt: { gte: input.startDate, lte: input.endDate },
            user: {
              projects: {
                some: {
                  id: { in: input.projectsIds },
                },
              },
            },
          };

          await iterateModelStatesBkt(prisma, where, (row) => {
            const key = toKey(startOfBucket(row.updatedAt, bucket));

            const prev = lastByBucket.get(key);
            if (prev && prev.snapshotUpdatedAt >= row.updatedAt) return;
            const { avgLevel, nKcsUsed } = avgLevelFromBktJson(
              row.json,
              allowed
            );
            lastByBucket.set(key, {
              snapshotUpdatedAt: row.updatedAt,
              avgLevel,
              nKcsUsed,
            });
          });
          const start = startOfBucket(startDate, bucket);
          const end = startOfBucket(endDate, bucket);

          const points: Array<{
            at: Date;
            snapshotUpdatedAt: Date | null;
            avgLevel: number | null;
            nKcsUsed: number;
            nUsers: number | null;
          }> = [];

          for (
            let cursor = new Date(start);
            cursor <= end;
            cursor = addBucket(cursor, bucket)
          ) {
            const snap = lastByBucket.get(toKey(cursor));
            points.push({
              at: new Date(cursor),
              snapshotUpdatedAt: snap?.snapshotUpdatedAt ?? null,
              avgLevel: snap?.avgLevel ?? null,
              nKcsUsed: snap?.nKcsUsed ?? 0,
              nUsers: null,
            });
          }
          return { points };
        },

        async groupBkt(
          _root,
          { input }: ProgressOverTimeQueriesgroupBktArgs,
          { prisma }: Context
        ) {
          const bucket = asBucket(input.bucket);

          const startDate = new Date(input.startDate);
          const endDate = new Date(input.endDate);

          const allowed = new Set<string>(input.kcCodes ?? []);

          const group = (await prisma.group.findUnique({
            where: { id: input.groupId },
            select: { users: { select: { id: true } } },
          })) as { users: Array<{ id: number }> } | null;

          const userIds: number[] = (group?.users ?? [])
            .map((u) => u.id)
            .filter((id) =>
              input.currentUserId ? id !== input.currentUserId : true
            );

          const lastByUserBucket = new Map<
            string,
            { updatedAt: Date; avgLevel: number | null; nKcsUsed: number }
          >();

          const aggByBucket = new Map<
            string,
            {
              sumLevel: number;
              nUsersLevel: number;
              sumKcsUsed: number;
              snapshotUpdatedAt: Date | null;
            }
          >();

          const ensureAgg = (bucketKey: string) => {
            const ex = aggByBucket.get(bucketKey);
            if (ex) return ex;
            const init = {
              sumLevel: 0,
              nUsersLevel: 0,
              sumKcsUsed: 0,
              snapshotUpdatedAt: null as Date | null,
            };
            aggByBucket.set(bucketKey, init);
            return init;
          };

          const applyOverwrite = (
            userId: number,
            bucketKey: string,
            updatedAt: Date,
            avgLevel: number | null,
            nKcsUsed: number
          ) => {
            const key = `${userId}|${bucketKey}`;
            const prev = lastByUserBucket.get(key);
            if (prev && prev.updatedAt >= updatedAt) return;

            const agg = ensureAgg(bucketKey);

            if (prev && typeof prev.avgLevel === "number") {
              agg.sumLevel -= prev.avgLevel;
              agg.nUsersLevel -= 1;
              agg.sumKcsUsed -= prev.nKcsUsed;
            }

            if (typeof avgLevel === "number") {
              agg.sumLevel += avgLevel;
              agg.nUsersLevel += 1;
              agg.sumKcsUsed += nKcsUsed;
            }

            if (!agg.snapshotUpdatedAt || updatedAt > agg.snapshotUpdatedAt) {
              agg.snapshotUpdatedAt = updatedAt;
            }

            lastByUserBucket.set(key, { updatedAt, avgLevel, nKcsUsed });
          };

          const where: PrismaNS.ModelStateWhereInput = {
            userId: { in: userIds },
            domainId: input.domainId,
            type: "BKT",
            updatedAt: { gte: input.startDate, lte: input.endDate },
            user: {
              projects: {
                some: {
                  id: { in: input.projectsIds },
                },
              },
            },
          };

          await iterateModelStatesBkt(prisma, where, (row) => {
            const bucketKey = toKey(startOfBucket(row.updatedAt, bucket));
            const { avgLevel, nKcsUsed } = avgLevelFromBktJson(
              row.json,
              allowed
            );
            applyOverwrite(
              row.userId,
              bucketKey,
              row.updatedAt,
              avgLevel,
              nKcsUsed
            );
          });

          const start = startOfBucket(startDate, bucket);
          const end = startOfBucket(endDate, bucket);

          const points: Array<{
            at: Date;
            snapshotUpdatedAt: Date | null;
            avgLevel: number | null;
            nKcsUsed: number;
            nUsers: number;
          }> = [];

          for (
            let cursor = new Date(start);
            cursor <= end;
            cursor = addBucket(cursor, bucket)
          ) {
            const agg = aggByBucket.get(toKey(cursor));
            points.push({
              at: new Date(cursor),
              snapshotUpdatedAt: agg?.snapshotUpdatedAt ?? null,
              avgLevel:
                agg && agg.nUsersLevel ? agg.sumLevel / agg.nUsersLevel : null,
              nKcsUsed:
                agg && agg.nUsersLevel
                  ? Math.round(agg.sumKcsUsed / agg.nUsersLevel)
                  : 0,
              nUsers: agg?.nUsersLevel ?? 0,
            });
          }
          return { points };
        },
      },
    } satisfies Resolvers<Context>,
  }
);
