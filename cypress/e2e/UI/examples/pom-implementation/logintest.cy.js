import loginPage from "../../pages/loginPage";
import productPage from "../../pages/productPage";

describe('Verify That User is able to login to Sauce Demo App',{tags: ['@Login','@regression']},()=> {

    before(()=>{
        

    })

    beforeEach(()=>{
        loginPage.open();
        cy.readFixture('/examples/userInfo.json').as('users');
    })

    it('Should Login Successfully with valid credentials', {tags: '@smoke'},function(){

        loginPage.enterUserName(this.users.userInfo.username);
        loginPage.enterPassword(this.users.userInfo.password);
        
        loginPage.clickLoginButton();
        productPage.verifyLoginIsSuccessfull();
        
    })

    it('Should not login by providing Invalid credentials', {tags: '@smoke'},function(){
    
        loginPage.enterUserName(this.users.userInfo.invalidUserName);
        loginPage.enterPassword(this.users.userInfo.invalidPassword);

        loginPage.clickLoginButton();
        loginPage.verifyLoginErrorMessage();
    })
})