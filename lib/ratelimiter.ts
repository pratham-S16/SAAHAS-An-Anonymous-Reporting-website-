type RateLimitConfig = {
  windowMs: number;   // time window in ms
  maxRequests: number;
};

type Record = {
  count: number;
  startTime: number;
};

// In-memory store (safe for MVP / dev)
const rateLimitStore = new Map<string, Record>();

export function rateLimiter(
  key: string,
  config: RateLimitConfig
): { allowed: boolean; retryAfter?: number } {
  const now = Date.now();
  const entry = rateLimitStore.get(key);

  // First request
  if (!entry) {
    rateLimitStore.set(key, {
      count: 1,
      startTime: now,
    });
    return { allowed: true };
  }

  // Reset window if expired
  if (now - entry.startTime > config.windowMs) {
    rateLimitStore.set(key, {
      count: 1,
      startTime: now,
    });
    return { allowed: true };
  }

  // Increment count
  entry.count += 1;

  if (entry.count > config.maxRequests) {
    const retryAfter = Math.ceil(
      (config.windowMs - (now - entry.startTime)) / 1000
    );
    return { allowed: false, retryAfter };
  }

  return { allowed: true };
}
