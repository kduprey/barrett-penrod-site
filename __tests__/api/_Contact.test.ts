import { PrismaClient } from "@prisma/client";
import axios from "axios";
import { prismaConfig } from "config/index";
import { contact } from "pages/api/contact";
import { afterAll, describe, expect, it, vitest as vi } from "vitest";

const data = {
	name: "Test",
	email: "test@email.com",
	message: "This is a test message",
};

const prisma = new PrismaClient({ ...prismaConfig });

describe("Contact should", () => {
	afterAll(async () => {
		await prisma.contacts.deleteMany({});
	});

	it("Should handle a correct data submission", async () => {
		const num = Math.floor(Math.random() * 1000);

		await contact({
			name: `test ${num}`,
			email: "test@test.com",
			message: "test",
		});

		const check = await prisma.contacts.findMany({
			where: {
				name: `test ${num}`,
			},
		});

		expect(check).not.toBeNull();
		expect(check[0].name).toBe(`test ${num}`);
		expect(check[0].email).toBe("test@test.com");
		expect(check[0].message).toBe("test");
	});

	it("Should handle an incorrect data submission", async () => {
		const num = Math.floor(Math.random() * 1000);

		try {
			const response = await contact({
				name: `test ${num}`,
				email: "",
				message: "test",
			});

			expect(response).toBeUndefined();
		} catch (error) {
			expect(error).toBeInstanceOf(Error);
			expect((error as Error).message).include("Invalid email");
		}
	});
});
