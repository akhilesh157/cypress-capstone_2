describe('UI and Visual Tests', () => {
    before(() => {
      cy.visit('https://demo.x-cart.com/demo/home.php')
    })
  
    it('should ensure header is visible', () => {
        cy.get('#header').should('be.visible')
        cy.get('#footer').should('be.visible')
        cy.get('.image').should('be.visible')
    })
})
  