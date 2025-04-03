class SauceDemoHamburgerMenu{

    elements = {
        hamburgerMenu: () => cy.get('#react-burger-menu-btn'),
        hamburgerLogout: () => cy.get('#logout_sidebar_link'),
    }

    openHamburgerMenu(){
        this.elements.hamburgerMenu().click();
    }

    clickLogoutButton(){
        this.elements.hamburgerLogout().click();
    }

}

module.exports = new SauceDemoHamburgerMenu();
                     