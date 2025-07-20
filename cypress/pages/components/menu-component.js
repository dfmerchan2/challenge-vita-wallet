class MenuComponent {
    elements = {
        closeMenuButton: () => cy.get('#react-burger-cross-btn'),
        allItemsButton: () => cy.get('[data-test="inventory-sidebar-link"]'),
        aboutButton: () => cy.get('[data-test="about-sidebar-link"]'),
        logoutButton: () => cy.get('[data-test="logout-sidebar-link"]'),
        resetAppStateButton: () => cy.get('[data-test="reset-sidebar-link"]'),
    }

    clickCloseMenuButton() {
        this.elements.closeMenuButton().click();
        return this;
    }

    clickAllItemsButton() {
        this.elements.allItemsButton().click();
        return this;
    }

    clickAboutButton() {
        this.elements.aboutButton().click();
        return this;
    }

    clickLogoutButton() {
        this.elements.logoutButton().click();
        return this;
    }

    clickResetAppStateButton() {
        this.elements.resetAppStateButton().click();
        return this;
    }

    chackThatMenuIsVisible() {
        cy.shouldBeVisible(
            this.elements.closeMenuButton,
            this.elements.allItemsButton,
            this.elements.aboutButton,
            this.elements.logoutButton,
            this.elements.resetAppStateButton);
        return this;
    }
}

export default MenuComponent;