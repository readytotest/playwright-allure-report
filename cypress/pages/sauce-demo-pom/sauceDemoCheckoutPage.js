class SauceDemoCheckoutPage{

    elements = {
        firstNameField:() => cy.get('#first-name'),
        lastNameField:() => cy.get('#last-name'),
        zipField:() => cy.get('#postal-code'),
        continueButton:() => cy.get('#continue'),
        bikeLightInCheckout:() => cy.contains('.inventory_item_name', 'Bike Light'),
        backpackInCheckout:() => cy.contains('.inventory_item_name', 'Backpack'),
        paymentType:() => cy.get('.summary_value_label'),
        shippingType:() => cy.get('.summary_value_label'),
        subtotalPrice:() => cy.get('.summary_subtotal_label'),
        taxPrice:() => cy.get('.summary_tax_label'),
        totalPrice:() => cy.get('[data-test="total-label"]'),
        finishButton:() => cy.get('#finish'),
        completeHeader:() => cy.get('.complete-header'),

       
    }

    enterFirstName(inputFirstName) {
        this.elements.firstNameField().type(inputFirstName);
    }

    enterLastName(inputLastName) {
        this.elements.lastNameField().type(inputLastName);
    }

    enterZip(inputZip) {
        this.elements.zipField().type(inputZip);
    }

    clickContinue() {
        this.elements.continueButton().click();
    }

    confirmBikeLightInCheckOut() {
        this.elements.bikeLightInCheckout().should('exist');
    }

    confirmBackpackNotInCheckout() {
        this.elements.backpackInCheckout().should('not.exist');
    }

    confirmPaymentType(inputPaymentType) {
        this.elements.paymentType().should('include.text', inputPaymentType);
    }

    confirmShippingType(inputShippingType) {
        this.elements.shippingType().should('include.text', inputShippingType);
    }

    confirmSubtotalPrice(inputSubtotalPrice) {
        this.elements.subtotalPrice().should('have.text', inputSubtotalPrice);
    }

    confirmTaxPrice(inputTaxPrice) {
        this.elements.taxPrice().should('have.text', inputTaxPrice);
    }

    confirmTotalPrice(inputTotalPrice) {
        this.elements.totalPrice().should('have.text', inputTotalPrice);
    }

    clickFinish() {
        this.elements.finishButton().click();
    }

    confirmComplete() {
        this.elements.completeHeader().should('have.text', 'Thank you for your order!');
    }

}

module.exports = new SauceDemoCheckoutPage();