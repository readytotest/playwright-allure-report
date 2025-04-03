import LambdaTestDemoHeaderMenu from "../../pages/lambda-test-demo-pom/lambdaTestDemoHeaderMenu";
import LambdaTestDemoRegisterPage from "../../pages/lambda-test-demo-pom/lambdaTestDemoRegisterPage";

/*Let's run through the registration 5 times in a row
All 5 users will have the same first name and password, but different last names and other info*/
for (let i = 0; i < 5; i++) {
  describe("Registration Test LambdaTest eCommerce Playground", () => {
    beforeEach(() => {
      cy.visit(Cypress.env("lambdaTestDemoUrl"));
      //Move next line under pages later
      cy.get('div[data-id="217838"]')
        .find("strong")
        .should("have.text", "This is a dummy website for Web Automation Testing");
      cy.log("Visit site successful!");
    });

    it("Register a new user", () => {
      LambdaTestDemoHeaderMenu.mouseHoverHeaderMyAccount();
      LambdaTestDemoHeaderMenu.clickHeaderMyAccountRegisterSubmenu();
      LambdaTestDemoRegisterPage.fillOutRegisterFirstNameField();
      LambdaTestDemoRegisterPage.fillOutRegisterLastNameField();
      LambdaTestDemoRegisterPage.fillOutRegisterEmailField();
      LambdaTestDemoRegisterPage.fillOutRegisterPhoneField();
      LambdaTestDemoRegisterPage.fillOutRegisterPasswordField();
      LambdaTestDemoRegisterPage.fillOutRegisterPasswordConfirmField();
      LambdaTestDemoRegisterPage.fillOutRegisterAgreeCheckbox();
      LambdaTestDemoRegisterPage.clickRegisterContinueButton();
      LambdaTestDemoRegisterPage.verifyRegisterSuccessConfirmationText();
      LambdaTestDemoHeaderMenu.mouseHoverHeaderMyAccount();
      LambdaTestDemoHeaderMenu.clickHeaderMyAccountLogout();
      //Move under pages later
      cy.get("h1").should("have.text", " Account Logout");
    });
  });
}
