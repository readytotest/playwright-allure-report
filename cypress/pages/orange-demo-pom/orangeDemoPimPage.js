import { passwordGenerator } from '../../fixtures/orange-demo/orangeDemoFakeDataGenerator.js';
import orangeDemoTestData from '../../fixtures/orange-demo/orangeDemoTestData.json';
class OrangeDemoPimPage{

    elements = {
        pimAddButton:() => cy.contains('button', 'Add'),
        pimFirstNameField:() => cy.get('input[name="firstName"]'),
        pimLastNameField:() => cy.get('input[name="lastName"]'),
        pimCreateLoginDetailsSlider:() => cy.get('input[type="checkbox"]'),
        pimUsernameField:() => cy.get('.oxd-input').eq(5),
        pimPasswordField1:() => cy.get('.oxd-input').eq(6),
        pimPasswordField2:() => cy.get('.oxd-input').eq(7),
        pimSaveButton:() => cy.get('button[type="submit"]'),
        pimSearchButton:() => cy.contains('button[type="submit"]', 'Search'),
        pimEmployeeNameField:() => cy.get('input[placeholder="Type for hints..."]').first(),
        pimFirstListedLastName:() => cy.get('.oxd-table-cell.oxd-padding-cell').eq(3)

    }

   clickPimAddButton(){
    this.elements.pimAddButton().click();
   }

   typePimFirstNameField(){
    this.elements.pimFirstNameField().type(orangeDemoTestData.formData.employeeFirstName);
   }

   typePimLastNameField(){
    this.elements.pimLastNameField().type(orangeDemoTestData.formData.employeeLastName);
   }

   clickPimCreateLoginDetailsSlider(){
    this.elements.pimCreateLoginDetailsSlider().click({force:true});
   }

   typePimUsernameField(){
    this.elements.pimUsernameField().type(orangeDemoTestData.formData.employeeUsername);
   }

   typePimPasswordField1(){
    this.elements.pimPasswordField1().type(passwordGenerator, { log: false });
   }

   typePimPasswordField2(){
    this.elements.pimPasswordField2().type(passwordGenerator, { log: false });
   }

   clickPimSaveButton(){
    this.elements.pimSaveButton().click().wait(1000);
   }

   confirmPimFirstNameField(){
    this.elements.pimFirstNameField().should('have.value', orangeDemoTestData.formData.employeeFirstName);
   }

   findEmployeeInPimEmployeeNameField(){
    this.elements.pimEmployeeNameField().type(orangeDemoTestData.formData.employeeFirstName).wait(2000).type("{upArrow}{enter}");
}

   clickPimSearchButton(){
    this.elements.pimSearchButton().click();
}

   confirmEmployeeAdded(){
   this.elements.pimFirstListedLastName().should('have.text', orangeDemoTestData.formData.employeeLastName);
}


}

module.exports = new OrangeDemoPimPage