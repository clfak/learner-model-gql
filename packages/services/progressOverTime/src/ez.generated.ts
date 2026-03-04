import type {
  GraphQLResolveInfo,
  GraphQLScalarType,
  GraphQLScalarTypeConfig,
} from "graphql";
import type { EZContext } from "graphql-ez";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) =>
  | Promise<import("graphql-ez").DeepPartial<TResult>>
  | import("graphql-ez").DeepPartial<TResult>;
export type RequireFields<T, K extends keyof T> = Omit<T, K> & {
  [P in K]-?: NonNullable<T[P]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: string | Date;
  /** A field whose value conforms to the standard internet email address format as specified in RFC822: https://www.w3.org/Protocols/rfc822/. */
  EmailAddress: string;
  /** ID that parses as non-negative integer, serializes to string, and can be passed as string or number */
  IntID: number;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: unknown;
  /** The `JSONObject` scalar type represents JSON objects as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSONObject: any;
  /** Integers that will have a value of 0 or more. */
  NonNegativeInt: number;
  /** The javascript `Date` as integer. Type represents date and time as number of milliseconds from start of UNIX epoch. */
  Timestamp: Date;
  /** A field whose value conforms to the standard URL format as specified in RFC3986: https://www.ietf.org/rfc/rfc3986.txt. */
  URL: string;
  /** Represents NULL values */
  Void: unknown;
};

/** Pagination Interface */
export type Connection = {
  /** Pagination information */
  pageInfo: PageInfo;
};

/**
 * Pagination parameters
 *
 * Forward pagination parameters can't be mixed with Backward pagination parameters simultaneously
 *
 * first & after => Forward Pagination
 *
 * last & before => Backward Pagination
 */
export type CursorConnectionArgs = {
  /**
   * Set the minimum boundary
   *
   * Use the "endCursor" field of "pageInfo"
   */
  after?: InputMaybe<Scalars["IntID"]>;
  /**
   * Set the maximum boundary
   *
   * Use the "startCursor" field of "pageInfo"
   */
  before?: InputMaybe<Scalars["IntID"]>;
  /**
   * Set the limit of nodes to be fetched
   *
   * It can't be more than 50
   */
  first?: InputMaybe<Scalars["NonNegativeInt"]>;
  /**
   * Set the limit of nodes to be fetched
   *
   * It can't be more than 50
   */
  last?: InputMaybe<Scalars["NonNegativeInt"]>;
};

export type Mutation = {
  __typename?: "Mutation";
  /** Returns 'Hello World!' */
  hello: Scalars["String"];
};

/** Minimum Entity Information */
export type Node = {
  /** Unique numeric identifier */
  id: Scalars["IntID"];
};

/** Order ascendingly or descendingly */
export const ORDER_BY = {
  ASC: "ASC",
  DESC: "DESC",
} as const;

export type ORDER_BY = (typeof ORDER_BY)[keyof typeof ORDER_BY];
/** Paginated related information */
export type PageInfo = {
  __typename?: "PageInfo";
  /** Cursor parameter normally used for forward pagination */
  endCursor?: Maybe<Scalars["String"]>;
  /** Utility field that returns "true" if a next page can be fetched */
  hasNextPage: Scalars["Boolean"];
  /** Utility field that returns "true" if a previous page can be fetched */
  hasPreviousPage: Scalars["Boolean"];
  /** Cursor parameter normally used for backward pagination */
  startCursor?: Maybe<Scalars["String"]>;
};

/** Temporal granularity of the bucket. */
export const ProgressOverTimeBucket = {
  /** Group by day (UTC) */
  DAY: "DAY",
  /** Group by month (UTC) */
  MONTH: "MONTH",
  /** Group by week (UTC) */
  WEEK: "WEEK",
} as const;

export type ProgressOverTimeBucket =
  (typeof ProgressOverTimeBucket)[keyof typeof ProgressOverTimeBucket];
