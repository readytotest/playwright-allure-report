import { randomEmailGenerator, randomFirstNameGenerator, randomMiddleNameGenerator, randomLastNameGenerator } from '../../fixtures/orange-demo/orangeDemoFakeDataGenerator.js';

class OrangeDemoMyInfoPage{

    elements = {
        personalDetailsLink:() => cy.contains('.orangehrm-tabs-item', 'Personal Details'),
        contactDetailsLink:() => cy.contains('.orangehrm-tabs-item', 'Contact Details'),
        firstNameField:() => cy.get('input[name="firstName"]'),
        middleNameField:() => cy.get('input[name="middleName"]'),
        lastNameField:() => cy.get('input[name="lastName"]'),
        //Don't like using eq index, but there aren't any unique attributes available
        workEmailField:() => cy.get('.oxd-input').eq(9),
        myInfoSaveButton:() => cy.get('button[type="submit"]'),
        toastMessage:() =>  cy.get('#oxd-toaster_1'),
        profilePhoto:() => cy.get('.employee-image'),
        uploadPhoto: () => cy.get('.oxd-file-input'),
        profilePhotoSaveButton:() => cy.get('button[type="submit"]'),
        nameOfLoggedInUser:() => cy.get('.oxd-userdropdown-name')

    }

    clickPersonalDetailsLink(){
        this.elements.personalDetailsLink().click();
    }
    
    clickContactDetailsLink(){
        this.elements.contactDetailsLink().click();
    }

    clearWorkEmailField(){
        this.elements.workEmailField().clear();
    }

    clearFirstNameField(){
        this.elements.firstNameField().clear();
    }

    clearMiddleNameField(){
        this.elements.middleNameField().clear();
    }

    clearLastNameField(){
        this.elements.lastNameField().clear();
    }

    checkIfWorkEmailFieldEmpty(){
        this.elements.workEmailField().invoke('val').should('be.empty');
    } 

    checkIfFirstNameFieldEmpty(){
        this.elements.firstNameField().invoke('val').should('be.empty');
    } 

    checkIfMiddleNameFieldEmpty(){
        this.elements.middleNameField().invoke('val').should('be.empty');
    } 

    checkIfLastNameFieldEmpty(){
        this.elements.lastNameField().invoke('val').should('be.empty');
    } 

    checkIfWorkEmailFieldNotEmpty(){
        this.elements.workEmailField().invoke('val').should('not.be.empty');
    } 

    checkIfFirstNameFieldNotEmpty(){
        this.elements.firstNameField().invoke('val').should('not.be.empty');
    } 

    checkIfMiddleNameFieldNotEmpty(){
        this.elements.middleNameField().invoke('val').should('not.be.empty');
    } 

    checkIfLastNameFieldNotEmpty(){
        this.elements.lastNameField().invoke('val').should('not.be.empty');
    } 

    typeWorkEmail(){
        this.elements.workEmailField().type(randomEmailGenerator);
    }

    typeFirstName(){
        this.elements.firstNameField().type(randomFirstNameGenerator);
    }

    typeMiddleName(){
        this.elements.middleNameField().type(randomMiddleNameGenerator);
    }

    typeLastName(){
        this.elements.lastNameField().type(randomLastNameGenerator);
    }

    clickProfilePhoto(){
        this.elements.profilePhoto().click();
    }

    clickUploadPhotoButton(){
        this.elements.uploadPhotoButton().click();
    }

    uploadProfilePhoto(){
        this.elements.uploadPhoto().selectFile('cypress/fixtures/jpg-dummy-file.jpg', { force:true });
    }

    clickProfilePhotoSaveButton(){
        this.elements.profilePhotoSaveButton().click();
    }

    clickFirstMyInfoSaveButton(){
        this.elements.myInfoSaveButton().first().click().wait(1000);
    }

    confirmMyInfoSaveSuccessToast(){
        this.elements.toastMessage().should('include.text', 'Success');
    }

    confirmNameOfLoggedInUser(){
       this.elements.nameOfLoggedInUser().should('include.text', 'John999');
    }

    confirmWorkEmail(){
        this.elements.workEmailField().should('include.value', 'john.smith999');
    }

}

module.exports = new OrangeDemoMyInfoPage();