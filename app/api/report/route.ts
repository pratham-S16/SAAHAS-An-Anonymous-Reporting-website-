import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import { Report } from "@/models/Report";
import { rateLimiter } from "@/lib/ratelimiter";
import { getClientIP } from "@/lib/getClientIP";
import { reportSchema } from "@/lib/validators/reportSchema";
import { sanitizeText } from "@/lib/sanitize";

// helper to generate tracking token
function generateToken() {
  return Math.random().toString(36).substring(2, 15).toUpperCase();
}

export async function POST(req: Request) {
  try {
    const ip = await getClientIP();
    const key = `report:${ip}`;

    const limit = rateLimiter(key, {
      windowMs: 60 * 60 * 1000, // 1 hour
      maxRequests: 3, // 3 reports per hour
    });

    if (!limit.allowed) {
      return NextResponse.json(
        {
          error: "Too many reports submitted. Please try again later.",
        },
        {
          status: 429,
          headers: {
            "Retry-After": String(limit.retryAfter),
          },
        }
      );
    }

    const body = await req.json();

    // 1️⃣ Sanitize dangerous text fields
    const sanitizedBody = {
      ...body,
      description: sanitizeText(body.description),
      pressure: body.pressure ? sanitizeText(body.pressure) : undefined,
      state: sanitizeText(body.state),
      district: sanitizeText(body.district),
      policeStation: sanitizeText(body.policeStation),
    };

    // 2️⃣ Validate shape & constraints
    const parsed = reportSchema.safeParse(sanitizedBody);

    if (!parsed.success) {
      return NextResponse.json(
        {
          error: "Invalid input data",
          issues: parsed.error.flatten().fieldErrors,
        },
        { status: 400 }
      );
    }

    const data = parsed.data;

    // const body = await req.json();

    const {
      category,
      description,
      incidentDate,
      incidentTime,
      state,
      district,
      policeStation,
      email,
      pressure,
      evidenceFiles,
    } = body;

    // Basic validation
    if (!category || !description || !state || !district || !policeStation) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    await connectDB();

    const token = generateToken();

    const report = await Report.create({
      token,
      category,
      description,
      incidentDate,
      incidentTime,
      state,
      district,
      policeStation,
      email,
      pressure,
      evidenceFiles,
      // evidenceFiles: body.evidenceFiles || [],
    });

    return NextResponse.json(
      {
        success: true,
        token: report.token,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
