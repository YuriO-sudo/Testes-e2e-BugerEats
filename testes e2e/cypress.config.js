const cucumber = require('cypress-cucumber-preprocessor').default
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
      setupNodeEvents(on, config) {
          on('file:preprocessor', cucumber())
      },
      baseUrl: 'https://buger-eats.vercel.app',
      retries: 3,
      video:false,
      chromeWebSecurity: false,
      screenshotOnRunFailure: true,
      failOnStatusCode: false,
      specPattern: "cypress/e2e/**/*.{feature,features,cy.{js,jsx,ts,tsx}}",
  },
})