class OrangeDemoProfileMenu{

    elements = {
        profileMenu: () => cy.get('p[class="oxd-userdropdown-name"]'),
        profileMenuLogout: () => cy.contains('.oxd-userdropdown-link', 'Logout') 
       
    }

    openProfileMenu(){
        this.elements.profileMenu().realClick();
    }

    clickLogoutMenu(){
        this.elements.profileMenuLogout().realClick();
    }

}

module.exports = new OrangeDemoProfileMenu();