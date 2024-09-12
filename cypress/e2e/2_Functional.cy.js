describe('Functional Tests', () => {
    before(() => {
      cy.visit('https://demo.x-cart.com/demo/home.php')
    })
  
    it('should log in a user', () => {
        cy.get('.header-links > #href_Sign_in').click()
        // cy.get('#username').clear().type('demo-customer@x-cart.com')
        // cy.get('#password').clear().type('customer')
        // cy.get('.button-row > .button > .button-right').click()
        cy.login('demo-customer@x-cart.com','customer')
        cy.get('.name').should('contain','Mr. John Smith')
        cy.get('.line3 > .search > form > .text').type('phone{enter}')
        cy.get('.products').should('contain','Apple')
        cy.get('.first > .item-box > .details > .buttons-cell > .buy-now > form > .buttons-row > .main-button > .button-right > .button-left')
        .click()
        cy.get('.continue-shopping').click()
        cy.get(':nth-child(6) > .item-box > .details > .buttons-cell > .buy-now > form > .buttons-row > .main-button > .button-right > .button-left > .fa')
        .click()
        cy.get('.continue-shopping').click()
        cy.get('.icon').click()
        cy.get('.minicart-buttons > .buttons-row > .main-button').click()
        cy.get('h1').should('contain','Checkout')
        cy.get('#accept_terms').check()
        cy.get('.button-right').click()
        cy.get('#center-main > :nth-child(2)').should('contain','Congratulations! Your order has been successfully placed.')
    })

    // it('should search for a product', () => {
    //   cy.get('input[name="q"]').type('Laptop{enter}')
    //   cy.url().should('include', 'search.php')
    //   cy.get('.product-list').should('exist')
    // })
  
    // it('should add a product to the cart', () => {
    //   cy.get('.product-list .product').first().find('button.add-to-cart').click()
    //   cy.get('.cart').click()
    //   cy.get('.cart-items').should('contain', 'Laptop')
    // })
  
    // it('should proceed to checkout', () => {
    //   cy.get('.checkout').click()
    //   cy.get('input[name="shipping_address"]').type('123 Test Street')
    //   cy.get('button[type="submit"]').click()
    //   cy.url().should('include', 'order_confirmation.php')
    // })
  })
  