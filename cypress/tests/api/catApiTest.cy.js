describe("My First Cypress API Test", () => {
  it("Verify Response for Abyssinian Cat", () => {
    cy.request({
      method: "GET",
      url: "https://api.api-ninjas.com/v1/cats",
      headers: {
        /*I created a cypress.env.json file which holds the catApiKey and it's on my .gitignore list
            as I don't want my api key in the source code. GitHub has a key scanner, but I also use
            GitGuardian on the repo because I was curious about it. If you want to run this test, you will need
            to use your own API key and create a cypress.env.json or you could put it in cypress.config.js*/
        "X-API-Key": Cypress.env("catApiKey"),
      },
      /*You can pass in the query string either in the URL like this https://api.api-ninjas.com/v1/cats?name=Abyssinian
            or in the qs section below*/
      qs: { name: "Abyssinian" },
    }).then((response) => {
      /*Logging the entire API response body to the console for inspection and to understand the structure. 
            I didn't have the array index specified at first and it was coming back as undefined.
            I'm just going to leave it in here because I think it's useful*/
      console.log("Response Body:", response.body);
      expect(response.status).to.eq(200);
      expect(response.body[0].name).to.eq("Abyssinian");
    });
  });
});
