// import { Prisma, PrismaClient } from "./client";
// import { calendlyEventPayloads } from "./migrationData/calendlyEventPayloads";
// import { clients } from "./migrationData/clients";

// const prisma = new PrismaClient();

// const main = async () => {
// 	const formattedClients: Prisma.ClientCreateManyInput[] = clients.map(
// 		(client) => ({
// 			name: client.name,
// 			email: client.email,
// 			activeMember: client.activeMember,
// 			archived: client.archived,
// 			dateJoined: client.dateJoined,
// 			firstLesson: client.firstLesson,
// 			lastLesson: client.lastLesson,
// 			lessonsRemaining: client.lessonsRemaining,
// 			preferredLessonFormat: client.preferredLessonFormat,
// 			notes: client.notes,
// 			pronouns: client.pronouns,
// 			refundedVolume: client.refundedVolume,
// 			totalLessons: client.totalLessons,
// 			totalSpend: client.totalSpend,
// 			stripe_customer_id: client.stripe_customer_id,
// 		})
// 	);
// 	const formattedCalendlyWebhookPayloads: Prisma.CalendlyWebhookPayloadCreateManyInput[] =
// 		calendlyEventPayloads.map((payload) => ({}));

// 	await prisma.client.createMany({
// 		data: formattedClients,
// 	});
// };
