class SauceDemoLoginPage{

    elements = {
        usernameLogin: () => cy.get('#user-name'),
        passwordLogin: () => cy.get('#password'),
        buttonLogin: () => cy.get('#login-button'),
        loginErrorMessage: () => cy.get('h3[data-test="error"]')
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
        this.elements.buttonLogin().should('exist');
    }

    confirmLockedOutMessage(){
        this.elements.loginErrorMessage().should('have.text', 'Epic sadface: Sorry, this user has been locked out.');
    }

    confirmEmptyUsernameMessage(){
        this.elements.loginErrorMessage().should('have.text', 'Epic sadface: Username is required');
    }

    confirmEmptyPasswordMessage(){
        this.elements.loginErrorMessage().should('have.text', 'Epic sadface: Password is required');
    }

    confirmInvalidUsernameOrPasswordMessage(){
        this.elements.loginErrorMessage().should('have.text', 'Epic sadface: Username and password do not match any user in this service');
    }

}

module.exports = new SauceDemoLoginPage();