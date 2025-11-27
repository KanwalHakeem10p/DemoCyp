import apiconfig from '../config/apiconfig.json'
class endpointsMapping{

    constructor() {
        // Initialize apiBaseUrl in the constructor
        this.apiBaseUrl = Cypress.config('apiBaseUrl');
      }

    getCreateUserEndPoint(){
        const endPoint =  this.apiBaseUrl + `${apiconfig.endpoints.createUser}`;
        cy.logger('apitest','Create User Url is: \n'+endPoint);

        return endPoint;
    }

    getDeleteUserEndPoint(userId){
        const endPoint =  this.apiBaseUrl + `${apiconfig.endpoints.deleteUser}`+userId;
        cy.logger('apitest','Delete User Url is: \n'+endPoint);

        return endPoint;
    }
    
    getUserListingEndPoint(){
        const endPoint =  this.apiBaseUrl + `${apiconfig.endpoints.listUsers}`;
        cy.logger('apitest','List Users Url is: \n'+endPoint);

        return endPoint;
    }

    getUserEndPoint(userId){
        const endPoint =  this.apiBaseUrl + `${apiconfig.endpoints.singleUser}`+userId;
        cy.logger('apitest','Single Url is: \n'+endPoint);

        return endPoint;
    }

    getRegisterUserEndPoint(){
        const endPoint =  this.apiBaseUrl + `${apiconfig.endpoints.registerUser}`;
        cy.logger('apitest','List Users Url is: \n'+endPoint);

        return endPoint;
    }

}
export default new endpointsMapping();