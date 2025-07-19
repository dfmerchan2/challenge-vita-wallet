import LoginPage from "../../pages/login-page";
import InventoryPage from "../../pages/inventory-page";
import {DEVICE_TYPES, USER_TYPES} from "../../utils/constants";

describe('Login in sauce demo tests', () => {

    const loginPage = new LoginPage();
    const inventoryPage = new InventoryPage();
    let users;

    before(() => {
        cy.fixture('users').then(data => {
            users = data;
        });
    });

    beforeEach(() => {
        cy.openPage(DEVICE_TYPES.TABLET);
    })

    it('should allow login for a valid standard user', function () {
        const validUser = users.find(user => user.status === USER_TYPES.VALID);

        loginPage
            .isVisible()
            .enterUsername(validUser.user)
            .enterPassword(validUser.password)
            .clickLoginButton();

        inventoryPage.isVisible();
    });

    it('should display appropriate error messages when login fails with invalid credentials', function () {
        const invalidUsers = users.filter(user => user.status === USER_TYPES.INVALID);

        invalidUsers.forEach(data => {
            loginPage
                .isVisible()
                .enterUsername(data.user)
                .enterPassword(data.password)
                .clickLoginButton()
                .errorMessageShouldBe(data.errorMessage)
                .errorIconShouldBeVisible()
                .clearInputs()
        });
    });
})