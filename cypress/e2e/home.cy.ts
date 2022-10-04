/// <reference types="cypress" />

describe("Homepage", () => {
	beforeEach(() => {
		cy.visit("/");
	});

	context("Hero section", () => {
		it("should have a hero section", () => {
			cy.getByData("hero").should("exist");
		});

		it("should have a headshot", () => {
			cy.getByData("hero-headshot").should("exist");
		});
	});

	context("About section", () => {
		it("should have an about section", () => {
			cy.getByData("about").should("exist");
		});
	});

	context("Headshots Section", () => {
		it("should have a headshots section", () => {
			cy.getByData("headshots").should("exist");
		});
		it("should open when clicked", () => {
			cy.getByData("headshot-modal-button").eq(2).click();
			cy.getByData("headshot-modal").eq(2).should("be.visible");
		});

		it("should close when clicked", () => {
			cy.getByData("headshot-modal-button").eq(2).click();
			cy.getByData("headshot-modal").eq(2).wait(500).should("be.visible");
			cy.getByData("headshot-overlay")
				.eq(2)
				.click(50, 400, { force: true });
			cy.getByData("headshot-modal").eq(2).should("not.be.visible");
		});

		it("should download when clicked", { browser: "!firefox" }, () => {
			Cypress.on("uncaught:exception", (error) => {
				if (
					error.message.includes(
						"Timed out after waiting `5000ms` for your remote page to load"
					)
				) {
					return false;
				}
			});

			Cypress.on("fail", (error) => {
				if (
					error.message.includes(
						"Timed out after waiting `5000ms` for your remote page to load"
					)
				) {
					return false;
				}

				throw error;
			});

			cy.getByData("download-headshots").click();

			cy.task("findFile", "BarrettPenrodHeadshots.zip").should("be.true");
		});
	});

	context("Resume Section", () => {
		it("should have a resume section", () => {
			cy.getByData("resume").should("exist");
		});

		it("should open resume when clicked", () => {
			cy.getByData("download-resume").click();

			cy.location("pathname").should(
				"be.equal",
				"/barrettpenrod/Barrett_Penrod_Resume.pdf"
			);
		});
	});

	context("Showreel Section", () => {
		it("should have a showreel section", () => {
			cy.getByData("showreel").should("exist");
		});
	});

	context("Production Photos", () => {
		it("should have a production photos section", () => {
			cy.getByData("production-photos").should("exist");
		});
	});

	context("News Section", () => {
		it("should have a news section", () => {
			cy.getByData("news").should("exist");
		});
	});

	context("Contact Section", () => {
		it("should have a contact section", () => {
			cy.getByData("contact").should("exist");
		});

		it("should have a contact form", () => {
			cy.getByData("contact-form").should("exist");
		});

		it("should have a contact form name field", () => {
			cy.getByData("contact-form-name").should("exist");
		});

		it("should have a contact form email field", () => {
			cy.getByData("contact-form-email").should("exist");
		});

		it("should have a contact form message field", () => {
			cy.getByData("contact-form-message").should("exist");
		});

		it("should have a contact form submit button", () => {
			cy.getByData("contact-form-submit").should("exist");
		});

		it("should submit the form when the submit button is clicked", () => {
			cy.intercept("POST", "/api/contact", {
				statusCode: 200,
				body: {
					id: "123",
				},
			}).as("contactFormSubmit");

			cy.getByData("contact-form-name").type("Barrett Penrod");
			cy.getByData("contact-form-email").type("test@email.com");
			cy.getByData("contact-form-message").type("This is a test message");
			cy.getByData("contact-form-submit").click();
			cy.getByData("success-message").should("exist");
		});

		it("should show an error message when the form fails to submit", () => {
			cy.intercept("POST", "/api/contact", {
				statusCode: 500,
			}).as("contactFormSubmit");

			cy.getByData("contact-form-name").type("Barrett Penrod");
			cy.getByData("contact-form-email").type("test@email.com");
			cy.getByData("contact-form-message").type("This is a test message");
			cy.getByData("contact-form-submit").click();
			cy.getByData("error-message").should("exist");
		});

		it("should show error if form is not filled out", () => {
			cy.intercept("POST", "/api/contact", {
				statusCode: 500,
			}).as("contactFormSubmit");

			cy.getByData("contact-form-name").type("Barrett Penrod");
			cy.getByData("contact-form-message").type("This is a test message");
			cy.getByData("contact-form-submit").should("be.disabled");
		});
	});

	context("Navbar", () => {
		it("should have a navbar", () => {
			cy.getByData("navbar").should("exist");
		});

		it("should navigate to Voice Studio when clicked", () => {
			cy.getByData("navbar").contains("Voice Studio").click();
			cy.url().should("include", "/bookings");
		});
	});
});

export {};
