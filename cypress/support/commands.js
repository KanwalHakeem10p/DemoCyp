// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
import neatCSV from 'neat-csv';
import loginPage from '../e2e/UI/pages/loginPage';
import productPage from '../e2e/UI/pages/productPage';
import { CustomLog } from './utils/logging';
import { deleteRquest, getRequest, postRequest } from './utils/apiUtils';
import 'cypress-iframe';
require('cypress-xpath');

Cypress.Commands.add("readFixture", (fixtureFileName) => {
    if(fixtureFileName.includes('json')){
        return cy.fixture(fixtureFileName)
    }
    else{        
        return cy.fixture(fixtureFileName).then(neatCSV);
    } 
});

Cypress.Commands.add('addLogs', (message,logType) => {
    return CustomLog(message,logType);
});

Cypress.Commands.add('logger', (filename, message) => {
    // Define the log file path based on the filename parameter
    const logFilePath = `cypress/logs/${filename}.log`;
  
    cy.log(message);
    // Create or append to the log file
    cy.writeFile(logFilePath, `[${new Date().toISOString()}] ${message}\n`, { flag: 'a+' });
  });

Cypress.Commands.add('getApi',(endPoint)=>{
    return getRequest(endPoint);
  });

Cypress.Commands.add('postApi',(endPoint,body)=> {
    return postRequest(endPoint,body);
});

Cypress.Commands.add('deleteApi',(endPoint)=>{
    return deleteRquest(endPoint);
});

Cypress.Commands.add('LoginToApplication',(username, password )=>{
    //cy.session([username, password],()=>{
        loginPage.open();
        loginPage.enterUserName(username);
        loginPage.enterPassword(password);
        loginPage.clickLoginButton();
        productPage.verifyLoginIsSuccessfull();
       
    //});
})

Cypress.Commands.add('CreateLoginSession',(username, password)=>{
    cy.session([username,password], ()=>{
        cy.visit('https://courses.ultimateqa.com/users/sign_in');
        cy.get("input[type='email']").type(username);
        cy.get("input[type='password']").type(password);
        cy.get("button[type='submit']").click();
        cy.url().should('contain', '/collections');
    })
})

// cypress/support/commands.js
Cypress.Commands.add('saveSession', () => {
    cy.window().then((win) => {
        const sessionData = {
            sslocalStorage: win.localStorage,
            sessionStorage: win.sessionStorage,
            //cookies: cy.getCookies(),
        };
        cy.writeFile('cypress/fixtures/sessionData.json', sessionData);
    });
});

// cypress/support/commands.js
Cypress.Commands.add('restoreSession', () => {
    cy.readFile('cypress/fixtures/sessionData.json').then((sessionData) => {
        // sessionData.cookies.forEach((cookie) => {
        //     cy.setCookie(cookie.name, cookie.value);
        // });
        Object.keys(sessionData.sslocalStorage).forEach((key) => {
            cy.window().then((win) => {
                win.localStorage.setItem(key, sessionData.sslocalStorage[key]);
            });
        });
        Object.keys(sessionData.sessionStorage).forEach((key) => {
            cy.window().then((win) => {
                win.sessionStorage.setItem(key, sessionData.sessionStorage[key]);
            });
        });
    });
});
