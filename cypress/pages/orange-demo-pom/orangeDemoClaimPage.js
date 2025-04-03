
import orangeDemoTestData from '../../fixtures/orange-demo/orangeDemoTestData.json';

class OrangeDemoClaimPage{

    elements = {
        eventMenu:() => cy.get('.oxd-select-text-input').eq(0),
        currencyMenu:() => cy.get('.oxd-select-text-input').eq(1),
        eventMenuTravelAllowance:() => cy.get('.oxd-select-wrapper').eq(0).contains('Travel Allowance'),
        currencyMenuUnitedStatesDollar:() => cy.get('.oxd-select-wrapper').eq(1).contains('United States Dollar'),
        submitClaimHeaderButton:() => cy.contains('.oxd-topbar-body-nav-tab-item', 'Submit Claim'), 
        remarksSection:() => cy.get('textarea').eq(0),
        createClaimButton:() => cy.get('button[type="submit"]'),
        toastMessage:() =>  cy.get('#oxd-toaster_1'),
        myClaimsHeaderButton:() => cy.contains('.oxd-topbar-body-nav-tab-item', 'My Claims'), 
        addExpenseButton:() => cy.contains('.oxd-button', 'Add'),
        expenseTypeModalMenu:() => cy.get('.oxd-select-text-input'),
        expenseTypeModalMenuFuelAllowance:() => cy.get('.oxd-select-wrapper').contains('Fuel Allowance'),
        expenseDatePicker:() => cy.get('.oxd-date-input'),
        expenseAmountField:() => cy.get('.oxd-grid-2 > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input'),
        expenseNoteField:() => cy.get('textarea').eq(1),
        expenseModalSaveButton:() => cy.contains('button', 'Save'),
        submitClaimButton:() => cy.contains('button', 'Submit'),
        claimDescription:() => cy.get('.oxd-table-cell.oxd-padding-cell').eq(2),
        claimStatus:() => cy.get('.oxd-table-cell.oxd-padding-cell').eq(5),
        claimAmount:() => cy.get('.oxd-table-cell.oxd-padding-cell').eq(6)
       
    }

    clickSubmitClaimHeaderButton(){
        this.elements.submitClaimHeaderButton().click();
    }

    openEventMenu(){
        this.elements.eventMenu().realClick();
    }

    openCurrencyMenu(){
        this.elements.currencyMenu().realClick();
    }

    selectTravelAllowanceFromEventMenu(){
        this.elements.eventMenuTravelAllowance().realClick();
    }

    selectUnitedStatesDollarFromCurrencyMenu(){
        this.elements.currencyMenuUnitedStatesDollar().realClick();
    }

    typeCommentInRemarksSection(){
        this.elements.remarksSection().type(orangeDemoTestData.formData.claimRemarksSectionText);
    }

    clickCreateClaimButton(){
        this.elements.createClaimButton().click();
    }

    confirmSubmitClaimSuccessToast(){
        this.elements.toastMessage().should('include.text', 'Success');
    }

    clickAddExpenseButton(){
        this.elements.addExpenseButton().click();
    }

    clickExpenseTypeModalMenu(){
        this.elements.expenseTypeModalMenu().click();
    }

    selectFuelAllowanceFromexpenseTypeModalMenu(){
        this.elements.expenseTypeModalMenuFuelAllowance().click();
    }

    typeDateIntoExpenseDatePicker(){
        this.elements.expenseDatePicker().click().type(orangeDemoTestData.formData.expenseDatePicker).click();
    }

    inputExpenseAmount(){
        this.elements.expenseAmountField().type(orangeDemoTestData.formData.expenseAmount);
    }

    addNoteToExpense(){
        this.elements.expenseNoteField().type(orangeDemoTestData.formData.expenseNote);
    }

    clickExpenseModalSaveButton(){
        this.elements.expenseModalSaveButton().click();
    }

    clickSubmitClaimButton(){
        this.elements.submitClaimButton().click();
    }

    clickMyClaimsHeaderButton(){
        this.elements.myClaimsHeaderButton().click();
    }

    confirmClaimDescription(){
        this.elements.claimDescription().should('include.text', orangeDemoTestData.formData.claimRemarksSectionText);
    }

    confirmClaimStatus(){
        this.elements.claimStatus().should('include.text', 'Submitted');
    }

    confirmClaimAmount(){
        this.elements.claimAmount().should('include.text', orangeDemoTestData.formData.expenseAmount);
    }

}

module.exports = new OrangeDemoClaimPage();