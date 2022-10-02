describe("Homepage API Endpoints", () => {
	it("/api/contact should return 200", () => {
		cy.request("/api/contact", {
			name: "Test",
			email: "email@test.com",
			message: "This is a test message",
		}).then((response) => {
			expect(response.status).to.eq(200);
			expect(response.body).to.have.property("id");
		});
	});
});
