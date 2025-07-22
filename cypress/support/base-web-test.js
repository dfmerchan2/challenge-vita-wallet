let users = [];

export function setupWeb() {
  beforeEach(() => {
    cy.openPage();
    cy.fixture('users').then((data) => {
      users = data;
    });
  });
}

export function getUsers() {
  return users;
}

export function addProductsToCart(productsToBuy, inventoryPage, productPage) {
  productsToBuy.forEach((product, index) => {
    inventoryPage.selectTheItem(product.name);
    productPage
      .checkThatProductIsVisible()
      .addProductToTheShoppingCart(index)
      .checkThatProductIsAddedSuccessfully(product.id)
      .goBackToProducts();
  });
}

export function removeAllProductsFromCart(cartPage, products) {
  const initialQuantity = products.length;
  products.forEach((product, index) => {
    cartPage
      .getProducts()
      .checkThatTheQuantityProducts(initialQuantity - index)
      .removeProductFromTheShoppingCart();
  });
}
