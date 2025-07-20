import HeaderComponent from "./components/header-component";
import FooterComponent from "./components/footer-component";
import {URLS} from "../utils/constants";

class CheckoutInformationPage {
    elements = {
        checkoutYourInformationTitle: () => cy.get('[data-test="title"]'),
        firstNameInput: () => cy.get('[data-test="firstName"]'),
        lastNameInput: () => cy.get('[data-test="lastName"]'),
        postalCodeInput: () => cy.get('[data-test="postalCode"]'),
        continueButton: () => cy.get('[data-test="continue"]'),
        cancelButton: () => cy.get('[data-test="cancel"]'),
    }

    constructor() {
        this.header = new HeaderComponent();
        this.foter = new FooterComponent();
        return this;
    }

    enterFirstName(firstName) {
        this.elements.firstNameInput().type(firstName);
        return this;
    }

    enterLastName(lastName) {
        this.elements.lastNameInput().type(lastName);
        return this;
    }

    enterPostalCode(postalCode) {
        this.elements.postalCodeInput().type(postalCode);
        return this;
    }

    clickContinueButton() {
        this.elements.continueButton().click();
    }

    checkThatCheckoutInformationIsVisible() {
        cy.url().should('include', URLS.CHECKOUT_STEP_ONE);
        this.header.checkThatHeaderIsVisible();
        this.foter.checkThatFooterIsVisible();
        cy.shouldBeVisible(
            this.elements.checkoutYourInformationTitle,
            this.elements.firstNameInput,
            this.elements.lastNameInput,
            this.elements.postalCodeInput,
            this.elements.continueButton,
            this.elements.cancelButton);
        return this;
    }
}

export default CheckoutInformationPage