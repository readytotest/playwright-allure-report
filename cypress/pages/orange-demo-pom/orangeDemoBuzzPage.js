import orangeDemoTestData from '../../fixtures/orange-demo/orangeDemoTestData.json';

class OrangeDemoBuzzPage{

    elements = {
        buzzMessageField:() => cy.get('.oxd-buzz-post-input'),
        buzzMessagePostButton:() => cy.get('button[type="submit"]'),
        buzzMessageBodyText:() => cy.get('.orangehrm-buzz-post-body')
       
    }

    typeBuzzMessage() {
        this.elements.buzzMessageField().type(orangeDemoTestData.formData.buzzMessageText);
    }

    postBuzzMessage() {
        this.elements.buzzMessagePostButton().click();
    }
    
    confirmBuzzMessage() {
        cy.reload();
        this.elements.buzzMessageBodyText().first().should('include.text', orangeDemoTestData.formData.buzzMessageText);
    }
}

module.exports = new OrangeDemoBuzzPage();
