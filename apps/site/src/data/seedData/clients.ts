import { Prisma } from "@bpvs/db";

export const dbClients: Prisma.clientsCreateInput[] = [
	{
		activeMember: true,
		archived: false,
		email: "test@email.com",
		dateJoined: "2001-01-01T05:00:00.000Z",
		firstLesson: "2022-06-27T17:30:00.000Z",
		lastLesson: "2022-07-11T17:30:00.000Z",
		nextLesson: "2022-10-24T04:00:00.000Z",
		lessonsRemaining: 1,
		name: "Test User 1",
		notes: "Update schedule policy ",
		preferredLessonFormat: "Virtual",
		pronouns: "She/They",
		refundedVolume: 0,
		totalLessons: 5,
		totalSpend: 400,
		stripe_customer_id: "cus_NNRmKpeWKc8i07",
	},
];
