import { headers } from "next/headers";

export async function getClientIP(): Promise<string> {
    const headerList= await headers();
  const forwardedFor = headerList.get("x-forwarded-for");
  if (forwardedFor) {
    return forwardedFor.split(",")[0].trim();
  }
  return "unknown";
}
