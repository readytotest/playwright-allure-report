import OrangeDemoLoginPage from "../../pages/orange-demo-pom/orangeDemoLoginPage";
import OrangeDemoDashboardPage from "../../pages/orange-demo-pom/orangeDemoDashboardPage";
import orangeDemoTestData from "../../fixtures/orange-demo/orangeDemoTestData.json";
import OrangeDemoVerticalMenu from "../../pages/orange-demo-pom/orangeDemoVerticalMenu";
import OrangeDemoMyInfoPage from "../../pages/orange-demo-pom/orangeDemoMyInfoPage";
import OrangeDemoBuzzPage from "../../pages/orange-demo-pom/orangeDemoBuzzPage";
import OrangeDemoRecruitmentPage from "../../pages/orange-demo-pom/orangeDemoRecruitmentPage";
import OrangeDemoClaimPage from "../../pages/orange-demo-pom/orangeDemoClaimPage";
import OrangeDemoAdminPage from "../../pages/orange-demo-pom/orangeDemoAdminPage";
import OrangeDemoLeavePage from "../../pages/orange-demo-pom/orangeDemoLeavePage";
import OrangeDemoPimPage from "../../pages/orange-demo-pom/orangeDemoPimPage";

describe("Orange Demo Smoke Test", () => {
  beforeEach(() => {
    cy.visit(Cypress.env("orangeDemoUrl"));
    OrangeDemoLoginPage.enterUsername(orangeDemoTestData.loginCredentials.usernameValid);
    OrangeDemoLoginPage.enterPassword(orangeDemoTestData.loginCredentials.passwordValid);
    OrangeDemoLoginPage.clickLoginButton();
    OrangeDemoDashboardPage.confirmOnDashboardPage();
    cy.log("Login successful!");
  });

  it("My Info: change photo, edit name and work email", () => {
    OrangeDemoVerticalMenu.clickMyInfoLink();
    OrangeDemoMyInfoPage.clickProfilePhoto();
    OrangeDemoMyInfoPage.uploadProfilePhoto();
    OrangeDemoMyInfoPage.clickProfilePhotoSaveButton();

    OrangeDemoMyInfoPage.clickPersonalDetailsLink();
    OrangeDemoMyInfoPage.clearFirstNameField();
    OrangeDemoMyInfoPage.checkIfFirstNameFieldEmpty();
    OrangeDemoMyInfoPage.typeFirstName();

    OrangeDemoMyInfoPage.clearMiddleNameField();
    OrangeDemoMyInfoPage.checkIfMiddleNameFieldEmpty();
    OrangeDemoMyInfoPage.typeMiddleName();

    OrangeDemoMyInfoPage.clearLastNameField();
    OrangeDemoMyInfoPage.checkIfLastNameFieldEmpty();
    OrangeDemoMyInfoPage.typeLastName();
    OrangeDemoMyInfoPage.clickFirstMyInfoSaveButton();
    OrangeDemoMyInfoPage.confirmMyInfoSaveSuccessToast();

    OrangeDemoMyInfoPage.clickContactDetailsLink();
    OrangeDemoMyInfoPage.clearWorkEmailField();
    OrangeDemoMyInfoPage.checkIfWorkEmailFieldEmpty();
    OrangeDemoMyInfoPage.typeWorkEmail();
    OrangeDemoMyInfoPage.clickFirstMyInfoSaveButton();
    OrangeDemoMyInfoPage.confirmMyInfoSaveSuccessToast();

    OrangeDemoMyInfoPage.confirmNameOfLoggedInUser();
    OrangeDemoMyInfoPage.confirmWorkEmail();
  });

  it("Buzz: add post.", () => {
    OrangeDemoVerticalMenu.clickBuzzLink();
    OrangeDemoBuzzPage.typeBuzzMessage();
    OrangeDemoBuzzPage.postBuzzMessage();
    OrangeDemoBuzzPage.confirmBuzzMessage();
  });

  it("Dashboard: confirm a few headings", () => {
    OrangeDemoVerticalMenu.clickDashboardLink();
    OrangeDemoDashboardPage.confirmDashboardTimeAtWork();
    OrangeDemoDashboardPage.confirmDashboardMyActions();
  });

  it("Recruitment: delete candidates, add candidate and upload resume", () => {
    OrangeDemoVerticalMenu.clickRecruitmentLink();
    OrangeDemoRecruitmentPage.clickSelectAllCandidatesRecordsCheckbox();
    OrangeDemoRecruitmentPage.clickDeleteSelectedCandidatesRecordsButton();
    OrangeDemoRecruitmentPage.confirmDeleteSelectedCandidatesRecordsModal();
    OrangeDemoRecruitmentPage.clickAddCandidateButton();
    OrangeDemoRecruitmentPage.typeCandidateFirstName();
    OrangeDemoRecruitmentPage.typeCandidateMiddleName();
    OrangeDemoRecruitmentPage.typeCandidateLastName();
    OrangeDemoRecruitmentPage.typeCandidateEmail();
    OrangeDemoRecruitmentPage.openCandidateVacancyMenu();
    OrangeDemoRecruitmentPage.selectSeniorQaLeadFromCandidateVacancyMenu();
    OrangeDemoRecruitmentPage.uploadResume();
    OrangeDemoRecruitmentPage.clickCandidateSaveButton();
    OrangeDemoRecruitmentPage.confirmCandidateSaveSuccessToast();
    OrangeDemoRecruitmentPage.clickCandidatesHeaderButton();
    OrangeDemoRecruitmentPage.confirmCandidateWasAdded();
    OrangeDemoRecruitmentPage.viewProfileOfFirstPersonListedInCandidateRecords();
    OrangeDemoRecruitmentPage.confirmCandidateProfile();
    OrangeDemoRecruitmentPage.confirmResumeWasUploaded();
    OrangeDemoRecruitmentPage.downloadResume();
    OrangeDemoRecruitmentPage.confirmResumeWasDownloaded();
  });

  it("Claim: add claim, add expense, submit claim", () => {
    OrangeDemoVerticalMenu.clickClaimLink();
    OrangeDemoClaimPage.clickSubmitClaimHeaderButton();
    OrangeDemoClaimPage.openEventMenu();
    OrangeDemoClaimPage.selectTravelAllowanceFromEventMenu();
    OrangeDemoClaimPage.openCurrencyMenu();
    OrangeDemoClaimPage.selectUnitedStatesDollarFromCurrencyMenu();
    OrangeDemoClaimPage.typeCommentInRemarksSection();
    OrangeDemoClaimPage.clickCreateClaimButton();
    OrangeDemoClaimPage.clickAddExpenseButton();
    OrangeDemoClaimPage.clickExpenseTypeModalMenu();
    OrangeDemoClaimPage.selectFuelAllowanceFromexpenseTypeModalMenu();
    OrangeDemoClaimPage.typeDateIntoExpenseDatePicker();
    OrangeDemoClaimPage.inputExpenseAmount();
    OrangeDemoClaimPage.addNoteToExpense();
    OrangeDemoClaimPage.clickExpenseModalSaveButton();
    OrangeDemoClaimPage.clickSubmitClaimButton();
    OrangeDemoClaimPage.confirmSubmitClaimSuccessToast();
    OrangeDemoClaimPage.clickMyClaimsHeaderButton();
    OrangeDemoClaimPage.confirmClaimDescription();
    OrangeDemoClaimPage.confirmClaimStatus();
    OrangeDemoClaimPage.confirmClaimAmount();
  });

  it("Admin: change organization name", () => {
    OrangeDemoVerticalMenu.clickAdminLink();
    OrangeDemoAdminPage.clickOrganizationMenu();
    OrangeDemoAdminPage.clickGeneralInfoSubMenu();
    OrangeDemoAdminPage.clickEditGeneralInfoSlider();
    OrangeDemoAdminPage.clearOrganizationNameField();
    OrangeDemoAdminPage.checkIfOrganizationNameFieldEmpty();
    OrangeDemoAdminPage.typeOrganizationName();
    OrangeDemoAdminPage.checkIfOrganizationNameFieldNotEmpty();
    OrangeDemoAdminPage.clickOrganizationSaveButton();
    OrangeDemoAdminPage.confirmOrganizationName();
  });

  it("Leave: add vacation days, apply leave days, check vacation balance", () => {
    OrangeDemoVerticalMenu.clickLeaveLink();
    OrangeDemoLeavePage.clickEntitlementsHeaderMenu();
    OrangeDemoLeavePage.clickAddEntitlementLink();
    OrangeDemoLeavePage.findEmployeeInEntitlementEmployeeNameField();
    OrangeDemoLeavePage.clickLeaveTypeDropdownMenu();
    OrangeDemoLeavePage.selectUsVacationFromLeaveTypeMenu();
    OrangeDemoLeavePage.addDaysToEntitlementField();
    OrangeDemoLeavePage.clickEntitlementSaveButton();
    OrangeDemoLeavePage.clickEntitlementConfirmSaveModal();
    OrangeDemoLeavePage.confirmFirstListedEntitlementdays();

    OrangeDemoLeavePage.clickApplyHeaderMenu();
    OrangeDemoLeavePage.clickLeaveTypeDropdownMenu();
    OrangeDemoLeavePage.selectUsVacationFromLeaveTypeMenu();
    OrangeDemoLeavePage.typeDateIntoLeaveDatePickerStart();
    OrangeDemoLeavePage.typeDateIntoLeaveDatePickerEnd();
    OrangeDemoLeavePage.clickEntitlementSaveButton();

    OrangeDemoLeavePage.clickMyLeaveHeaderMenu();
    OrangeDemoLeavePage.confirmMyLeaveBalanceDaysFirstListed();
  });

  it("PIM: add employee and create login", () => {
    OrangeDemoVerticalMenu.clickPimLink();
    OrangeDemoPimPage.clickPimAddButton();
    OrangeDemoPimPage.typePimFirstNameField();
    OrangeDemoPimPage.typePimLastNameField();
    OrangeDemoPimPage.clickPimCreateLoginDetailsSlider();
    OrangeDemoPimPage.typePimUsernameField();
    OrangeDemoPimPage.typePimPasswordField1();
    OrangeDemoPimPage.typePimPasswordField2();
    OrangeDemoPimPage.clickPimSaveButton();
    OrangeDemoVerticalMenu.clickPimLink();
    OrangeDemoPimPage.findEmployeeInPimEmployeeNameField();
    OrangeDemoPimPage.clickPimSearchButton();
    OrangeDemoPimPage.confirmEmployeeAdded();
  });
});
