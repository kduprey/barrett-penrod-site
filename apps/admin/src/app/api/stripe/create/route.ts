// import { ADMIN_URL, stripe } from "@bpvs/config";
// import type { NextRequest } from "next/server";
// import { NextResponse } from "next/server";

// export const GET = async (req: NextRequest) => {
// 	const account = await stripe.accounts.create({
// 		type: "standard",
// 	});

// 	const url = await stripe.accountLinks.create({
// 		account: account.id,
// 		refresh_url: `${ADMIN_URL}/dashboard/settings`,
// 		return_url: `${req.origin}/dashboard/settings`,
// 		type: "account_onboarding",
// 	});

// 	if (error) {
// 		console.error(error);
// 		return new NextResponse("Error message not set", {
// 			status: 500,
// 		});
// 	}

// 	return NextResponse.json(
// 		{},
// 		{
// 			status: 200,
// 		}
// 	);
// };
