/// <reference types="cypress" />

import axios from "axios";

import { contact } from "../../src/pages/api/contact";

describe("Homepage API", () => {
	it("Contact Method", async () => {
		const airtableResponseData = {
			records: [
				{
					id: "rec1",
					createdTime: new Date(),
					fields: {
						Name: "Test",
						Message: "test",
						Status: "test",
						Email: "test",
						Created: new Date(),
					},
				},
			],
		};

		cy.stub(axios, "post").resolves(
			Promise.resolve({
				status: 200,
				data: airtableResponseData,
			})
		);

		const response = await contact({
			name: "Test",
			email: "Test",
			message: "test",
		});

		console.log(response);

		expect(response).equal(airtableResponseData);
	});
});

export {};
