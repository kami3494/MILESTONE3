import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';

const isPublicRoute = createRouteMatcher([
  '/sign-in(.*)', // Existing sign-in route
  '/sign-up(.*)',
  '/(.*)',    // Home page route
  '/shop(.*)',    // Shop page route
  '/about(.*)',   // About page route
  '/pages(.*)',   // Pages route
  '/pricing(.*)', // Pricing page route
  '/contact(.*)', // Contact page route
  '/cart(.*)',    // Cart page route
  '/dashboard(.*)', // Dashboard page route
  '/checkout(.*)', // Checkout page route
]);

export default clerkMiddleware(async (auth, request) => {
  if (!isPublicRoute(request)) {
    await auth.protect();
  }
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};