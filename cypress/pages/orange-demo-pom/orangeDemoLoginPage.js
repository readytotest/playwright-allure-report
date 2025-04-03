class OrangeDemoLoginPage{

    elements = {
        usernameLogin: () => cy.get('input[name="username"]'),
        passwordLogin: () => cy.get('input[name="password"]'),
        buttonLogin: () => cy.get('button[type="submit"]'),
    }

    enterUsername(username){
        this.elements.usernameLogin().type(username);
    }

    enterPassword(password){
        this.elements.passwordLogin().type(password);
    }

    clickLoginButton(){
        this.elements.buttonLogin().click();
    }

    confirmLoginButtonExists(){
        this.elements.buttonLogin().should('be.visible');
    }

}

module.exports = new OrangeDemoLoginPage();