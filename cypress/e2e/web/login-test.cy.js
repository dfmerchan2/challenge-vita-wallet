import LoginPage from '../../pages/login-page';
import InventoryPage from '../../pages/inventory-page';
import { getUserValid, getUsersInvalid } from '../../utils/get-data';
import { setupWeb } from '../../support/base-web-test';

describe('Login in sauce demo tests', () => {
  const loginPage = new LoginPage();
  const inventoryPage = new InventoryPage();

  setupWeb();

  it('should login and logout successfully', () => {
    const validUser = getUserValid();

    loginPage.checkThatLoginIsVisible().doLogin(validUser.username, validUser.password);

    inventoryPage
      .chackThatInventoryIsVisible()
      .getHeader()
      .clickBurgerMenuButton()
      .checkThatMenuIsVisible()
      .clickLogoutButton();

    loginPage.checkThatLoginIsVisible();
  });

  it('should show error messages for each invalid user type', () => {
    getUsersInvalid().forEach((data) => {
      loginPage
        .checkThatLoginIsVisible()
        .doLogin(data.username, data.password)
        .checkThatErrorMessageIsVisible(data.errorMessage)
        .checkThatErrorIconIsVisible()
        .clearInputs();
    });
  });
});
