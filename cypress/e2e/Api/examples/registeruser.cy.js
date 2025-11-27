import apiconfig from '../../config/apiconfig.json';
import { OK_STATUS_CODE } from '../../config/constant';
import endpointsMapping from '../../config/endpoints-mapping';

describe('Verify that Register User API should be working',()=>{

    it('Verify that register user API is working fine', ()=>{
        const url = endpointsMapping.getRegisterUserEndPoint();

        cy.readFixture('/examples/register-user-payload.json').then((fixtureData) =>{
            const payload = {
                email: fixtureData.email,
                password: fixtureData.password
            }

            console.log(JSON.stringify(payload))

            cy.postApi(url,payload).then((response)=> {
                expect(response.status).to.eq(OK_STATUS_CODE);
                const newid = response.body.id
                cy.log(newid);
                cy.logger('apitest',newid);
        
                const accessToken = response.body.token
                cy.log(accessToken);
                cy.logger('apitest',accessToken);
            }) 
        });
            
    })
})