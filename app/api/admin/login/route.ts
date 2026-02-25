import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { connectDB } from "@/lib/mongodb";
import { Admin } from "@/models/Admin";
import { signToken } from "@/lib/auth/jwt";

export async function POST(req: Request) {
  await connectDB();

  const body = await req.json();
  const { email, password } = body;

  const admin = await Admin.findOne({ email });
  if (!admin) {
    return NextResponse.json(
      { error: "Invalid credentials" },
      { status: 401 }
    );
  }

  const isMatch = await bcrypt.compare(password, admin.password);
  if (!isMatch) {
    return NextResponse.json(
      { error: "Invalid credentials" },
      { status: 401 }
    );
  }

  const token = signToken({
    id: admin._id,
    role: "ADMIN",
  });

  return NextResponse.json({ token });
}