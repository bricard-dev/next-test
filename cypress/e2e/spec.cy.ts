describe("template spec", () => {
  it("passes", () => {
    cy.visit("/");

    cy.get("h1").should("contain", "Hello World");
    cy.get("li").should("contain", "Test");
  });
});
