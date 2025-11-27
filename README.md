# Cypress Project

Welcome to the Cypress project repository! This repository contains end-to-end tests for our application using Cypress.

## Getting Started

Follow the steps below to set up and run the Cypress tests on your local machine.

### Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (LTS version recommended)
- [Git](https://git-scm.com/)

### Clone the Repository

`git clone [https://git.10pearls.com/test-engineering/cypress-framework.git]`
`cd cypress-project`


### Install Dependecies

`npm install`


### Configure Cypress


Cypress may require some configuration, such as setting the base URL of your application.
You can typically do this in the cypress.json file. Make sure to update any necessary configuration options to match your environment.


### Running Tests

You can run the Cypress tests using the following command:

`npm run cypress:open`


### To run the tests in headless mode (useful for CI/CD), you can use:

`npm run cypress:run`

### To run the tests in chrome headless mode, you can use:

`npm run test:e2e:chrome`

### To run the tests in edge headless mode, you can use:

`npm run test:e2e:edge`

### To run the API tests only, you can use:

`npm run test:api`

### To run the UI tests only, you can use:

`npm run test:chrome`
`npm run test:edge`

### Writing Tests

Tests are located in the cypress/e2e.
You can create new test files or modify existing ones to add your tests. Refer to the Cypress documentation for guidance on writing Cypress tests.

### API Tests

##### Spec File Path
	/cypress/e2e/Api/examples
##### Path to API fixtures [Test Data]
    /cypress/fixtures/examples/api-testdata.json
##### Api Methods [GET, POST, UPDATE, PUT].
	/cypress/support/utils/apiUtils.js
##### Api Configuration File [endpoint]
	/cypress/config/apiconfig.json

### Docker Setup.

To execute tests on docker containers install docker desktop on client's machine.
after successfull install make sure that docker engine is running by executing following commands.

 `docker -v`
 `docker-compose -v`

### Execute tests on docker.

on terminal navigate to root folder and execute the following command on terminal.

`docker-compose up -d`
