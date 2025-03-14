describe("Environment Test", () => {
  it("should have correct test environment variables", () => {
    // Vérifie la variable DATABASE_URL
    expect(Cypress.env("DATABASE_URL")).to.equal(
      "postgresql://postgres:postgres@localhost:5433/test_db?schema=public"
    );

    // Vérifie NODE_ENV
    expect(Cypress.env("NODE_ENV")).to.equal("test");
  });
});
