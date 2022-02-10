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
import '@testing-library/cypress/add-commands';

// Custom command to get "data-cy" elements more easily
// https://ronvalstar.nl/useful-custom-cypress-commands
// This aliases all data-cy attributes. So instead of
// doing `cy.get(`[data-cy="something"]`)` You would do 
// `cy.get(@something)`
// Use by adding `beforeEach(() => cy.asAll()) to tests 
Cypress.Commands.add('asAll', () => cy
    .get('[data-cy]')
    .then(list=>{
      list.each((i, {dataset: {cy: name}})=>
          cy.get(`[data-cy=${name}]`).as(name)
      )
    })
)