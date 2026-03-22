export const runtime = "nodejs";

import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import { User } from "@/models/User";

export async function GET(req: NextRequest) {
  try {
    await connectDB();

    const { searchParams } = new URL(req.url);

    const state = searchParams.get("state");
    const specialization = searchParams.get("specialization");

    const filter: any = {
      role: "LAWYER",
      verificationStatus: "APPROVED",
    };

    if (state) filter.state = state;
    if (specialization) filter.specialization = specialization;
    console.log("Filter object:", filter);

    const lawyers = await User.find(filter)
      .select(
        "_id name email state specialization experience barId"
      )
      .sort({ createdAt: -1 });

    return NextResponse.json({ lawyers }, { status: 200 });

  } catch (error) {
    console.error("LAWYERS FETCH ERROR:", error);

    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}