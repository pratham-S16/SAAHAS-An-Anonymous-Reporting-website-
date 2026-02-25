import { verifyToken } from "./jwt";

export function withAuth(handler: any, requiredRole: string) {
  return async (req: Request) => {
    try {
      const authHeader = req.headers.get("authorization");
      if (!authHeader)
        return new Response("Unauthorized", { status: 401 });

      const token = authHeader.split(" ")[1];
      const decoded: any = verifyToken(token);

      if (decoded.role !== requiredRole) {
        return new Response("Forbidden", { status: 403 });
      }

      return handler(req, decoded);
    } catch {
      return new Response("Invalid token", { status: 401 });
    }
  };
}