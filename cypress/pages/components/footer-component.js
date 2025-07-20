class FooterComponent {
    elements = {
        logoTwitter: () => cy.get('[data-test="social-twitter"]'),
        logoFacebook: () => cy.get('[data-test="social-facebook"]'),
        logoLinkedin: () => cy.get('[data-test="social-linkedin"]'),
        copyRightsLabel: () => cy.get('[data-test="footer-copy"]'),
    }

    chackThatFooterIsVisible() {
        cy.shouldBeVisible(
            this.elements.logoTwitter,
            this.elements.logoFacebook,
            this.elements.logoLinkedin,
            this.elements.copyRightsLabel);
        return this
    }
}

export default FooterComponent;