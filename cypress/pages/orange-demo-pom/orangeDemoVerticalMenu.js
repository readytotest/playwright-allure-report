class OrangeDemoVerticalMenu{

    elements = {
        dashboardLink:() => cy.contains('.oxd-main-menu-item', 'Dashboard'),
        myInfoLink:() => cy.contains('.oxd-main-menu-item', 'My Info'),
        buzzLink:() => cy.contains('.oxd-main-menu-item', 'Buzz'),
        recruitmentLink:() => cy.contains('.oxd-main-menu-item', 'Recruitment'),
        claimLink:() => cy.contains('.oxd-main-menu-item', 'Claim'),
        adminLink:() => cy.contains('.oxd-main-menu-item', 'Admin'),
        leaveLink:() => cy.contains('.oxd-main-menu-item', 'Leave'),
        pimLink:() => cy.contains('.oxd-main-menu-item', 'PIM')

    }

    clickDashboardLink(){
        this.elements.dashboardLink().click();
    }

    clickMyInfoLink(){
        this.elements.myInfoLink().click();
    }

    clickBuzzLink(){
        this.elements.buzzLink().click();
    }

    clickRecruitmentLink(){
        this.elements.recruitmentLink().click();
    }

    clickClaimLink(){
        this.elements.claimLink().click();
    }

    clickAdminLink(){
        this.elements.adminLink().click();
    }

    clickLeaveLink(){
        this.elements.leaveLink().click();
    }

    clickPimLink(){
        this.elements.pimLink().click();
    }


}

module.exports = new OrangeDemoVerticalMenu();