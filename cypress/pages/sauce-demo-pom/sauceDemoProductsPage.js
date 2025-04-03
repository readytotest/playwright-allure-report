class SauceDemoProductsPage{

    elements = {
        productHeader:() => cy.contains('span[class="title"]', 'Products'),
        pickBackpack:() => cy.get('#add-to-cart-sauce-labs-backpack'),
        dropBackpack:() => cy.get('#remove-sauce-labs-backpack'),
        pickBikeLight:() => cy.get('#add-to-cart-sauce-labs-bike-light'),
        shoppingCart:() => cy.get('.shopping_cart_link')

    }

    confirmOnProductPage() {
        this.elements.productHeader().should('have.text', 'Products');
    }
    
    addBackpackToCart() {
        this.elements.pickBackpack().click();
    }

    removeBackpackFromCart() {
        this.elements.dropBackpack().click();
    }

    addBikeLightToCart() {
        this.elements.pickBikeLight().click();
    }
    
    clickShoppingCart(){
        this.elements.shoppingCart().click();
    }
}

module.exports = new SauceDemoProductsPage();