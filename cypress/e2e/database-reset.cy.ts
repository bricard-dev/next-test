describe("Database Reset", () => {
  it("should have a clean database before each test", () => {
    cy.visit("/");

    cy.get('[data-testid="users-list"]')
      .should("exist")
      .find("li")
      .should("have.length", 0);

    cy.get('[data-testid="users-list"]').find("li").should("have.length", 0);
  });
});
