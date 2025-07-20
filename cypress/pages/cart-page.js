import {URLS} from "../utils/constants";
import FooterComponent from "./components/footer-component";
import HeaderComponent from "./components/header-component";
import ListProductsComponent from "./components/list-products-component";

class CartPage {
    elements = {
        yourCartTitle: () => cy.get('[data-test="title"]'),
        continueShoppingButton: () => cy.get('[data-test="continue-shopping"]'),
        checkoutButton: () => cy.get('[data-test="checkout"]'),
    }

    constructor() {
        this.header = new HeaderComponent();
        this.foter = new FooterComponent();
        this.listProducts = new ListProductsComponent();
        return this;
    }

    getListProducts() {
        return this.listProducts;
    }

    clickCheckoutButton() {
        this.elements.checkoutButton().click();
        return this;
    }

    checkThatCartIsVisible() {
        cy.url().should('include', URLS.CART);
        this.header.checkThatHeaderIsVisible();
        this.foter.checkThatFooterIsVisible();
        this.listProducts.checkThatListProductsIsVisible();
        cy.shouldBeVisible(
            this.elements.yourCartTitle,
            this.elements.continueShoppingButton,
            this.elements.checkoutButton);
        return this;
    }

}

export default CartPage