import { APP_NAME,SITE_NAME } from "../../../config/constant";

describe('Reading data from JSON file',()=>{

    before(()=>{
        cy.logger('application','Test Case reading JSON file started')
        cy.logger('application','-----------------------------------')
    })

    it('Should Read data from JSON using fixtue command',()=>{
        cy.readFixture('/examples/userInfo.json').then((fixtureData) => {

            const username = fixtureData.userInfo.username;
            const password = fixtureData.userInfo.password;
    
            cy.visit(Cypress.config('baseUrl'))
            cy.url().should('include',SITE_NAME);

            cy.get('#user-name').type(username);
            cy.addLogs('User Name '+ username +' Entered','Info');
            cy.logger('application', 'user name '+ username + ' Entered');


            cy.get('#password').type(password);
            
            cy.addLogs('Password Entered','Info');
            cy.logger('application', 'Password '+ password + ' Entered');

            cy.get('#login-button').click().then(()=>{
                cy.get('div.app_logo').should('have.text',APP_NAME);
                cy.addLogs('Login Completed','Success');
                cy.logger('application', 'Login Completed');
            })
            
        })
    })

    after(()=>{
        cy.logger('application',"Test Case Execution Completed.")
        cy.logger('application',"------------------------------")
    })
})