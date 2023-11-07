import type { PrismaClient } from "@bpvs/db";

declare global {
	interface Window {
		prisma: PrismaClient;
	}
}
