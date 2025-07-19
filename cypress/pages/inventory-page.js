import {URLS as ROUTES} from "../utils/constants";

class InventoryPage {
    elements = {
        logoLabel: () => cy.get(".app_logo"),
        titleLabel: () => cy.get("[data-test='title']"),
        burgerMenuButton: () => cy.get("#react-burger-menu-btn"),
    }

    isVisible() {
        cy.url().should('include', ROUTES.INVENTORY);
        this.elements.logoLabel().should('be.visible');
        this.elements.titleLabel().should('be.visible');
        this.elements.burgerMenuButton().should('be.visible');
        return this;
    }
}

export default InventoryPage