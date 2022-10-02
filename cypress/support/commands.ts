export const getByData = (
	selector: any,
	options: Partial<
		Cypress.Loggable &
			Cypress.Timeoutable &
			Cypress.Withinable &
			Cypress.Shadow
	>
) => {
	return cy.get(`[data-cy=${selector}]`, options);
};
