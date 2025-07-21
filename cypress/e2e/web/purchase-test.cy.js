import purchaseData from "../../fixtures/purchase-data.json";
import LoginPage from "../../pages/login-page";
import InventoryPage from "../../pages/inventory-page";
import ProductPage from "../../pages/product-page";
import CartPage from "../../pages/cart-page";
import CheckoutInformationPage from "../../pages/checkout-information-page";
import CheckoutOverviewPage from "../../pages/checkout-overview-page";
import CheckoutCompletePage from "../../pages/checkout-complete-page";
import {getUserValid} from "../../utils/get-data";
import {addProductsToCart, removeAllProductsFromCart} from "../../support/base-test";

describe('Buy products', () => {

    const loginPage = new LoginPage();
    const inventoryPage = new InventoryPage();
    const productPage = new ProductPage();
    const cartPage = new CartPage();
    const checkoutInformationPage = new CheckoutInformationPage();
    const checkoutOverviewPage = new CheckoutOverviewPage();
    const checkoutCompletePage = new CheckoutCompletePage();

    beforeEach(() => {
        const user = getUserValid();
        loginPage.doLogin(user.username, user.password);
    });

    it('should complete purchase of selected products', () => {
        addProductsToCart(purchaseData.productsToBuy, inventoryPage, productPage);

        inventoryPage.getHeader().goToShoppingCart()

        cartPage.checkThatCartIsVisible()
            .checkThatProductInformationIsCorrect()
            .goTOCheckoutYourInformation();

        checkoutInformationPage.checkThatCheckoutInformationIsVisible()
            .enterYourInformation(purchaseData.userInfo)
            .goToCheckoutOverview();

        checkoutOverviewPage.checkThatCheckoutOverviewPageIsVisible()
            .checkThatProductInformationIsCorrect()
            .checkThatThePaymentInformationIsCorrect(purchaseData.taxRate)
            .finishPurchase()

        checkoutCompletePage.checkThatCheckoutInformationIsVisible()
    })

    it('should remove a product from the shopping cart', () => {
        addProductsToCart(purchaseData.productsToBuy, inventoryPage, productPage);

        inventoryPage.getHeader().goToShoppingCart()

        removeAllProductsFromCart(cartPage, purchaseData.productsToBuy)

        cartPage.goToContinueShopping()
        inventoryPage.chackThatInventoryIsVisible()
    });

})

