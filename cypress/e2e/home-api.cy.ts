describe("Homepage API Endpoints", () => {
	it.skip("/api/contact should return 200", () => {
		cy.request("POST", "/api/contact", {
			name: "Test",
			email: "email@test.com",
			message: "This is a test message",
		}).then((response) => {
			cy.log("Response", response);
			expect(response.status).to.eq(200);
			expect(response.body).to.have.property("records");
		});
	});
});

export {};
