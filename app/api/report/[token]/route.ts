export const runtime = "nodejs";

import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import { Report } from "@/models/Report";
import { rateLimiter } from "@/lib/ratelimiter";
import { getClientIP } from "@/lib/getClientIP";



export async function GET(
  req: Request,
  context: { params: Promise<{ token: string }> }
) {
  try {
    const { token } = await context.params; //

    if (!token) {
      return NextResponse.json(
        { error: "Tracking token missing" },
        { status: 400 }
      );
    }

    const ip = await getClientIP();
    const key = `track:${ip}`;

    const limit = rateLimiter(key, {
      windowMs: 60 * 1000, // 1 minute
      maxRequests: 10, // 10 attempts per minute
    });

    if (!limit.allowed) {
      return NextResponse.json(
        {
          error: "Too many tracking attempts. Please wait and try again.",
        },
        {
          status: 429,
          headers: {
            "Retry-After": String(limit.retryAfter),
          },
        }
      );
    }

    const cleanToken = token.trim().toUpperCase();

    await connectDB();

    const report = await Report.findOne({ token: cleanToken }).select(
      "status createdAt"
    );

    if (!report) {
      return NextResponse.json({ error: "Invalid token" }, { status: 404 });
    }

    return NextResponse.json(
      {
        status: report.status,
        createdAt: report.createdAt,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("TRACKING ERROR:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
