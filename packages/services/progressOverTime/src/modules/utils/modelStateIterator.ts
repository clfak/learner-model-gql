import type { PrismaNS } from "api-base";

const BATCH_SIZE = 1000;

export type ModelStateRow = {
  id: number;
  userId: number;
  updatedAt: Date;
  json: PrismaNS.JsonValue;
};

export async function iterateModelStatesBkt(
  prisma: any,
  where: PrismaNS.ModelStateWhereInput,
  onRow: (row: ModelStateRow) => void | Promise<void>
) {
  let cursorId: number | undefined;

  while (true) {
    const batch = (await prisma.modelState.findMany({
      take: BATCH_SIZE,
      ...(cursorId ? { cursor: { id: cursorId }, skip: 1 } : {}),
      where,
      orderBy: { id: "asc" },
      select: {
        id: true,
        userId: true,
        updatedAt: true,
        json: true,
      },
    })) as ModelStateRow[];

    if (batch.length === 0) break;
    for (const row of batch) await onRow(row);

    cursorId = batch.at(-1)?.id;
    if (!cursorId) break;
  }
}
