import { NO_CONTENT_STATUS_CODE } from '../../config/constant';
import endpointsMapping from '../../config/endpoints-mapping';

describe('Verify that Delete User API should be working',()=>{

    it('Verify that delete user API is working fine', ()=>{
        const url = endpointsMapping.getDeleteUserEndPoint(2);
    
        cy.deleteApi(url).then((response) =>{
            expect(response.status).to.eq(NO_CONTENT_STATUS_CODE);
        })
        cy.logger('apitest','User is deleted Successfully!'); 
    })
})