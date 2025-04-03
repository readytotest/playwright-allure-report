const { defineConfig } = require("cypress");
const getCompareSnapshotsPlugin = require('cypress-image-diff-js/plugin');

module.exports = defineConfig({
  projectId: "dm22wp", //for Cypress Cloud
  reporter: 'cypress-mochawesome-reporter',
  video: true,
  numTestsKeptInMemory: 25,
  experimentalMemoryManagement: true,
  screenshotOnRunFailure: true,
  trashAssetsBeforeRuns: true,
  watchForFileChanges: false,
  viewportHeight: 1080,
  viewportWidth: 1920,
  chromeWebSecurity: false, //need this to test the sauce demo site with the GUI, otherwise the page won't load completely
  
  env: {
    sauceDemoUrl: 'https://www.saucedemo.com',
    orangeDemoUrl: 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login',
    lambdaTestDemoUrl: 'https://ecommerce-playground.lambdatest.io/'
  },

  e2e: {
    specPattern: '**/*.cy.js',
    experimentalRunAllSpecs: true,
    baseUrl: 'https://readytotest.github.io',
    setupNodeEvents(cypressOn, config) { //note: Changed from 'on' to 'cypressOn'
      const on = require('cypress-on-fix')(cypressOn); //Fixes multiple Cypress plugins subscribing to "on" events. Need this if you use multiple plugins or the Mochawesome stops generating HTML! (not needed if only using Mochawesome by itself).
      require('cypress-mochawesome-reporter/plugin')(on);
      return getCompareSnapshotsPlugin(on, config);
    },
    
  },

});