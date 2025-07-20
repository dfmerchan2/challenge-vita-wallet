import {COLORS} from "../utils/constants";

class LoginPage {
    elements = {
        logoLabel: () => cy.get(".login_logo"),
        usernameInput: () => cy.get("[data-test='username']"),
        passwordInput: () => cy.get("[data-test='password']"),
        loginButton: () => cy.get("[data-test='login-button']"),
        errorMessage: () => cy.get("[data-test='error']"),
        errorIcon: () => cy.get("[data-test='error-button']"),
        credentialsLabel: () => cy.get(".login_credentials"),
        passwordLabel: () => cy.get(".login_password")
    }

    clearInputs() {
        this.elements.usernameInput().clear();
        this.elements.passwordInput().clear();
        return this;
    }

    enterUsername(user) {
        if (user) this.elements.usernameInput().type(user);
        return this;
    }

    enterPassword(password) {
        if (password) this.elements.passwordInput().type(password);
        return this;
    }

    clickLoginButton() {
        this.elements.loginButton().click();
        return this;
    }

    doLogin(user, password) {
        this.enterUsername(user);
        this.enterPassword(password);
        this.clickLoginButton();
    }

    chackThatErrorMessageIsVisible(message) {
        this.elements.errorMessage()
            .should("be.visible")
            .and('have.text', message)
            .and('have.css', 'color', COLORS.ERROR_LOGIN)
        return this;
    }

    chackThatErrorIconIsVisible() {
        this.elements.errorIcon().should('be.visible');
        return this;
    }

    chackThatLoginIsVisible() {
        cy.shouldBeVisible(
            this.elements.logoLabel,
            this.elements.usernameInput,
            this.elements.passwordInput,
            this.elements.loginButton,
            this.elements.credentialsLabel,
            this.elements.passwordLabel);
        return this;
    }
}

export default LoginPage