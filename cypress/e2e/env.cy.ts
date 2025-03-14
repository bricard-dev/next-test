describe("Environment Test", () => {
  it("should have correct NODE_ENV and DATABASE_URL variables", () => {
    expect(Cypress.env("NODE_ENV")).to.equal("test");
    expect(Cypress.env("DATABASE_URL")).to.equal(
      "postgresql://postgres:postgres@localhost:5432/db_test?schema=public"
    );
  });
});
