import BasePage from "./basePage";
import { PRODUCT_NAME } from "../../config/constant";

class InventoryPage extends BasePage{

    get invertoryTitle(){return cy.xpath("//div[@data-test='inventory-item-name']");}
    get addToCartButton(){return cy.xpath("//button[@data-test='add-to-cart']");}
    get cartIcon(){return cy.xpath("//span[@data-test='shopping-cart-badge']");}

    verifyProductIsOpenSuccessfully(productName){
        this.invertoryTitle.should('have.text',PRODUCT_NAME);
    }

    clickAddToCartButton(){
        this.addToCartButton.click();
    }

    cartIconShouldShowItemCount(count){
        this.cartIcon.should('have.text',count);
    }

}
export default new InventoryPage();