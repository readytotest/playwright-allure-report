class LambdaTestDemoHeaderMenu{

    elements = {
        headerMyAccount:() => cy.get('.nav-item.dropdown.dropdown-hoverable').last(),
        headerMyAccountRegisterSubmenu:() => cy.get('.mz-sub-menu-96.dropdown-menu').find('span').contains('Register'),
        headerMyAccountLogout:() => cy.get('a[href="https://ecommerce-playground.lambdatest.io/index.php?route=account/logout"]').first(),
       
    }

        mouseHoverHeaderMyAccount() {
            this.elements.headerMyAccount().wait(1).realHover();
        }

        clickHeaderMyAccountRegisterSubmenu() {
            this.elements.headerMyAccountRegisterSubmenu().click({force:true});
       }

       clickHeaderMyAccountLogout() {
        this.elements.headerMyAccountLogout().click({force:true});
       }

 


}
module.exports = new LambdaTestDemoHeaderMenu();