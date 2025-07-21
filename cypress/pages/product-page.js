import { testContext } from '../utils/test-context';
import HeaderComponent from './components/header-component';
import FooterComponent from './components/footer-component';
import { KEY_CONTEXT, URLS } from '../utils/constants';

class ProductPage {
  elements = {
    backToProductsButton: () => cy.get('[data-test="back-to-products"]'),
    productsImage: () => cy.get('.inventory_details_img'),
    productsNameLabel: () => cy.get('[data-test="inventory-item-name"]'),
    productsDescriptionLabel: () => cy.get('[data-test="inventory-item-desc"]'),
    productsPriceLabel: () => cy.get('[data-test="inventory-item-price"]'),
    addToCartButton: () => cy.get('[data-test="add-to-cart"]'),
    removeProductButton: () => cy.get('[data-test="remove"]'),
  };

  constructor() {
    this.header = new HeaderComponent();
    this.foter = new FooterComponent();
    return this;
  }

  goBackToProducts() {
    this.elements.backToProductsButton().click();
    return this;
  }

  clickAddToCartButton() {
    this.elements.addToCartButton().click();
    return this;
  }

  clickRemoveProductButton() {
    this.elements.removeProductButton().click();
    return this;
  }

  checkThatItemQuantityIsCorrect(quality) {
    this.header.qualityItemIsCorrect(quality);
    return this;
  }

  checkThatRemoveProductButtonIsVisible() {
    this.elements.removeProductButton().should('be.visible');
    return this;
  }

  checkThatRemoveProductButtonIsNotVisible() {
    this.elements.removeProductButton().should('be.not.visible');
  }

  saveProductData(index) {
    const product = {};

    this.elements
      .productsNameLabel()
      .invoke('text')
      .then((name) => {
        product.name = name.trim();
      });

    this.elements
      .productsDescriptionLabel()
      .invoke('text')
      .then((description) => {
        product.description = description.trim();
      });

    this.elements
      .productsPriceLabel()
      .invoke('text')
      .then((price) => {
        product.price = price.trim();

        const productList = testContext.get(KEY_CONTEXT.PRODUCTS) || [];
        productList[index] = product;
        testContext.set(KEY_CONTEXT.PRODUCTS, productList);
      });

    return this;
  }

  addProductToTheShoppingCart(index) {
    this.saveProductData(index);
    this.clickAddToCartButton();
    return this;
  }

  checkThatProductIsAddedSuccessfully(quality) {
    this.checkThatItemQuantityIsCorrect(quality);
    this.checkThatRemoveProductButtonIsVisible();
    return this;
  }

  checkThatProductIsVisible() {
    cy.url().should('include', URLS.INVENTORY_ITEM);
    this.header.checkThatHeaderIsVisible();
    this.foter.checkThatFooterIsVisible();
    cy.shouldBeVisible(
      this.elements.backToProductsButton,
      this.elements.productsImage,
      this.elements.productsNameLabel,
      this.elements.productsDescriptionLabel,
      this.elements.productsPriceLabel,
      this.elements.addToCartButton
    );
    return this;
  }
}

export default ProductPage;
