export const runtime = "nodejs";

import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import { User } from "@/models/User";
import { withAuth } from "@/lib/auth/withAuth";

export async function PATCH(
  req: NextRequest,
  context: { params: { id: string } }
) {
  const auth = await withAuth(req, ["ADMIN"]);
  if (auth.error) return auth.error;

  try {
    await connectDB();

    const { id } = context.params;
    const body = await req.json();
    const { action } = body;

    if (!["APPROVED", "REJECTED"].includes(action)) {
      return NextResponse.json(
        { error: "Invalid action" },
        { status: 400 }
      );
    }

    const lawyer = await User.findById(id);

    if (!lawyer || lawyer.role !== "LAWYER") {
      return NextResponse.json(
        { error: "Lawyer not found" },
        { status: 404 }
      );
    }

    lawyer.verificationStatus = action;
    await lawyer.save();

    return NextResponse.json(
      { message: `Lawyer ${action.toLowerCase()}` },
      { status: 200 }
    );
  } catch (error) {
    console.error("APPROVAL ERROR:", error);

    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
