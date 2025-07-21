import HeaderComponent from './components/header-component';
import FooterComponent from './components/footer-component';
import { KEY_CONTEXT, URLS } from '../utils/constants';
import ProductsComponent from './components/products-component';
import { testContext } from '../utils/test-context';
import { calculateTax, calculateTotal } from '../utils/math';
import CheckoutCompletePage from './checkout-complete-page';

class CheckoutOverviewPage {
  elements = {
    overviewTitle: () => cy.get('[data-test="title"]'),
    paymentInfoLabel: () => cy.get('[data-test="payment-info-label"]'),
    paymentInfoValue: () => cy.get('[data-test="payment-info-value"]'),
    shippingInfoLabel: () => cy.get('[data-test="shipping-info-label"]'),
    shippingInfoValue: () => cy.get('[data-test="shipping-info-value"]'),
    totalInfoLabel: () => cy.get('[data-test="total-info-label"]'),
    itemTotalValue: () => cy.get('[data-test="subtotal-label"]'),
    taxLabel: () => cy.get('[data-test="tax-label"]'),
    totalLabel: () => cy.get('[data-test="total-label"]'),
    finishButton: () => cy.get('[data-test="finish"]'),
    cancelButton: () => cy.get('[data-test="cancel"]'),
  };

  constructor() {
    this.header = new HeaderComponent();
    this.foter = new FooterComponent();
    this.products = new ProductsComponent();
    return this;
  }

  getTotalItem() {
    return cy.then(() => {
      const products = testContext.get(KEY_CONTEXT.PRODUCTS);
      return products.reduce((sum, product) => {
        const price = parseFloat(product.price.replace('$', ''));
        return sum + price;
      }, 0);
    });
  }

  checkThatItemTotalIsCorrect() {
    this.getTotalItem().then((itemTotal) => {
      this.elements.itemTotalValue().should('contain.text', itemTotal);
    });
    return this;
  }

  checkThatTaxIsCorrect(taxRate) {
    this.getTotalItem().then((itemTotal) => {
      const tax = calculateTax(itemTotal, taxRate);
      this.elements.taxLabel().should('contain.text', tax);
    });
    return this;
  }

  checkThatTotalIsCorrect(taxRate) {
    this.getTotalItem().then((itemTotal) => {
      const tax = calculateTax(itemTotal, taxRate);
      const totalValue = calculateTotal(itemTotal, tax);
      this.elements.totalLabel().should('contain.text', totalValue);
    });
    return this;
  }

  finishPurchase() {
    this.elements.finishButton().click();
    return new CheckoutCompletePage();
  }

  checkThatThePaymentInformationIsCorrect(taxRate) {
    this.checkThatItemTotalIsCorrect();
    this.checkThatTaxIsCorrect(taxRate);
    this.checkThatTotalIsCorrect(taxRate);
    return this;
  }

  checkThatProductInformationIsCorrect() {
    this.products.checkThatProductNameIsCorrect();
    this.products.checkThatProductDescriptionIsCorrect();
    this.products.checkThatProductPriceIsCorrect();
    return this;
  }

  checkThatCheckoutOverviewPageIsVisible() {
    cy.url().should('include', URLS.CHECKOUT_STEP_TWO);
    this.header.checkThatHeaderIsVisible();
    this.foter.checkThatFooterIsVisible();
    this.products.checkThatListProductsIsVisible();
    cy.shouldBeVisible(
      this.elements.overviewTitle,
      this.elements.paymentInfoLabel,
      this.elements.paymentInfoValue,
      this.elements.shippingInfoLabel,
      this.elements.shippingInfoValue,
      this.elements.totalInfoLabel,
      this.elements.itemTotalValue,
      this.elements.taxLabel,
      this.elements.totalLabel,
      this.elements.finishButton,
      this.elements.cancelButton
    );
    return this;
  }
}

export default CheckoutOverviewPage;
