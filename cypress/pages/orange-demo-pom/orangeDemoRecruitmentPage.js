import { randomEmailGenerator, randomFirstNameGenerator, randomMiddleNameGenerator, randomLastNameGenerator } from '../../fixtures/orange-demo/orangeDemoFakeDataGenerator.js';

class OrangeDemoRecruitmentPage{

    elements = {
        selectAllCandidatesRecordsCheckbox:() => cy.get('.oxd-checkbox-wrapper').first(),
        deleteSelectedCandidatesRecordsButton:() => cy.contains('button', 'Delete Selected'),
        deleteSelectedCandidatesRecordsModal:() => cy.contains('button', 'Yes, Delete'),
        addCandidateButton:() => cy.contains('button', 'Add'),
        candidateFirstNameField:() => cy.get('input[name="firstName"]'),
        candidateMiddleNameField:() => cy.get('input[name="middleName"]'),
        candidateLastNameField:() => cy.get('input[name="lastName"]'),
        candidateEmailField:() => cy.get('.oxd-input').eq(4),
        candidateVacancyMenu:() => cy.get('.oxd-select-text-input'),
        vacancyMenuQaLead:() => cy.get('.oxd-select-wrapper').contains('Senior QA Lead'),
        candidateSaveButton:() => cy.get('button[type="submit"]'),
        toastMessage:() =>  cy.get('#oxd-toaster_1'),
        resumeFileUpload:() => cy.get('.oxd-file-input'),
        candidatesHeaderButton:() => cy.contains('.oxd-topbar-body-nav-tab-item', 'Candidates'),
        john999InCandidatesRecords:() => cy.contains('.oxd-table-card', 'John999'),
        firstPersonListedInCandidatesRecordsProfile:() => cy.get('.oxd-icon-button.oxd-table-cell-action-space').first(),
        candidateProfile:() => cy.get('.oxd-text'),
        pdfDummyFile:() => cy.contains('.oxd-text.oxd-text--p.orangehrm-file-name', 'pdf-dummy-file.pdf'),
        downloadedPdfDummyFile:() => cy.readFile('cypress/downloads/pdf-dummy-file.pdf')
       
       
    }

    clickSelectAllCandidatesRecordsCheckbox(){
        this.elements.selectAllCandidatesRecordsCheckbox().click();
    }

    clickDeleteSelectedCandidatesRecordsButton() {
        this.elements.deleteSelectedCandidatesRecordsButton().click();
    }

    confirmDeleteSelectedCandidatesRecordsModal(){
        this.elements.deleteSelectedCandidatesRecordsModal().click();
   }

    clickAddCandidateButton(){
        this.elements.addCandidateButton().click();
    }

    typeCandidateFirstName(){
        this.elements.candidateFirstNameField().type(randomFirstNameGenerator);
    }

    typeCandidateMiddleName(){
        this.elements.candidateMiddleNameField().type(randomMiddleNameGenerator);
    }

    typeCandidateLastName(){
        this.elements.candidateLastNameField().type(randomLastNameGenerator);
    }

    typeCandidateEmail(){
        this.elements.candidateEmailField().type(randomEmailGenerator);
    }

    openCandidateVacancyMenu(){
        this.elements.candidateVacancyMenu().realClick();
    }

    selectSeniorQaLeadFromCandidateVacancyMenu(){
        this.elements.vacancyMenuQaLead().realClick();
    }

    
    clickCandidateSaveButton(){
        this.elements.candidateSaveButton().click();
    }

    confirmCandidateSaveSuccessToast(){
        this.elements.toastMessage().should('include.text', 'Success');
    }

    uploadResume(){
        this.elements.resumeFileUpload().selectFile('cypress/fixtures/pdf-dummy-file.pdf', { force:true }).wait(3000);
    }

    clickCandidatesHeaderButton(){
        this.elements.candidatesHeaderButton().click();
    }

    confirmCandidateWasAdded(){
        this.elements.john999InCandidatesRecords().should('include.text', 'John999');
    }

    viewProfileOfFirstPersonListedInCandidateRecords(){
        this.elements.firstPersonListedInCandidatesRecordsProfile().click();
    }

    confirmCandidateProfile(){
        this.elements.candidateProfile().should('include.text', 'John999');
    }

    confirmResumeWasUploaded(){
        this.elements.pdfDummyFile().should('exist');
    }

    downloadResume(){
        this.elements.pdfDummyFile().click();
    }
   
    confirmResumeWasDownloaded(){
        this.elements.downloadedPdfDummyFile().should('exist');
    }

}

module.exports = new OrangeDemoRecruitmentPage();