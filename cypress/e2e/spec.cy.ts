describe("template spec", () => {
  it("passes", () => {
    cy.visit("/");

    cy.get("h1").should("contain", "Hello World");
    cy.get("[data-testid='users-list']").should("exist");

    cy.get("[data-testid='users-list']").within(() => {
      cy.get("li").should("have.length", 2);
    });
  });
});
