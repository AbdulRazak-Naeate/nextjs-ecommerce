import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import { getUserCountry } from "./lib/utils";

export default clerkMiddleware(async (auth, req) => {
  // 🚨 HARD BYPASS FOR WEBHOOKS
  if (req.nextUrl.pathname.startsWith("/api/webhooks")) {
    return NextResponse.next();
  }

  const protectedRoutes = createRouteMatcher([
    "/dashboard",
    "/dashboard/(.*)",
    "/checkout",
    "/profile",
    "/profile/(.*)",
  ]);

  if (protectedRoutes(req)) auth().protect();

  let response = NextResponse.next();

  /*---------Handle Country detection----------*/
  const countryCookie = req.cookies.get("userCountry");

  if (!countryCookie) {
    const userCountry = await getUserCountry();

    response.cookies.set("userCountry", JSON.stringify(userCountry), {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
    });
  }

  return response;
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/(api|trpc)(.*)"],
};
