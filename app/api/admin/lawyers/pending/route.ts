export const runtime = "nodejs";

import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import { User } from "@/models/User";
import { withAuth } from "@/lib/auth/withAuth";

export async function GET(req: NextRequest) {
  const auth = await withAuth(req, ["ADMIN"]);
  if (auth.error) return auth.error;

  try {
    await connectDB();

    const pendingLawyers = await User.find({
      role: "LAWYER",
      verificationStatus: "PENDING",
    }).select("-passwordHash");

    return NextResponse.json(
      { lawyers: pendingLawyers },
      { status: 200 }
    );
  } catch (error) {
    console.error("FETCH PENDING LAWYERS ERROR:", error);

    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
