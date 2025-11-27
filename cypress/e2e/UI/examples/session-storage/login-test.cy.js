import productPage from "../../pages/productPage";
import inventoryPage from "../../pages/inventoryPage";

describe('Verify That User is able to Add Product In A Cart',{tags: ['@Login','@regression']},()=> {
    before(()=>{
        
    })

    beforeEach(()=>{
        cy.CreateLoginSession('mubbashir.shakil@10pearls.com','inte1GREAT');
    })

    it.skip('Open Project.',()=>{
        cy.get("a[href='/enrollments']").click();
        cy.get('my-courses-heading').should('have.text',"My courses");
    
    })
});