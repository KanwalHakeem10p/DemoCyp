class BasePage{
    constructor(){
        
    }

    open(path){
        return cy.visit(path)
    }

    siteUrl(){
        return cy.url();
    }

    writeApplicationLog(message){
        return cy.logger('application',message);
    }
}
export default BasePage;