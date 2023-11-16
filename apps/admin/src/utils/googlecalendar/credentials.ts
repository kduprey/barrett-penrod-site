// import { prisma } from "@bpvs/db";

// export const loadGCalCredentialsIfExist = async (authId: string) => {
// 	const credentials = await prisma.calendar_credential.findUnique({
// 		where: {
// 			user_id: authId,
// 		},
// 	});

// 	if (credentials && credentials.expiresAt.getTime() > Date.now()) {
// 		return credentials;
// 	}
// 	return null;
// };

// export const saveGCalCredentials = async (
// 	authId: string,
// 	credentials: {
// 		scope: string;
// 		token_type: "Bearer";
// 		expiry_date: number;
// 		access_token: string;
// 		refresh_token: string;
// 	}
// ) => {
// 	await prisma.calendar_credential.upsert({
// 		where: {
// 			user_id: authId,
// 		},
// 		create: {
// 			user_id: authId,
// 			name: "Google Calendar",
// 			value: JSON.stringify(credentials),
// 			expiresAt: new Date(Date.now() + credentials.expiry_date),
// 		},
// 		update: {
// 			value: JSON.stringify(credentials),
// 			expiresAt: new Date(Date.now() + credentials.expiry_date),
// 		},
// 	});
// };

// export const authoriseGCalCredentials = async (
// 	authId: string,
// 	credentials: {
// 		scope: string;
// 		token_type: "Bearer";
// 		expiry_date: number;
// 		access_token: string;
// 		refresh_token: string;
// 	}
// ) => {};
