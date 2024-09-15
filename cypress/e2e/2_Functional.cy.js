describe('Functional Tests', () => {
    before(() => {
      cy.visit('https://demo.x-cart.com/demo/home.php')
    })
  
    it('should log in a user', () => {
        cy.get('.header-links > #href_Sign_in').click()
        cy.login('demo-customer@x-cart.com','customer')
        cy.get('.name').should('contain','Mr. John Smith')
        cy.get('.line3 > .search > form > .text').type('phone{enter}')
        cy.get('.products').should('contain','Apple')
        cy.get('.first > .item-box > .details > .buttons-cell > .buy-now > form > .buttons-row > .main-button > .button-right > .button-left')
        .click()
        cy.get("#ui-id-1").should('contain','item added to cart')
        cy.get('.continue-shopping').click()
        cy.get(':nth-child(6) > .item-box > .details > .buttons-cell > .buy-now > form > .buttons-row > .main-button > .button-right > .button-left > .fa')
        .click()
        cy.get("#ui-id-1").should('contain','item added to cart')
        cy.get('.continue-shopping').click()
        cy.get('.icon').click()
        cy.get('.minicart-buttons > .buttons-row > .main-button').click()
        cy.get('h1').should('contain','Checkout')
        cy.get('#accept_terms').check()
        cy.get('.button-right').click()
        cy.get('#center-main > :nth-child(2)').should('contain','Congratulations! Your order has been successfully placed.')
    })

  })
  