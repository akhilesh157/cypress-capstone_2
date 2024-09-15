describe('Basic Tests', () => {
  before(() => {
    cy.visit('https://demo.x-cart.com/demo/home.php')
  })

  it('should load the home page and verify the title', () => {
    cy.title().should('eq', 'Your Company Name')
    //should verify the home page content
    cy.get('#content-container').should('be.visible')
    cy.url().should('include', 'demo.x-cart.com')
  })
})


