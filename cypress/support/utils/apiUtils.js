
export function getRequest(endPoint){

    return cy.request({
        method: 'GET',
        url: endPoint
    })
}

export function postRequest(endPoint,body){
    return cy.request({
        method: 'POST',
        url: endPoint,
        body: body
    })
}

export function deleteRquest(endPoint){
    return cy.request({
        method: 'DELETE',
        url: endPoint
    })
}