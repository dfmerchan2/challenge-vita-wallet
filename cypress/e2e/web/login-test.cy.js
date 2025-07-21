import LoginPage from '../../pages/login-page';
import InventoryPage from '../../pages/inventory-page';
import { getUserValid, getUsersInvalid } from '../../utils/get-data';

describe('Login in sauce demo tests', () => {
  const loginPage = new LoginPage();
  const inventoryPage = new InventoryPage();

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
