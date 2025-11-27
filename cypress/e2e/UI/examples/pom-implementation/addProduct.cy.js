import productPage from "../../pages/productPage";
import inventoryPage from "../../pages/inventoryPage";
import loginPage from "../../pages/loginPage";

describe('Verify That User is able to Add Product In A Cart',{tags: ['@Login','@regression']},()=> {
    before(()=>{
        
    })

    beforeEach(()=>{
        
        cy.readFixture('/examples/userInfo.json').then((fixtureData) =>{
            cy.LoginToApplication(fixtureData.userInfo.username,fixtureData.userInfo.password); 
        });        
    })

    it('Open Project.',()=>{
        //cy.visit('/inventory.html')
        productPage.clickOnProduct();
        inventoryPage.verifyProductIsOpenSuccessfully();
        inventoryPage.clickAddToCartButton();
        inventoryPage.cartIconShouldShowItemCount(1)
    })

    it('Open Project 2',()=>{
        productPage.clickOnProduct();
        inventoryPage.verifyProductIsOpenSuccessfully();
        inventoryPage.clickAddToCartButton();
        inventoryPage.cartIconShouldShowItemCount(1)
    })
});