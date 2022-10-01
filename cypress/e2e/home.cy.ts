/// <reference types="cypress" />

import path = require("path");

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
			cy.get(":nth-child(2) > .absolute > .mb-5").click();
			cy.get(
				':nth-child(2) > [data-cy="headshot-modal"] > [style="box-sizing:border-box;display:inline-block;overflow:hidden;width:initial;height:initial;background:none;opacity:1;border:0;margin:0;padding:0;position:relative;max-width:100%"] > [alt="Barrett Penrod - Headshot"]'
			).should("be.visible");
		});

		it("should close when clicked", () => {
			cy.get(":nth-child(2) > .absolute > .mb-5").click();
			cy.get(':nth-child(2) > [data-cy="headshot-modal"]').should(
				"be.visible"
			);
			cy.get(':nth-child(2) > [data-cy="headshot-overlay"]').click(
				50,
				400,
				{ force: true }
			);
			cy.get(':nth-child(2) > [data-cy="headshot-modal"]').should(
				"not.be.visible"
			);
		});

		it("should download when clicked", () => {
			cy.document().then((doc) => {
				const downloadURL = doc
					.querySelector("[data-cy=download-headshots]")
					.getAttribute("href");

				cy.request(downloadURL).then((response) => {
					expect(response.status).to.eq(200);
				});
			});
		});
	});
});
