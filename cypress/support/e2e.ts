// load the global Cypress types
/// <reference types="cypress" />

import { getByData } from "./commands";

// @ts-ignore
Cypress.Commands.add("getByData", getByData);

export {};