export type ProgressOverTimeGroupInput = {
  /** Temporary bucket (default DAY) */
  bucket?: ProgressOverTimeBucket;
  /** Current user identifier */
  currentUserId?: InputMaybe<Scalars["IntID"]>;
  /** Domain identifier */
  domainId: Scalars["IntID"];
  /** End date of the range (inclusive) */
  endDate: Scalars["DateTime"];
  /** Group identifier */
  groupId: Scalars["IntID"];
  /** List of valid KC codes */
  kcCodes: Array<Scalars["String"]>;
  /** Projects identifier */
  projectsIds: Array<Scalars["IntID"]>;
  /** Initial date of the range (inclusive) */
  startDate: Scalars["DateTime"];
};

/** Point in the time series */
export type ProgressOverTimePoint = {
  __typename?: "ProgressOverTimePoint";
  /** Bucket start time (UTC) */
  at: Scalars["DateTime"];
  /** Average level (BKT) over kcCodes */
  avgLevel?: Maybe<Scalars["Float"]>;
  /** Number of KCs actually used */
  nKcsUsed: Scalars["Int"];
  /** Solo group. Users who contributed to the average */
  nUsers?: Maybe<Scalars["Int"]>;
  /** Latest ModelState.updatedAt used within the bucket */
  snapshotUpdatedAt?: Maybe<Scalars["DateTime"]>;
};

export type ProgressOverTimeQueries = {
  __typename?: "ProgressOverTimeQueries";
  /**
   * Group series: latest snapshot per user+bucket and then
   * average across users.
   */
  groupBkt: ProgressOverTimeSeries;
  /**
   * User series: the last snapshot per bucket within the range is taken and
   * avgLevel is calculated over kcCodes.
   */
  userBkt: ProgressOverTimeSeries;
};

export type ProgressOverTimeQueriesgroupBktArgs = {
  input: ProgressOverTimeGroupInput;
};

export type ProgressOverTimeQueriesuserBktArgs = {
  input: ProgressOverTimeUserInput;
};

/** Time series (includes buckets with no data such as null) */
export type ProgressOverTimeSeries = {
  __typename?: "ProgressOverTimeSeries";
  points: Array<ProgressOverTimePoint>;
};

/** Input: individual progress series (BKT) */
export type ProgressOverTimeUserInput = {
  /** Temporary bucket (default DAY) */
  bucket?: ProgressOverTimeBucket;
  /** Domain identifier */
  domainId: Scalars["IntID"];
  /** End date of the range (inclusive) */
  endDate: Scalars["DateTime"];
  /** List of valid KC codes */
  kcCodes: Array<Scalars["String"]>;
  /** Projects identifier */
  projectsIds: Array<Scalars["IntID"]>;
  /** Initial date of the range (inclusive) */
  startDate: Scalars["DateTime"];
  /** User identifier */
  userId: Scalars["IntID"];
};

export type Query = {
  __typename?: "Query";
  /** Returns 'Hello World!' */
  hello: Scalars["String"];
  /**
   * Progress series (BKT) added by user and group.
   *
   * Returns points per bucket (DAY/WEEK/MONTH).
   */
  progressOverTime: ProgressOverTimeQueries;
};

export type Subscription = {
  __typename?: "Subscription";
  /** Emits 'Hello World1', 'Hello World2', 'Hello World3', 'Hello World4' and 'Hello World5' */
  hello: Scalars["String"];
};

export type ResolverTypeWrapper<T> = Promise<T> | T;

