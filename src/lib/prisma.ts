import { PrismaClient } from "@prisma/client";
import { dev } from "config/dev";
import { prismaConfig } from "config/index";

const globalForPrisma = global as unknown as { prisma: PrismaClient };

// Prevent multiple instances of Prisma Client in development
// eslint-disable-next-line
// @ts-ignore
const prisma = globalForPrisma.prisma || new PrismaClient({ ...prismaConfig });
if (dev) globalForPrisma.prisma = prisma;

export default prisma;
