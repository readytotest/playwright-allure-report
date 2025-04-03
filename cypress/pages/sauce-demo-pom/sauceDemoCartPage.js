class SauceDemoCartPage{

    elements = {
        checkoutButton:() => cy.get('#checkout'),
       
    }

    goCheckout() {
        this.elements.checkoutButton().click();
    }
}

module.exports = new SauceDemoCartPage();