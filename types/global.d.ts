import { PrismaClient } from "@prisma/client";

declare global {
	type Window = {
		prisma: PrismaClient;
		gtag: (...args: any[]) => void;
	};
}
