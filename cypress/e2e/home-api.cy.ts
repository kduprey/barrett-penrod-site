/// <reference types="cypress" />

import axios from "axios";

import { contact } from "../../pages/api/contact";

describe("Homepage API", () => {
	it("Contact Method", async () => {
		cy.stub(axios, "get").resolves(
			Promise.resolve({
				status: 200,
				data: {
					records: [
						{
							id: "rec1",
						},
					],
				},
			})
		);

		const response = await contact({
			name: "Test",
			email: "Test",
			message: "test",
		});

		expect(response).equal({
			status: 200,
			data: {
				records: [
					{
						id: "rec1",
					},
				],
			},
		});
	});
});

export {};
