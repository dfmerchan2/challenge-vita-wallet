import MenuComponent from "./menu-component";

class HeaderComponent {
    elements = {
        burgerMenuButton: () => cy.get('#react-burger-menu-btn'),
        logoLabel: () => cy.get('.app_logo'),
        shoppingCartButton: () => cy.get('[data-test="shopping-cart-link"]'),
        qualityItems: () => cy.get('[data-test="shopping-cart-badge"]')
    }

    constructor() {
        this.menu = new MenuComponent();
        return this;
    }

    clickBurgerMenuButton() {
        this.elements.burgerMenuButton().click();
        return new MenuComponent();
    }

    clickShoppingCartButton() {
        this.elements.shoppingCartButton().click();
        return this;
    }

    qualityItemIsCorrect(expected) {
        this.elements.qualityItems()
            .should('be.visible')
            .invoke('text')
            .should('eq', expected.toString());
        return this;
    }

    getMenu() {
        return this.menu;
    }

    doLogout() {
        this.clickBurgerMenuButton()
        this.getMenu().clickLogoutButton()
    }

    checkThatHeaderIsVisible() {
        cy.shouldBeVisible(
            this.elements.burgerMenuButton,
            this.elements.logoLabel,
            this.elements.shoppingCartButton);
        return this;
    }
}

export default HeaderComponent;