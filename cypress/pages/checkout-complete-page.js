import HeaderComponent from "./components/header-component";
import FooterComponent from "./components/footer-component";
import {URLS} from "../utils/constants";

class CheckoutCompletePage {

    elements = {
        checkoutCompleteTitle: () => cy.get('[data-test="title"]'),
        successfulPurchaseIcon: () => cy.get('[data-test="pony-express"]'),
        successfulPurchaseTitle: () => cy.get('[data-test="complete-header"]'),
        successfulPurchaseMessage: () => cy.get('[data-test="complete-text"]'),
        backToProductsButton: () => cy.get('[data-test="back-to-products"]'),
    }

    constructor() {
        this.header = new HeaderComponent();
        this.foter = new FooterComponent();
        return this;
    }

    chackThatCheckoutInformationIsVisible() {
        cy.url().should('include', URLS.CHECKOUT_COMPLETE);
        this.header.chackThatHeaderIsVisible();
        this.foter.chackThatFooterIsVisible();
        cy.shouldBeVisible(
            this.elements.checkoutCompleteTitle,
            this.elements.successfulPurchaseIcon,
            this.elements.successfulPurchaseTitle,
            this.elements.successfulPurchaseMessage,
            this.elements.backToProductsButton)
        return this;
    }
}

export default CheckoutCompletePage;