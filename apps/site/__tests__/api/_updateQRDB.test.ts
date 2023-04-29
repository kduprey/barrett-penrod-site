import { prismaConfig } from "@bpvs/db";
import { PrismaClient } from "@prisma/client";
import { updateQRDB } from "apps/site/src/pages/api/updateQRDB";
import { describe, expect, it } from "vitest";

const prisma = new PrismaClient({ ...prismaConfig });

describe("updateQRDB should", () => {
	it("return true", async () => {
		await updateQRDB("9-9-9-9");
		// TODO: Move updateQRDB to @bpvs/utils
		const check = await prisma.qr_code_logs.findMany({
			where: {
				location: 9,
				flyerSize: 9,
				campaign: 9,
				designId: 9,
			},
		});

		expect(check).not.toBeNull();
		expect(check.length).toBe(1);
		expect(check[0].location).toBe(9);
		expect(check[0].flyerSize).toBe(9);
		expect(check[0].campaign).toBe(9);
		expect(check[0].designId).toBe(9);

		await prisma.qr_code_logs.deleteMany({
			where: {
				location: 9,
				flyerSize: 9,
				campaign: 9,
				designId: 9,
			},
		});
	});

	it("return false", async () => {
		try {
			const status = await updateQRDB("000000000");
			expect(status).toBe(false);
		} catch (error: unknown) {
			expect(error).not.toBeNull();
			if (error instanceof Error)
				expect(error.message).toBe("Invalid QR ID");
		}
		await prisma.qr_code_logs.deleteMany({});
	});
});
