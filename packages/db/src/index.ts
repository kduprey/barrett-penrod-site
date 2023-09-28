import { dev } from "@bpvs/types";
import { PrismaClient } from "@prisma/client";
import type { PrismaClientOptions } from "@prisma/client/runtime/library";
import { config } from "dotenv";

config({ path: "../../../../.env" });

export * from "@prisma/client";
export { prisma };

declare global {
	// allow global `var` declarations
	// eslint-disable-next-line no-var -- Adding gloabl PrismaClient
	var prisma: PrismaClient | undefined;
}

export const prismaConfig =
	dev && !process.env.TEST_ENV
		? {
				log: ["query", "info", "warn", "error"] as PrismaClientOptions["log"],
				errorFormat: "pretty" as PrismaClientOptions["errorFormat"],
		  }
		: {
				log: ["query", "info", "warn", "error"] as PrismaClientOptions["log"],
				errorFormat: "minimal" as PrismaClientOptions["errorFormat"],
		  };

// eslint-disable-next-line import/no-mutable-exports -- Adding gloabl PrismaClient
let prisma: PrismaClient;

if (typeof window === "undefined") {
	if (process.env.NODE_ENV === "production") {
		prisma =
			global.prisma || new PrismaClient(dev ? { ...prismaConfig } : undefined);
	} else {
		if (!global.prisma) {
			global.prisma = new PrismaClient(dev ? { ...prismaConfig } : undefined);
		}

		prisma = global.prisma;
	}
}
