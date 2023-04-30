import "@testing-library/cypress/add-commands";

export const getByData = (
	selector: string,
	options: Partial<
		Cypress.Loggable & Cypress.Timeoutable & Cypress.Withinable & Cypress.Shadow
	>
) => cy.get(`[data-cy=${selector}]`, options);
