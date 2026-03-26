import { Redis } from "@upstash/redis";
import { StoredBrief } from "@/types";

function getRedis() {
  const url = process.env.UPSTASH_REDIS_REST_URL;
  const token = process.env.UPSTASH_REDIS_REST_TOKEN;

  if (!url || !token) {
    return null;
  }

  return new Redis({ url, token });
}

export async function saveBrief(
  id: string,
  data: StoredBrief
): Promise<boolean> {
  const redis = getRedis();
  if (!redis) {
    // Fallback: store in memory for local dev
    if (typeof globalThis !== "undefined") {
      (globalThis as Record<string, unknown>).__briefStore =
        (globalThis as Record<string, unknown>).__briefStore || {};
      (
        (globalThis as Record<string, unknown>).__briefStore as Record<
          string,
          StoredBrief
        >
      )[id] = data;
    }
    return true;
  }

  await redis.set(`brief:${id}`, JSON.stringify(data), { ex: 2592000 }); // 30 days
  return true;
}

export async function getBrief(id: string): Promise<StoredBrief | null> {
  const redis = getRedis();
  if (!redis) {
    // Fallback: read from memory for local dev
    if (typeof globalThis !== "undefined") {
      const store = (globalThis as Record<string, unknown>).__briefStore as
        | Record<string, StoredBrief>
        | undefined;
      return store?.[id] || null;
    }
    return null;
  }

  const data = await redis.get<string>(`brief:${id}`);
  if (!data) return null;
  return typeof data === "string" ? JSON.parse(data) : data;
}
