import { clerkMiddleware, ClerkMiddlewareOptions } from "@clerk/nextjs/server";

interface CustomClerkMiddlewareOptions extends ClerkMiddlewareOptions {
  publicRoutes: string[];
}

export default clerkMiddleware(
    {
        publicRoutes: ['/'],
    } as CustomClerkMiddlewareOptions
);

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};