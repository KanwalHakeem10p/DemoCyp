//  Install neat-csv dependcy to read test data from csv file.

describe('Reading data from a CSV file', () => {
    let data;
     //use before annotation to read csv file from which data needs to be extracted and save it as in variable.
    before(()=>{
        cy.readFixture('/examples/userInfo.csv')
        .then(response => 
            {
                data=response
                console.data;
            })
            cy.logger('application','Test Case reading CSV file started')
            cy.logger('application','-----------------------------------')
    })

    it('Should Read data from CSV file',()=>{
        
        //const url = data[0].baseUrl;
        const sitename = data[0].site_name;
        const username = data[0].username;
        const password = data[0].password;
        const appname = data[0].app_name;

        cy.visit(Cypress.config('baseUrl'));
        cy.url().should('include',sitename);

        cy.get('#user-name').type(username);
        cy.addLogs('User Name Entered','Info');
        cy.logger('application','User name: '+username+' Entered');

        cy.get('#password').type(password);
        cy.addLogs('Password Entered','Info');
        cy.logger('application','Password: '+password+' Entered');

        cy.get('#login-button').click().then(()=>{
            cy.get('div.app_logo').should('have.text',appname);
            cy.addLogs('Login Completed','Success');

            cy.logger('application','Login Completed');
        })
    });

    after(()=>{
        cy.logger('application',"Test Case Execution Completed.")
        cy.logger('application',"------------------------------")
    })
  });
