describe('UI and Visual Tests', () => {
    before(() => {
      cy.visit('https://demo.x-cart.com/demo/home.php')
    })
  
    it('should ensure header is visible', () => {
        cy.get('.header-links > #href_Sign_in').click()
        cy.login('demo-customer@x-cart.com','customer')
        cy.get('.name').should('contain','Mr. John Smith')
    })
})
  