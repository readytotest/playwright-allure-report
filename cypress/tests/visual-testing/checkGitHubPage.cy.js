describe("My GitHub Site Visual Test", () => {
  it("should compare screenshot of the entire page", () => {
    cy.visit("https://readytotest.github.io");
    cy.compareSnapshot("my-github-site");
  });
});
