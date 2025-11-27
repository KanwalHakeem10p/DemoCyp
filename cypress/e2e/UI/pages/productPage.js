import BasePage from "./basePage";
import { APP_NAME, PRODUCTS_PAGE, SITE_NAME , PRODUCT_NAME} from "../../config/constant";

class ProductPage extends BasePage{
    open(){
        super.open(Cypress.config('baseUrl'));
        super.siteUrl().should('include',SITE_NAME);
    }

    get appLogo() {return cy.get('div.app_logo');}
    get productTitle() {return cy.get('span.title');}
    clickOnProduct(){
         cy.xpath("//div[text()='"+PRODUCT_NAME+"']/..").click();
    }

    
    // addToCartButton(productName){
    //     return cy.xpath("//div[text()='"+productName+"']/../../../div[@class='pricebar']/button");
    // }

    verifyLoginIsSuccessfull(){
        this.appLogo.should('have.text',APP_NAME);
        this.productTitle.should('have.text', PRODUCTS_PAGE).then(()=>{
            this.writeApplicationLog('Login Successfull!');
        })
    }

    
    verifyProductIsOpenSuccessfully(productName){
        this.invertoryTitle.should('have.text',PRODUCT_NAME);
    }


    

}
export default new ProductPage();