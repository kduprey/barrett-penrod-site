// describe custom Cypress commands in this file

// load the global Cypress types
/// <reference types="cypress" />

declare namespace Cypress {
	export interface Chainable {
		/**
		 * Custom command to select DOM element by data-cy attribute.
		 * @example cy.dataCy('greeting')
		 */
		dataCy(value: string): Chainable<Element>;

		/**
		 * Adds ability to get elements by data-cy attribute
		 * @example
		 * cy.getByData("hero")
		 * @param selector data-cy attribute
		 * @param options options passed to cy.get
		 * @returns cy.get result with the selector
		 */
		getByData(
			selector: string,
			options?: Partial<
				Cypress.Loggable &
					Cypress.Timeoutable &
					Cypress.Withinable &
					Cypress.Shadow
			>
		): Chainable<Element>;
	}
}
