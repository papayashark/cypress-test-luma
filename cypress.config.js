const { defineConfig } = require("cypress");

module.exports = defineConfig({

  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-grep/src/plugin')(config);
      require('cypress-mochawesome-reporter/plugin')(on);
      return config;
     
      // implement node event listeners here
    },
  },

  env:{
    appUrl:'https://magento.softwaretestingboard.com/customer/account/login',
    grepFilterSpecs: true
  },

  retries: 1,
  viewportHeight: 900,
  viewportWidth: 1440,
  video: true,
  videoCompression: true,

  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    reportDir:"cypress/reports",
    charts: true,
    reportPageTitle: 'luma e-commerce report',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
    overwrite:false,
    html:true
  }
});
