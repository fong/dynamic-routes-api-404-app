export const runtime = "edge";

export default function handler(req: Request) {
  return Response.json(
    { name: "John Doe", timestamp: new Date().getTime(), type: "API route" },
    { status: 200 }
  );
}
