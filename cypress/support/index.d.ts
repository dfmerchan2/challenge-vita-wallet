declare namespace Cypress {
    interface Chainable<Subject = any> {
        openPage(deviceType: string): void;

        openPage(): void;

        shouldBeVisible(...elementFns: any[]):void;

        shouldBeVisible(elements: any[]):void;
    }
}
