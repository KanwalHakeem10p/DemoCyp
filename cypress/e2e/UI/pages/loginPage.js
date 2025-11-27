import BasePage from "./basePage";
import { APP_NAME, LOGIN_ERROR, SITE_NAME } from "../../config/constant";

class LoginPage extends BasePage{
    open(){
        super.open(Cypress.config('baseUrl'));
        super.siteUrl().should('include',SITE_NAME);
    }

    get userNameTxtBx(){return cy.get('#user-name');}
    get passwordTxtBx(){return cy.get('#password');}
    get loginBtn(){return cy.get('#login-button');}
    //get appLogo() {return cy.get('div.app_logo');}
    get loginError(){return cy.get("h3[data-test='error']");}

    enterUserName(userName) {
        this.userNameTxtBx.type(userName).then(()=>{
            this.writeApplicationLog('username: '+userName+' entered!');
        });
    }

    enterPassword(password){
        this.passwordTxtBx.type(password).then(()=>{
            this.writeApplicationLog('password: '+password+' entered!');
        });
    }

    clickLoginButton(){
        return this.loginBtn.click();
    }

    verifyLoginErrorMessage(){
        this.loginError.should('have.text',LOGIN_ERROR).then(()=>{
            this.writeApplicationLog('Login Not Successfull due to invalid user name');
        });
    }

}
export default new LoginPage();