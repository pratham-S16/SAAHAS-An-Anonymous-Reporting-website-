export const runtime = "nodejs";

import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import { Report } from "@/models/Report";

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

    const cleanToken = token.trim().toUpperCase();

    await connectDB();

    const report = await Report.findOne({ token: cleanToken }).select(
      "status createdAt"
    );

    if (!report) {
      return NextResponse.json(
        { error: "Invalid token" },
        { status: 404 }
      );
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
