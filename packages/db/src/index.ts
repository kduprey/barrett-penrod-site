export * from "@prisma/client";
import { dev } from "@bpvs/types";
import { PrismaClient } from "@prisma/client";
import { PrismaClientOptions } from "@prisma/client/runtime/library";

const globalForPrisma = global as unknown as { prisma: PrismaClient };

export const prismaConfig =
	dev && !process.env["TEST_ENV"]
		? {
				log: ["query", "info", "warn", "error"] as PrismaClientOptions["log"],
				errorFormat: "pretty" as PrismaClientOptions["errorFormat"],
		  }
		: {
				log: ["query", "info", "warn", "error"] as PrismaClientOptions["log"],
				errorFormat: "minimal" as PrismaClientOptions["errorFormat"],
		  };

export const prisma =
	globalForPrisma.prisma || new PrismaClient({ ...prismaConfig });
if (dev) globalForPrisma.prisma = prisma;
