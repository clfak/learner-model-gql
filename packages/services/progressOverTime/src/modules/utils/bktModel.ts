import type { PrismaNS } from "api-base";

type KcState = { level?: number };
type ModelJson = Record<string, KcState>;

export function avgLevelFromBktJson(
  json: PrismaNS.JsonValue,
  allowed: Set<string>
): { avgLevel: number | null; nKcsUsed: number } {
  if (!json || typeof json !== "object" || Array.isArray(json)) {
    return { avgLevel: null, nKcsUsed: 0 };
  }
  const obj = json as unknown as ModelJson;
  let sum = 0;
  let n = 0;

  for (const [kc, v] of Object.entries(obj)) {
    if (!kc) continue;
    if (!allowed.has(kc)) continue;

    const level = v?.level;
    if (typeof level !== "number" || Number.isNaN(level)) continue;

    sum += level;
    n += 1;
  }
  return { avgLevel: n ? sum / n : null, nKcsUsed: n };
}
