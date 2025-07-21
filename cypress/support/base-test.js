import { DEVICE_TYPES } from '../utils/constants';

let users = [];

before(() => {
    cy.fixture('users').then((data) => {
        users = data;
    });
});

beforeEach(() => {
    cy.openPage(DEVICE_TYPES.FULLSCREEN);
});

export function getUsers() {
    return users;
}

export function getUserValid(type) {
    return users.find(user => user.status === type);
}

export function addProductsToCart(productsToBuy, inventoryPage, productPage) {
    productsToBuy.forEach((product, index) => {
        inventoryPage.selectTheItem(product.name);
        productPage.checkThatProductIsVisible()
            .addProductToTheShoppingCart(index)
            .checkThatProductIsAddedSuccessfully(product.id)
            .goBackToProducts();
    });
}

export function removeAllProductsFromCart(cartPage, products) {
    const initialQuantity = products.length;
    products.forEach((product, index) => {
        cartPage.getProducts()
            .checkThatTheQuantityProducts(initialQuantity - index)
            .removeProductFromTheShoppingCart();
    });
}