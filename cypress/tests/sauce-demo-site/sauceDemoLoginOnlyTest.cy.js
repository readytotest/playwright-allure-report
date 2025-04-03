import SauceDemoLoginPage from "../../pages/sauce-demo-pom/sauceDemoLoginPage";
import sauceDemoTestData from "../../fixtures/sauce-demo/sauceDemoTestData.json";
import SauceDemoProductsPage from "../../pages/sauce-demo-pom/sauceDemoProductsPage";

describe("Sauce Demo Login Tests", () => {
  beforeEach(() => {
    cy.visit(Cypress.env("sauceDemoUrl"));
  });

  it("Valid username/password", () => {
    SauceDemoLoginPage.enterUsername(sauceDemoTestData.loginCredentials.usernameValid);
    SauceDemoLoginPage.enterPassword(sauceDemoTestData.loginCredentials.passwordValid);
    SauceDemoLoginPage.clickLoginButton();
    SauceDemoProductsPage.confirmOnProductPage();
  });

  it("Locked out user", () => {
    SauceDemoLoginPage.enterUsername(sauceDemoTestData.loginCredentials.usernameLockedOut);
    SauceDemoLoginPage.enterPassword(sauceDemoTestData.loginCredentials.passwordValid);
    SauceDemoLoginPage.clickLoginButton();
    SauceDemoLoginPage.confirmLockedOutMessage();
  });

  it("Empty username", () => {
    SauceDemoLoginPage.enterPassword(sauceDemoTestData.loginCredentials.passwordValid);
    SauceDemoLoginPage.clickLoginButton();
    SauceDemoLoginPage.confirmEmptyUsernameMessage();
  });

  it("Empty password", () => {
    SauceDemoLoginPage.enterUsername(sauceDemoTestData.loginCredentials.usernameValid);
    SauceDemoLoginPage.clickLoginButton();
    SauceDemoLoginPage.confirmEmptyPasswordMessage();
  });

  it("Invalid username", () => {
    SauceDemoLoginPage.enterUsername(sauceDemoTestData.loginCredentials.usernameInvalid);
    SauceDemoLoginPage.enterPassword(sauceDemoTestData.loginCredentials.passwordValid);
    SauceDemoLoginPage.clickLoginButton();
    SauceDemoLoginPage.confirmInvalidUsernameOrPasswordMessage();
  });

  it("Invalid password", () => {
    SauceDemoLoginPage.enterUsername(sauceDemoTestData.loginCredentials.usernameValid);
    SauceDemoLoginPage.enterPassword(sauceDemoTestData.loginCredentials.passwordInvalid);
    SauceDemoLoginPage.clickLoginButton();
    SauceDemoLoginPage.confirmInvalidUsernameOrPasswordMessage();
  });
});
