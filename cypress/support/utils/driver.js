export class DriverFactory{
    
     navigateToUrl(url){
        cy.visit(url);
    }
}