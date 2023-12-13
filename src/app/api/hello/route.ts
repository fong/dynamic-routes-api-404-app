export const runtime = "edge";

export async function GET(req: Request) {
  return Response.json(
    { name: "John Doe", timestamp: new Date().getTime(), type: "API route" },
    { status: 200 }
  );
}
