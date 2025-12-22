import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import { Report } from "@/models/Report";

// helper to generate tracking token
function generateToken() {
  return Math.random().toString(36).substring(2, 15).toUpperCase();
}

export async function POST(req: Request) {
  try {
    const body = await req.json();

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
