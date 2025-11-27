// Import the WebSocket support from cypress-real-events
import 'cypress-real-events/support';

describe.skip('WebSocket API Testing', () => {
    let ws;

    before(() => {
        // Initialize the WebSocket connection before running the tests
        ws = new WebSocket('wss://ws.binaryws.com');
        const receivedMessages = [];
        // Listen for WebSocket messages
        ws.addEventListener('message', (event) => {
            cy.log(event.data)
            receivedMessages.push(JSON.parse(event.data))
        });
        cy.wrap(receivedMessages).as('websocketMessages');
    });

    after(() => {
        // Close the WebSocket connection after the tests are done
        ws.close();
    });

    it('should send and receive WebSocket messages', () => {
        cy.visit('https://api.deriv.com/api-explorer#states_list');

        // Interact with your application to trigger WebSocket actions
        cy.xpath('//button[text()="Send Request"]').click(() => {
            // Send a message through the WebSocket
            ws.send({
                "states_list": "id"
            });
        });

        // Perform assertions on WebSocket messages or behavior
        cy.get('@websocketMessages').should('have.length', 1);
        cy.get('@websocketMessages').first().should('include', {
            // Assert on the expected properties of the WebSocket message
            key: 'expected-key',
            value: 'expected-value',
        });
    });
});
