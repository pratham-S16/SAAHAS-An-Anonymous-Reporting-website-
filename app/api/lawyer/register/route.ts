export const runtime = "nodejs";

import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import { User } from "@/models/User";
import { hashPassword } from "@/lib/auth/password";

export async function POST(req: NextRequest) {
  try {
    await connectDB();

    const body = await req.json();

    const {
      name,
      email,
      password,
      barId,
      state,
      specialization,
      experience,
    } = body;

    // 🔹 Basic validation
    if (
      !name ||
      !email ||
      !password ||
      !barId ||
      !state ||
      !specialization ||
      !experience
    ) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // 🔹 Check if user already exists
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return NextResponse.json(
        { error: "Email already registered" },
        { status: 409 }
      );
    }

    // 🔹 Hash password
    const passwordHash = await hashPassword(password);

    // 🔹 Create lawyer
    await User.create({
      name,
      email,
      passwordHash,
      role: "LAWYER",
      verificationStatus: "PENDING",
      barId,
      state,
      specialization,
      experience: Number(experience),
    });

    return NextResponse.json(
      {
        message:
          "Registration successful. Awaiting admin verification.",
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("LAWYER REGISTER ERROR:", error);

    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
