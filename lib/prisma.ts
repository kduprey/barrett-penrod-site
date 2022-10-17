import { PrismaClient } from "@prisma/client";

declare global {
	var prisma: PrismaClient;
}

let prisma: PrismaClient;

if (process.env.NODE_ENV === "production") {
	prisma = new PrismaClient({
		log: ["query", "info", "warn", "error"],
		errorFormat: "minimal",
	});
} else {
	if (!global.prisma as unknown) {
		global.prisma = new PrismaClient({
			log: ["query", "info", "warn", "error"],
			errorFormat: "pretty",
		});
	}
	prisma = global.prisma;
}
export default prisma;
