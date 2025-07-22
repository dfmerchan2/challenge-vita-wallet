// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import { getDeviceResolution } from '../utils/viewport-manager';
import { DEVICE_PROPERTIES } from '../utils/constants';
import { WAITING_TIMES } from '../utils/constants-api';

Cypress.Commands.add('openPage', (device) => {
  cy.setResolution(device);
  cy.visit(Cypress.env('apiBaseUrlWeb'));
});

Cypress.Commands.add("setResolution", (device) => {
  let resolution = getDeviceResolution(Cypress.env('device') || device);
  cy.viewport(resolution[DEVICE_PROPERTIES.WIDTH], resolution[DEVICE_PROPERTIES.HEIGHT]);
});

Cypress.Commands.add('shouldBeVisible', (...elements) => {
  elements.forEach((fn) => fn().should('be.visible'));
});

Cypress.Commands.add('retryRequest', (options, status, delay = WAITING_TIMES.LOW, retries = 5) => {
  function makeRequest(remainingRetries) {
    return cy.request({ ...options, failOnStatusCode: false }).then((response) => {
      if (response.status === status) {
        return response;
      } else if (remainingRetries > 0) {
        cy.log(`Retrying... remaining attempts: ${remainingRetries}`);
        return cy.wait(delay).then(() => makeRequest(remainingRetries - 1));
      }
    });
  }

  return makeRequest(retries);
});
