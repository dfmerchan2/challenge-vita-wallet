import purchaseData from "../../fixtures/purchase-data.json";
import LoginPage from "../../pages/login-page";
import InventoryPage from "../../pages/inventory-page";
import ProductPage from "../../pages/product-page";
import CartPage from "../../pages/cart-page";
import CheckoutInformationPage from "../../pages/checkout-information-page";
import CheckoutOverviewPage from "../../pages/checkout-overview-page";
import CheckoutCompletePage from "../../pages/checkout-complete-page";
import {getUserValid} from "../../utils/get-data";

describe('Buy products', () => {

    const loginPage = new LoginPage();
    const inventoryPage = new InventoryPage();
    const productPage = new ProductPage();
    const cartPage = new CartPage();
    const checkoutInformationPage = new CheckoutInformationPage();
    const checkoutOverviewPage = new CheckoutOverviewPage();
    const checkoutCompletePage = new CheckoutCompletePage();

    it('should buy products', () => {
        const user = getUserValid();

        loginPage.doLogin(user.username, user.password);

        purchaseData.productsToBuy.forEach((product, index) => {
            inventoryPage.selectTheItem(product.name)
            productPage.chackThatProductIsVisible()
                .saveProductData(index)
                .clickAddToCartButton()
                .checkThatItemQuantityIsCorrect(product.id)
                .checkThatRemoveProductButtonIsVisible()
                .clickBackToProductsButton()
        })

        inventoryPage.getHeader().clickShoppingCartButton()
        cartPage.chackThatCartIsVisible()
            .getListProducts()
            .chackThatProductNameIsCorrect()
            .chackThatProductDescriptionIsCorrect()
            .chackThatProductPriceIsCorrect();
        cartPage.clickCheckoutButton();
        checkoutInformationPage.chackThatCheckoutInformationIsVisible()
            .enterFirstName(purchaseData.userInfo.firstName)
            .enterLastName(purchaseData.userInfo.lastName)
            .enterPostalCode(purchaseData.userInfo.postalCode)
            .clickContinueButton()
        checkoutOverviewPage.chackThatCheckoutOverviewPageIsVisible()
            .checkThatItemTotalIsCorrect()
            .checkThatTaxIsCorrect(purchaseData.taxRate)
            .checkThatTotalIsCorrect(purchaseData.taxRate)
            .clickFinishButton()
        checkoutCompletePage.chackThatCheckoutInformationIsVisible()


    })
})

