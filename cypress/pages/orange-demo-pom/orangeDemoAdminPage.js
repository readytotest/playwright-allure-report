import orangeDemoTestData from '../../fixtures/orange-demo/orangeDemoTestData.json';

class OrangeDemoAdminPage{

    elements = {
        organizationMenu:() => cy.contains('.oxd-topbar-body-nav-tab-item', 'Organization'),
        generalInfoSubMenu:() => cy.contains('a[role="menuitem"]', 'General Information'),
        editGeneralInfoSlider:() => cy.get('input[type="checkbox"]'),
        organizationNameField:() => cy.get('.oxd-input').eq(1),
        //organizationNameField:() => cy.get('.organization-name-container'),
        organizationSaveButton:() => cy.get('button[type="submit"]')

       
    }

    clickOrganizationMenu() {
        this.elements.organizationMenu().click();
    }

    clickGeneralInfoSubMenu() {
        this.elements.generalInfoSubMenu().click();
    }

    clickEditGeneralInfoSlider() {
        this.elements.editGeneralInfoSlider().click();
    }

    clearOrganizationNameField(){
        this.elements.organizationNameField().clear();
    }

    checkIfOrganizationNameFieldEmpty(){
        this.elements.organizationNameField().invoke('val').should('be.empty');
    } 

    typeOrganizationName() {
        this.elements.organizationNameField().type(orangeDemoTestData.formData.organizationName)
    }

    checkIfOrganizationNameFieldNotEmpty(){
        this.elements.organizationNameField().invoke('val').should('not.be.empty');
    } 

    clickOrganizationSaveButton() {
        this.elements.organizationSaveButton().click().wait(1000);
    }

    confirmOrganizationName() {
        this.elements.organizationNameField().should('include.value', orangeDemoTestData.formData.organizationName);
    }


}
module.exports = new OrangeDemoAdminPage();