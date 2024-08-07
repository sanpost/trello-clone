import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

const isPublicRoute = createRouteMatcher(["/", "/api/webhook", "/sign-in", "/sign-up"]);
const isSelectOrgRoute = createRouteMatcher(["/select-org"]);

export default clerkMiddleware((auth, request) => {
  const { userId, orgId } = auth();

  // Po autoryzacji użytkownika
  if (userId && isPublicRoute(request)) {
    let path = "/select-org";

    if (orgId) {
      path = `/organization/${orgId}`;
    }

    const orgSelection = new URL(path, request.url);
    return NextResponse.redirect(orgSelection);
  }

  if (!userId && !isPublicRoute(request)) {
    return auth().redirectToSignIn({ returnBackUrl: request.url });
  }

  if (userId && !orgId && !isSelectOrgRoute(request)) {
    const orgSelection = new URL("/select-org", request.url);
    return NextResponse.redirect(orgSelection);
  }

  return NextResponse.next();
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};
