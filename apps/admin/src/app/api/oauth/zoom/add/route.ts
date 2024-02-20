import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { getZoomRedirectUrl } from "@/utils/zoom/credentials";

export const GET = (req: NextRequest) => {
	const { userId } = auth();

	if (!userId) {
		return new NextResponse("Unauthorized", {
			status: 401,
		});
	}

	return redirect(
		getZoomRedirectUrl(
			userId,
			req.nextUrl.searchParams.get("isFirstTime") === "true"
		)
	);
};