export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs
> {
  subscribe: SubscriptionSubscribeFn<
    { [key in TKey]: TResult },
    TParent,
    TContext,
    TArgs
  >;
  resolve?: SubscriptionResolveFn<
    TResult,
    { [key in TKey]: TResult },
    TContext,
    TArgs
  >;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs
> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<
  TResult,
  TKey extends string,
  TParent = {},
  TContext = {},
  TArgs = {}
> =
  | ((
      ...args: any[]
    ) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (
  obj: T,
  context: TContext,
  info: GraphQLResolveInfo
) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<
  TResult = {},
  TParent = {},
  TContext = {},
  TArgs = {}
> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Connection: never;
  CursorConnectionArgs: CursorConnectionArgs;
  DateTime: ResolverTypeWrapper<Scalars["DateTime"]>;
  EmailAddress: ResolverTypeWrapper<Scalars["EmailAddress"]>;
  IntID: ResolverTypeWrapper<Scalars["IntID"]>;
  JSON: ResolverTypeWrapper<Scalars["JSON"]>;
  JSONObject: ResolverTypeWrapper<Scalars["JSONObject"]>;
  Mutation: ResolverTypeWrapper<{}>;
  String: ResolverTypeWrapper<Scalars["String"]>;
  Node: never;
  NonNegativeInt: ResolverTypeWrapper<Scalars["NonNegativeInt"]>;
  ORDER_BY: ORDER_BY;
  PageInfo: ResolverTypeWrapper<PageInfo>;
  Boolean: ResolverTypeWrapper<Scalars["Boolean"]>;
  ProgressOverTimeBucket: ProgressOverTimeBucket;
  ProgressOverTimeGroupInput: ProgressOverTimeGroupInput;
  ProgressOverTimePoint: ResolverTypeWrapper<ProgressOverTimePoint>;
  Float: ResolverTypeWrapper<Scalars["Float"]>;
  Int: ResolverTypeWrapper<Scalars["Int"]>;
  ProgressOverTimeQueries: ResolverTypeWrapper<ProgressOverTimeQueries>;
  ProgressOverTimeSeries: ResolverTypeWrapper<ProgressOverTimeSeries>;
  ProgressOverTimeUserInput: ProgressOverTimeUserInput;
  Query: ResolverTypeWrapper<{}>;
  Subscription: ResolverTypeWrapper<{}>;
  Timestamp: ResolverTypeWrapper<Scalars["Timestamp"]>;
  URL: ResolverTypeWrapper<Scalars["URL"]>;
  Void: ResolverTypeWrapper<Scalars["Void"]>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Connection: never;
  CursorConnectionArgs: CursorConnectionArgs;
  DateTime: Scalars["DateTime"];
  EmailAddress: Scalars["EmailAddress"];
  IntID: Scalars["IntID"];
  JSON: Scalars["JSON"];
  JSONObject: Scalars["JSONObject"];
  Mutation: {};
  String: Scalars["String"];
  Node: never;
  NonNegativeInt: Scalars["NonNegativeInt"];
  PageInfo: PageInfo;
  Boolean: Scalars["Boolean"];
  ProgressOverTimeGroupInput: ProgressOverTimeGroupInput;
  ProgressOverTimePoint: ProgressOverTimePoint;
  Float: Scalars["Float"];
  Int: Scalars["Int"];
  ProgressOverTimeQueries: ProgressOverTimeQueries;
  ProgressOverTimeSeries: ProgressOverTimeSeries;
  ProgressOverTimeUserInput: ProgressOverTimeUserInput;
  Query: {};
  Subscription: {};
  Timestamp: Scalars["Timestamp"];
  URL: Scalars["URL"];
  Void: Scalars["Void"];
};

export type ConnectionResolvers<
  ContextType = EZContext,
  ParentType extends ResolversParentTypes["Connection"] = ResolversParentTypes["Connection"]
> = {
  __resolveType: TypeResolveFn<null, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes["PageInfo"], ParentType, ContextType>;
};

export interface DateTimeScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes["DateTime"], any> {
  name: "DateTime";
}

export interface EmailAddressScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes["EmailAddress"], any> {
  name: "EmailAddress";
}

export interface IntIDScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes["IntID"], any> {
  name: "IntID";
}

export interface JSONScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes["JSON"], any> {
  name: "JSON";
}

export interface JSONObjectScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes["JSONObject"], any> {
  name: "JSONObject";
}

export type MutationResolvers<
  ContextType = EZContext,
  ParentType extends ResolversParentTypes["Mutation"] = ResolversParentTypes["Mutation"]
> = {
  hello?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
};

export type NodeResolvers<
  ContextType = EZContext,
  ParentType extends ResolversParentTypes["Node"] = ResolversParentTypes["Node"]
> = {
  __resolveType: TypeResolveFn<null, ParentType, ContextType>;
  id?: Resolver<ResolversTypes["IntID"], ParentType, ContextType>;
};

export interface NonNegativeIntScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes["NonNegativeInt"], any> {
  name: "NonNegativeInt";
}

export type PageInfoResolvers<
  ContextType = EZContext,
  ParentType extends ResolversParentTypes["PageInfo"] = ResolversParentTypes["PageInfo"]
> = {
  endCursor?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  hasNextPage?: Resolver<ResolversTypes["Boolean"], ParentType, ContextType>;
  hasPreviousPage?: Resolver<
    ResolversTypes["Boolean"],
    ParentType,
    ContextType
  >;
  startCursor?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProgressOverTimePointResolvers<
  ContextType = EZContext,
  ParentType extends ResolversParentTypes["ProgressOverTimePoint"] = ResolversParentTypes["ProgressOverTimePoint"]
> = {
  at?: Resolver<ResolversTypes["DateTime"], ParentType, ContextType>;
  avgLevel?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  nKcsUsed?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  nUsers?: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
  snapshotUpdatedAt?: Resolver<
    Maybe<ResolversTypes["DateTime"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProgressOverTimeQueriesResolvers<
  ContextType = EZContext,
  ParentType extends ResolversParentTypes["ProgressOverTimeQueries"] = ResolversParentTypes["ProgressOverTimeQueries"]
> = {
  groupBkt?: Resolver<
    ResolversTypes["ProgressOverTimeSeries"],
    ParentType,
    ContextType,
    RequireFields<ProgressOverTimeQueriesgroupBktArgs, "input">
  >;
  userBkt?: Resolver<
    ResolversTypes["ProgressOverTimeSeries"],
    ParentType,
    ContextType,
    RequireFields<ProgressOverTimeQueriesuserBktArgs, "input">
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProgressOverTimeSeriesResolvers<
  ContextType = EZContext,
  ParentType extends ResolversParentTypes["ProgressOverTimeSeries"] = ResolversParentTypes["ProgressOverTimeSeries"]
> = {
  points?: Resolver<
    Array<ResolversTypes["ProgressOverTimePoint"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<
  ContextType = EZContext,
  ParentType extends ResolversParentTypes["Query"] = ResolversParentTypes["Query"]
> = {
  hello?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  progressOverTime?: Resolver<
    ResolversTypes["ProgressOverTimeQueries"],
    ParentType,
    ContextType
  >;
};

export type SubscriptionResolvers<
  ContextType = EZContext,
  ParentType extends ResolversParentTypes["Subscription"] = ResolversParentTypes["Subscription"]
> = {
  hello?: SubscriptionResolver<
    ResolversTypes["String"],
    "hello",
    ParentType,
    ContextType
  >;
};

export interface TimestampScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes["Timestamp"], any> {
  name: "Timestamp";
}

export interface URLScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes["URL"], any> {
  name: "URL";
}

export interface VoidScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes["Void"], any> {
  name: "Void";
}

export type Resolvers<ContextType = EZContext> = {
  Connection?: ConnectionResolvers<ContextType>;
  DateTime?: GraphQLScalarType;
  EmailAddress?: GraphQLScalarType;
  IntID?: GraphQLScalarType;
  JSON?: GraphQLScalarType;
  JSONObject?: GraphQLScalarType;
  Mutation?: MutationResolvers<ContextType>;
  Node?: NodeResolvers<ContextType>;
  NonNegativeInt?: GraphQLScalarType;
  PageInfo?: PageInfoResolvers<ContextType>;
  ProgressOverTimePoint?: ProgressOverTimePointResolvers<ContextType>;
  ProgressOverTimeQueries?: ProgressOverTimeQueriesResolvers<ContextType>;
  ProgressOverTimeSeries?: ProgressOverTimeSeriesResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Subscription?: SubscriptionResolvers<ContextType>;
  Timestamp?: GraphQLScalarType;
  URL?: GraphQLScalarType;
  Void?: GraphQLScalarType;
};

declare module "graphql-ez" {
  interface EZResolvers extends Resolvers<import("graphql-ez").EZContext> {}
}
