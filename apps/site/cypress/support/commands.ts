import "@testing-library/cypress/add-commands";

export const getByData = (
  selector: unknown,
  options: Partial<
    Cypress.Loggable & Cypress.Timeoutable & Cypress.Withinable & Cypress.Shadow
  >
) => cy.get(`[data-cy=${selector}]`, options);
