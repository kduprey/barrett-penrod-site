import { PrismaClient } from "@bpvs/db";
declare global {
  type Window = {
    prisma: PrismaClient;
    gtag: (...args: any[]) => void;
  };
}
