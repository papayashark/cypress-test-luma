const { defineConfig } = require("cypress");
const cypressGrep = require("@cypress/grep");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      cypressGrep(config); // plugin only
      require("cypress-mochawesome-reporter/plugin")(on);
      return config;
    },
    supportFile: "cypress/support/e2e.js", // or index.js if you're using older versions
  },

  env: {
    appUrl: 'https://magento.softwaretestingboard.com/customer/account/login',
    grepFilterSpecs: true,
  },

  retries: 1,
  viewportHeight: 900,
  viewportWidth: 1440,
  video: true,
  videoCompression: true,

  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    reportDir: "cypress/reports",
    charts: true,
    reportPageTitle: 'luma e-commerce report',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
    overwrite: false,
    html: true,
  }
});
