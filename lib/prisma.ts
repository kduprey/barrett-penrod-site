import { PrismaClient } from "@prisma/client";
import { prismaConfig } from "../config";

declare global {
	var prisma: PrismaClient;
}

const prisma = global.prisma || new PrismaClient({ ...prismaConfig });

export default prisma;
