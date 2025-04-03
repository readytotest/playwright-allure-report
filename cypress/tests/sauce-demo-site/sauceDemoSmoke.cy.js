import SauceDemoLoginPage from "../../pages/sauce-demo-pom/sauceDemoLoginPage";
import SauceDemoProductsPage from "../../pages/sauce-demo-pom/sauceDemoProductsPage";
import SauceDemoCartPage from "../../pages/sauce-demo-pom/sauceDemoCartPage";
import SauceDemoCheckoutPage from "../../pages/sauce-demo-pom/sauceDemoCheckoutPage";
import sauceDemoTestData from "../../fixtures/sauce-demo/sauceDemoTestData.json";

describe("Sauce Demo Smoke Test", () => {
  beforeEach(() => {
    cy.visit(Cypress.env("sauceDemoUrl"));
    SauceDemoLoginPage.enterUsername(sauceDemoTestData.loginCredentials.usernameValid);
    SauceDemoLoginPage.enterPassword(sauceDemoTestData.loginCredentials.passwordValid);
    SauceDemoLoginPage.clickLoginButton();
    SauceDemoProductsPage.confirmOnProductPage();
    cy.log("Login successful!");
  });

  it("Add/delete items, complete check out", () => {
    SauceDemoProductsPage.addBackpackToCart();
    SauceDemoProductsPage.removeBackpackFromCart();
    SauceDemoProductsPage.addBikeLightToCart();
    SauceDemoProductsPage.clickShoppingCart();

    SauceDemoCartPage.goCheckout();

    SauceDemoCheckoutPage.enterFirstName(sauceDemoTestData.customerInfo.firstName);
    SauceDemoCheckoutPage.enterLastName(sauceDemoTestData.customerInfo.lastName);
    SauceDemoCheckoutPage.enterZip(sauceDemoTestData.customerInfo.zipCode);
    SauceDemoCheckoutPage.clickContinue();
    SauceDemoCheckoutPage.confirmBikeLightInCheckOut();
    SauceDemoCheckoutPage.confirmBackpackNotInCheckout();
    SauceDemoCheckoutPage.confirmPaymentType(sauceDemoTestData.checkoutValues.paymentInfo);
    SauceDemoCheckoutPage.confirmShippingType(sauceDemoTestData.checkoutValues.shippingInfo);
    SauceDemoCheckoutPage.confirmSubtotalPrice(sauceDemoTestData.checkoutValues.subtotalAmount);
    SauceDemoCheckoutPage.confirmTaxPrice(sauceDemoTestData.checkoutValues.taxAmount);
    SauceDemoCheckoutPage.confirmTotalPrice(sauceDemoTestData.checkoutValues.totalAmount);
    SauceDemoCheckoutPage.clickFinish();
    SauceDemoCheckoutPage.confirmComplete();
  });
});
