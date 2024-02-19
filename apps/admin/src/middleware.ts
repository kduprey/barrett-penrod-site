import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
	publicRoutes: ["/", "/login", "/sign-up"],
	ignoredRoutes: [
		"/api/oauth/google/callback",
		"/api/oauth/zoom/callback",
		"/api/oauth/stripe/callback",
	],
});

export const config = {
	matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
