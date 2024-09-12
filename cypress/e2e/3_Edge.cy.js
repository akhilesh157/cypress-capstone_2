// cy.get('.ajax-popup-error-message > p')
// cy.get('#ui-id-5')
// cy.get('.ui-dialog-buttonset > .ui-button')
// Warning: Sorry, your search returned no results. Try again with different criteria.
// cy.get('#top-message > .box')

describe('Basic Tests', () => {
    before(() => {
      cy.visit('https://demo.x-cart.com/demo/home.php')
    })
  
    it('X-cart', () => {
        cy.get('.header-links > #href_Sign_in').click()
        cy.get('#username').clear().type('demo-customer@x-cart.comdemo-customer@x-cart.com')
        cy.get('#password').clear().type('customer')
        cy.get('.button-row > .button > .button-right').click()
        cy.get('#ui-id-3').should('be.visible')
        cy.get('.ui-dialog-buttonset').click()
        cy.get('.error-label').should('be.visible')
        cy.get('.ui-button').click()
        cy.get('.line3 > .search > form > .text').type('vadapaav{enter}')
        cy.get('#top-message > .box').should('contain','Warning: Sorry, your search returned no results. Try again with different criteria.')
    })
  })