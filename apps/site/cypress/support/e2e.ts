// load the global Cypress types
/// <reference types="cypress" />

import { getByData } from "./commands";

// eslint-disable-next-line
// @ts-ignore
Cypress.Commands.add("getByData", getByData);

export {};
