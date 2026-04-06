type Bucket = "DAY" | "WEEK" | "MONTH";

export function asBucket(bucket: unknown): Bucket {
  if (bucket === "DAY" || bucket === "WEEK" || bucket === "MONTH") {
    return bucket;
  }
  return "DAY";
}

export function startOfBucket(date: Date, bucket: Bucket): Date {
  const d = new Date(date);
  if (bucket === "DAY") {
    d.setUTCHours(0, 0, 0, 0);
    return d;
  }
  if (bucket === "WEEK") {
    const day = d.getUTCDay();
    const diff = (day + 6) % 7;
    d.setUTCDate(d.getUTCDate() - diff);
    d.setUTCHours(0, 0, 0, 0);
    return d;
  }
  //month
  d.setUTCDate(1);
  d.setUTCHours(0, 0, 0, 0);
  return d;
}

export function addBucket(date: Date, bucket: Bucket): Date {
  const d = new Date(date);

  if (bucket === "DAY") {
    d.setUTCDate(d.getUTCDate() + 1);
    return d;
  }
  if (bucket === "WEEK") {
    d.setUTCDate(d.getUTCDate() + 7);
    return d;
  }
  //month
  d.setUTCMonth(d.getUTCMonth() + 1);
  return d;
}

export function toKey(date: Date): string {
  return date.toISOString();
}
