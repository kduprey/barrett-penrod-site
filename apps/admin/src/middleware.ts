import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
	ignoredRoutes: ["/api/webhooks/auth"],
});

export const config = {
	matcher: ["/((?!api|trpc))(_next.*|.+.[w]+$)", "/api/webhooks/auth"],
};
