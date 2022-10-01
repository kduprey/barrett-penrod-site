export const getByData = (selector, options) => {
	return cy.get(`[data-cy=${selector}]`, options);
};
