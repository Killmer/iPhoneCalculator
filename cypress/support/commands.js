import '@testing-library/cypress';

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
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This is will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

Cypress.Commands.add("performOperation", ({leftOperand, rightOperand, operation}) => {
    cy.get(`[value="${leftOperand}"]:not(#output)`)
        .click()
        .get(`[value="${operation}"]`)
        .click()
        .get(`[value="${rightOperand}"]:not(#output)`)
        .click()
        .get('[value="="]')
        .click()
  });

  Cypress.Commands.add("clickTimes", (selector, times) => {
      while (times) {
        cy.get(selector).click()
        times -= 1;
    }
  });

