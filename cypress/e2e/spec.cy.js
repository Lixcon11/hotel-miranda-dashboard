describe('Login testing', () => {
  it('Passing with correct data', () => {
    cy.visit('http://192.168.1.65:5173/')
    cy.wait(1000)
    cy.get("input[name=name]").type("test")
    cy.get("input[name=password]").type("test")

    cy.get("input[name=name]").should("have.value", "test")
    cy.get("input[name=password]").should("have.value", "test")

    cy.get("input[type=submit]").click()
    cy.url().should('include', '/dashboard')
  })

  it('Passing with incorrect data', () => {
    cy.visit('http://192.168.1.65:5173/')
    cy.wait(1000)
    cy.get("input[name=name]").type("Hi")
    cy.get("input[name=password]").type("Mark")

    cy.get("input[name=name]").should("have.value", "Hi")
    cy.get("input[name=password]").should("have.value", "Mark")

    cy.get("input[type=submit]").click()
    cy.url().should('include', '/login')
  })
})