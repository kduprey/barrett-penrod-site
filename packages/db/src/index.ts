export * from "@prisma/client";
import { dev } from "@bpvs/types";
import { PrismaClient } from "@prisma/client";
import { PrismaClientOptions } from "@prisma/client/runtime/library";

declare global {
	// allow global `var` declarations
	// eslint-disable-next-line no-var
	var prisma: PrismaClient | undefined;
}

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

let prisma: PrismaClient;

if (typeof window === "undefined") {
	if (process.env.NODE_ENV === "production") {
		prisma = new PrismaClient(dev ? { ...prismaConfig } : undefined);
	} else {
		if (!global.prisma) {
			global.prisma = new PrismaClient(dev ? { ...prismaConfig } : undefined);
		}

		prisma = global.prisma;
	}
}
