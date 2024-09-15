describe('Basic Tests', () => {
    before(() => {
      cy.visit('https://demo.x-cart.com/demo/home.php')
    })
  
    it('X-cart', () => {

        cy.get('.header-links > [href="register.php"]').click()
        cy.get('#firstname').type("{backspace}")
        cy.get('#lastname').type("{backspace}")
        cy.get('#email').type('g@gmail.com')
        cy.get('#passwd1').type('a')
        cy.get('#passwd2').type('a')
        cy.get('#accept_terms_register').check()
        cy.get('.button-right').click()
        cy.get('#ui-id-1').should('contain',"The required field 'First name' is empty!")
        cy.get('.ui-dialog-buttonset > .ui-button').click()

        cy.get('#firstname').type("gg")
        cy.get('#lastname').type("gg")
        cy.get('#passwd1').type('a')
        cy.get('#passwd2').type('a')
        cy.get('#accept_terms_register').check()
        cy.get('.button-right').click()
        cy.visit('https://demo.x-cart.com/demo/home.php')
        cy.get('.line3 > .search > form > .text').type('vadapaav{enter}')
        cy.get('#top-message > .box').should('contain','Warning: Sorry, your search returned no results. Try again with different criteria.')
    })
  })