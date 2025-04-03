describe("Visual Testing of Music Note Emoji", () => {
  it("should compare screenshot from a given element", () => {
    cy.visit("https://readytotest.github.io/html/90s-web.htm");
    cy.get('span[data-cy="music-note"]').compareSnapshot("music-note-emoji");
  });
});
