import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  const reqHeaders = new Headers(req.headers);
  console.log(reqHeaders.get("Authorization"));

  const theme = req.cookies.get("theme");
  console.log(theme);
  return new Response("<h1>profile detail api</h1>", {
    headers: {
      "Content-type": "text/html",
      "Set-Cookie": "theme=dark",
    },
  });
}
