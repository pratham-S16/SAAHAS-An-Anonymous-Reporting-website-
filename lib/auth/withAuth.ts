import { NextRequest, NextResponse } from "next/server";
import { verifyToken } from "./jwt";

export async function withAuth(
  req: NextRequest,
  allowedRoles=["ADMIN"]
) {
  const authHeader = req.headers.get("authorization");

  if (!authHeader?.startsWith("Bearer ")) {
    return {
      error: NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      ),
    };
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = verifyToken(token) as {
      userId: string;
      role: "ADMIN" | "LAWYER";
    };

    if (!allowedRoles.includes(decoded.role)) {
      return {
        error: NextResponse.json(
          { error: "Forbidden" },
          { status: 403 }
        ),
      };
    }

    return { user: decoded };

  } catch {
    return {
      error: NextResponse.json(
        { error: "Invalid token" },
        { status: 401 }
      ),
    };
  }
}
