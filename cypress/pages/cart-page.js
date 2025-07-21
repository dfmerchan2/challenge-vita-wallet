import { URLS } from '../utils/constants';
import FooterComponent from './components/footer-component';
import HeaderComponent from './components/header-component';
import ProductsComponent from './components/products-component';

class CartPage {
  elements = {
    yourCartTitle: () => cy.get('[data-test="title"]'),
    continueShoppingButton: () => cy.get('[data-test="continue-shopping"]'),
    checkoutButton: () => cy.get('[data-test="checkout"]'),
  };

  constructor() {
    this.header = new HeaderComponent();
    this.foter = new FooterComponent();
    this.products = new ProductsComponent();
    return this;
  }

  goToContinueShopping() {
    this.elements.continueShoppingButton().click();
    return this;
  }

  getProducts() {
    return this.products;
  }

  goTOCheckoutYourInformation() {
    this.elements.checkoutButton().click();
    return this;
  }

  checkThatProductInformationIsCorrect() {
    this.products.checkThatProductNameIsCorrect();
    this.products.checkThatProductDescriptionIsCorrect();
    this.products.checkThatProductPriceIsCorrect();
    return this;
  }

  checkThatCartIsVisible() {
    cy.url().should('include', URLS.CART);
    this.header.checkThatHeaderIsVisible();
    this.foter.checkThatFooterIsVisible();
    this.products.checkThatListProductsIsVisible();
    cy.shouldBeVisible(
      this.elements.yourCartTitle,
      this.elements.continueShoppingButton,
      this.elements.checkoutButton
    );
    return this;
  }
}

export default CartPage;
