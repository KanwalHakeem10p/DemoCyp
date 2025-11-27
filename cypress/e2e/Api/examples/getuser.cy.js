import { OK_STATUS_CODE } from '../../config/constant';
import endpointsMapping from '../../config/endpoints-mapping';

describe('Verify that Get User API should be working',()=>{
    it('Should verify that get users returned 200 status code with a list of all users', ()=>{
    
        const url = endpointsMapping.getUserListingEndPoint();
    
        cy.getApi(url).then((response)=> {
            expect(response.status).to.eq(OK_STATUS_CODE);
            cy.logger('apitest',response.body)

            cy.readFixture('/examples/api-testdata.json').then((fixtureData) =>{
                expect(response.body.page).to.eq(fixtureData.page_id);
                expect(response.body.data[0].first_name).eq(fixtureData.page_first_name);
                expect(response.body.data.length).eq(response.body.per_page);
            })
        })
    })

    it('Should verify that get user returned 200 Status code with detail of Single user',()=>{
        const endPoint = endpointsMapping.getUserEndPoint(2);

        cy.getApi(endPoint).then((response)=>{
            expect(response.status).to.eq(OK_STATUS_CODE);
            cy.readFixture('/examples/api-testdata.json').then((fixtureData) => {
                expect(response.body.data.id).eq(fixtureData.user_id);
                expect(response.body.data.email).eq(fixtureData.user_email);
                expect(response.body.data.first_name).eq(fixtureData.user_first_name);
                expect(response.body.data.last_name).eq(fixtureData.user_last_name);
            })
        })
    })
})