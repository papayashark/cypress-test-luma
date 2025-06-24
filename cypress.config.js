import { defineConfig } from 'cypress';
import cypressGrep from '@cypress/grep';
import mochawesome from 'cypress-mochawesome-reporter/plugin.js';

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      cypressGrep(config); // Enables @cypress/grep
      mochawesome(on);     // Enables mochawesome reporter
      return config;
    },
    supportFile: 'cypress/support/e2e.js', // Optional if using default
  },
  env: {
    appUrl: 'https://magento.softwaretestingboard.com/customer/account/login',
    grepFilterSpecs: true
  },
  retries: 1,
  viewportHeight: 900,
  viewportWidth: 1440,
  video: true,
  videoCompression: true,
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    reportDir: 'cypress/reports',
    charts: true,
    reportPageTitle: 'luma e-commerce report',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
    overwrite: false,
    html: true
  }
});
