export const runtime = "nodejs";

import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import { User } from "@/models/User";
import { verifyToken } from "@/lib/auth/jwt";

export async function PATCH(
  req: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  try {
    await connectDB();

    // 🔐 Extract and verify token manually (cleaner pattern)
    const authHeader = req.headers.get("authorization");

    if (!authHeader?.startsWith("Bearer ")) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }

    const token = authHeader.split(" ")[1];
    const decoded: any = verifyToken(token);

    if (decoded.role !== "ADMIN") {
      return NextResponse.json(
        { error: "Forbidden" },
        { status: 403 }
      );
    }

    // 📦 Get request body
    const { action } = await req.json();

    if (!["APPROVED", "REJECTED"].includes(action)) {
      return NextResponse.json(
        { error: "Invalid action" },
        { status: 400 }
      );
    }

    const { id: lawyerId } = await context.params;

    // console.log("lawyer id", lawyerId, "action", action);
    // console.log("params:", context.params);
    
    // ⚡ Atomic update (better than find + save)
    const updatedLawyer = await User.findOneAndUpdate(
      { _id: lawyerId, role: "LAWYER" },
      { verificationStatus: action },
      { new: true }
    );

    if (!updatedLawyer) {
      return NextResponse.json(
        { error: "Lawyer not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      {
        message: `Lawyer ${action.toLowerCase()} successfully`,
        lawyerId: updatedLawyer._id,
        newStatus: updatedLawyer.verificationStatus,
      },
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