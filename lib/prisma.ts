import { PrismaClient } from "@prisma/client";
import { prismaConfig } from "../config";

declare global {
	let prisma: PrismaClient;
}

// Prevent multiple instances of Prisma Client in development
// eslint-disable-next-line
// @ts-ignore
const prisma = global.prisma || new PrismaClient({ ...prismaConfig });

export default prisma;
