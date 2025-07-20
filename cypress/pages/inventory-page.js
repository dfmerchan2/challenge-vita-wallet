import HeaderComponent from './components/header-component';
import FooterComponent from './components/footer-component';
import {URLS} from "../utils/constants";

class InventoryPage {
    elements = {
        productsTitle: () => cy.get('[data-test="title"]'),
        filterButton: () => cy.get('[data-test="product-sort-container"]'),
        productsImage: () => cy.get('img.inventory_item_img'),
        productsNameLabel: () => cy.get('[data-test="inventory-item-name"]'),
        productsPriceLabel: () => cy.get('[data-test="inventory-item-price"]'),
        addToCartButtons: () => cy.get('[class*="btn_primary"]'),
    }

    constructor() {
        this.header = new HeaderComponent();
        this.foter = new FooterComponent();
        return this;
    }

    getHeader() {
        return this.header;
    }

    selectTheItem(product) {
        this.elements.productsNameLabel()
            .contains(product)
            .should('be.visible')
            .click()
        return this;
    }

    chackThatInventoryIsVisible() {
        cy.url().should('include', URLS.INVENTORY);
        this.header.checkThatHeaderIsVisible();
        this.foter.checkThatFooterIsVisible();
        cy.shouldBeVisible(
            this.elements.productsTitle,
            this.elements.filterButton,
            this.elements.productsImage,
            this.elements.productsNameLabel,
            this.elements.productsPriceLabel,
            this.elements.addToCartButtons);
        return this;
    }
}

export default InventoryPage