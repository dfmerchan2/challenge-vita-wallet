import {testContext} from "../../utils/test-context";
import {KEY_CONTEXT, PRODUCT_DATA} from "../../utils/constants";

class ListProductsComponent {
    elements = {
        qualityLabel: () => cy.get('[data-test="cart-quantity-label"]'),
        descriptionLabel: () => cy.get('[data-test="cart-desc-label"]'),
        listProductsQuantityLabel: () => cy.get('[data-test="item-quantity"]'),
        listProductsNameLabel: () => cy.get('[data-test="inventory-item-name"]'),
        listProductsDescriptionLabel: () => cy.get('[data-test="inventory-item-desc"]'),
        listProductsPriceLabel: () => cy.get('[data-test="inventory-item-price"]'),
        removeProductButton: () => cy.get('[data-test*="remove"]'),
    }

    verifyProductData(field, elementFn) {
        cy.then(() => {
            testContext.get(KEY_CONTEXT.PRODUCTS).forEach((item) => {
                elementFn()
                    .should('be.visible')
                    .and('contain.text', item[field]);
            });
        });
        return this;
    }

    chackThatProductNameIsCorrect() {
        this.verifyProductData(PRODUCT_DATA.NAME, this.elements.listProductsNameLabel);
        return this;
    }

    chackThatProductDescriptionIsCorrect() {
        this.verifyProductData(PRODUCT_DATA.DESCRIPTION, this.elements.listProductsDescriptionLabel);
        return this;
    }

    chackThatProductPriceIsCorrect() {
        this.verifyProductData(PRODUCT_DATA.PRICE, this.elements.listProductsPriceLabel);
        return this;
    }

    chackThatListProductsIsVisible() {
        cy.shouldBeVisible(
            this.elements.qualityLabel,
            this.elements.descriptionLabel,
            this.elements.listProductsQuantityLabel,
            this.elements.listProductsNameLabel,
            this.elements.listProductsDescriptionLabel,
            this.elements.listProductsPriceLabel
        );
    }
}

export default ListProductsComponent;
