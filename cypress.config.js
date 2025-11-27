const { defineConfig } = require("cypress");
const { beforeRunHook, afterRunHook } = require('cypress-mochawesome-reporter/lib');
require('dotenv').config({path: '.env'})

module.exports = defineConfig({
  trashAssetsBeforeRuns : true,
  chromeWebSecurity: false,
  viewportWidth: 1000,
  viewportHeight: 600,
  waitForAnimations: true,
  animationDistanceThreshold: 20,
  defaultCommandTimeout: 6000,
  execTimeout: 600000,
  pageLoadTimeout : 60000,
  requestTimeout: 15000,
  responseTimeout : 15000,

  //Videos
  video             : false,            //Whether Cypress will capture a video of the tests run with cypress run.
  videosFolder      : 'cypress/videos',
  videoCompression  : false,            //The quality setting for the video compression, in Constant Rate Factor (CRF). 

  //Folders/ Files
  downloadsFolder   : 'cypress/downloads',
  fixturesFolder    : 'cypress/fixtures',

  //Screenshots
  screenshotsFolder       : 'cypress/screenshots',
  screenshotOnRunFailure  : true,  //Whether Cypress will take a screenshot when a test fails during cypress run.

  //The number of times to retry a failing test. Can be configured to apply to cypress run or cypress open separately.
  //If you want to configure retry attempts on a specific test or suite, you can set this by using the test's/suite's configuration.
  retries : {
    // Configure retry attempts for `cypress run`
    // Default is 0
    runMode: 1,
    // Configure retry attempts for `cypress open`
    // Default is 0
    openMode : 0
  },
  reporter: 'cypress-multi-reporters',
  reporterOptions: {
    configFile: 'reporter-config.json'
  },
  

  e2e: {

    specPattern	: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',

    supportFile : 'cypress/support/e2e.{js,jsx,ts,tsx}',
    
    

    setupNodeEvents(on, config) {

      on('before:run', async (details) => {
        console.log('override before:run');
        await beforeRunHook(details);

      });

      //Load the testing configuration and environment variables from separate JSON files.
      //we put the baseUrl and envionment specific config settings in settings/env.settings.json
      const environmentName = config.env.environmentName || 'dev';
      const environmentFilename = `./environments-config/cypress.${environmentName}.json`; //
      console.log('loading %s', environmentFilename);
      const settings = require(environmentFilename);

      //overwriting the baseUrl from settings file to config
      if (settings.baseUrl) {
        config.baseUrl = settings.baseUrl
      }

      //overwriting the baseUrl from settings file to config
      if (settings.apiBaseUrl) {
        config.apiBaseUrl = settings.apiBaseUrl
      }

      // Megring the configuration settings. 
      // If there are properties with the same name in both objects, the ones from settings.env will overwrite those in config.env.
      // If there are unique properties in either object, they will also be included in the merged config.env.
      if (settings.env) {
        config.env = {
          ...config.env,
          ...settings.env,
        }
      }

      console.log('loaded settings for environment %s', environmentName);

      //we save the projectId as env variable in cypress.env.json that is loaded automatically by cypress
      if(config.env.projectId) {
        config.projectId = config.env.projectId;
      }

      return config;
    },
  },
});
