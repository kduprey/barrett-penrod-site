import { dev } from "@bpvs/types";
import { PrismaClientOptions } from "@prisma/client/runtime/library";
import { config } from "dotenv";
import { PrismaClient } from "./client";
config({ path: "../../../../.env" });

export * from "./client";
export { prisma };

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
