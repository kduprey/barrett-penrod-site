import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import { NextResponse } from "next/server";
import { getZoomRedirectUrl } from "@/utils/zoom/credentials";

export const GET = () => {
	const { userId } = auth();

	if (!userId) {
		return new NextResponse("Unauthorized", {
			status: 401,
		});
	}

	return redirect(getZoomRedirectUrl(userId));
};
