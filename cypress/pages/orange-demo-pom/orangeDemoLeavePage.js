import orangeDemoTestData from '../../fixtures/orange-demo/orangeDemoTestData.json';
import { employeeStaticPartialFirstName } from "../../fixtures/orange-demo/orangeDemoFakeDataGenerator.js";

class OrangeDemoLeavePage{
    elements = {
        entitlementsHeaderMenu:() => cy.contains('.oxd-topbar-body-nav-tab-item', 'Entitlements'),
        myLeaveHeaderMenu:() => cy.contains('.oxd-topbar-body-nav-tab-item', 'My Leave'),
        addEntitlementLink:() => cy.contains('.oxd-topbar-body-nav-tab-link', 'Add Entitlements'),
        entitlementEmployeeNameField:() => cy.get('input[placeholder="Type for hints..."]'),
        leaveTypeDropdownMenu:() => cy.get('.oxd-select-text-input').first(),
        leaveTypeUsVacation:() => cy.get('.oxd-select-wrapper').contains('US - Vacation'),
        entitlementField:() => cy.get('.oxd-input').eq(1),
        entitlementSaveButton:() => cy.get('button[type="submit"]'),
        entitlementConfirmSaveModal:() => cy.contains('Confirm'),
        firstListedEntitlementDays:() => cy.get('.oxd-table-cell.oxd-padding-cell').eq(5),
        applyHeaderMenu:() => cy.contains('.oxd-topbar-body-nav-tab-item', 'Apply'),
        leaveDatePickerStart:() => cy.get('input[placeholder="yyyy-dd-mm"]').eq(0),
        leaveDatePickerEnd:() => cy.get('input[placeholder="yyyy-dd-mm"]').eq(1),
        myLeaveBalanceDaysFirstListed:() => cy.get('.oxd-table-cell.oxd-padding-cell').eq(4)


    }

    clickEntitlementsHeaderMenu() {
        this.elements.entitlementsHeaderMenu().click();
    }

    clickAddEntitlementLink(){
        this.elements.addEntitlementLink().click();
    }

    findEmployeeInEntitlementEmployeeNameField(){
        this.elements.entitlementEmployeeNameField().type(employeeStaticPartialFirstName).wait(2000).type("{upArrow}{enter}");
    }

    clickLeaveTypeDropdownMenu(){
        this.elements.leaveTypeDropdownMenu().click()
    }

    selectUsVacationFromLeaveTypeMenu(){
        this.elements.leaveTypeUsVacation().click()
    }

    addDaysToEntitlementField(){
        this.elements.entitlementField().type(orangeDemoTestData.formData.vacationDays);
    }

    clickEntitlementSaveButton(){
        this.elements.entitlementSaveButton().click();
    }

    clickEntitlementConfirmSaveModal(){
        this.elements.entitlementConfirmSaveModal().click();
    }

    confirmFirstListedEntitlementdays(){
        this.elements.firstListedEntitlementDays().should('have.text', orangeDemoTestData.formData.vacationDays);
    }

    clickApplyHeaderMenu() {
        this.elements.applyHeaderMenu().click();
    }

    typeDateIntoLeaveDatePickerStart(){
        this.elements.leaveDatePickerStart().click().type(orangeDemoTestData.formData.leaveDateStart).click();
    }
    /*You have to add a clear here as the end date defaults to be the same as the start date. You got to clear it out if you are requesting more than one day off */
    typeDateIntoLeaveDatePickerEnd(){
        this.elements.leaveDatePickerEnd().click().clear().type(orangeDemoTestData.formData.leaveDateEnd).click();
    }

    clickMyLeaveHeaderMenu(){
        this.elements.myLeaveHeaderMenu().click();
    }

    confirmMyLeaveBalanceDaysFirstListed(){
        this.elements.myLeaveBalanceDaysFirstListed().should('have.text', orangeDemoTestData.formData.vacationDaysBalanceAfterLeaveRequest);
    }


}

module.exports = new OrangeDemoLeavePage()
//