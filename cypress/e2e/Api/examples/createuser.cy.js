import { CREATED_STATUS_CODE } from '../../config/constant';
import endpointsMapping from '../../config/endpoints-mapping';

describe('Verify that Create User API should be working',()=>{

    it('Verify that register user API is working fine', ()=>{
        const url = endpointsMapping.getCreateUserEndPoint();
        
        cy.readFixture('/examples/create-user-payload.json').then((fixtureData)=>{
            const payload = {
                name: fixtureData.name,
                job: fixtureData.job
            }
            console.log(JSON.stringify(payload))

            cy.postApi(url,payload).then((response)=> {
                expect(response.status).to.eq(CREATED_STATUS_CODE);
                
                expect(response.body.name).eq(fixtureData.name);
                expect(response.body.job).eq(fixtureData.job);
        
                cy.logger('apitest',"User Created Successfully!");
            }) 
        }) 
    })
});