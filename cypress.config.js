const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://demo.realworld.io/#',
    fixturesFolder: 'cypress/fixtures',
    supportFile: 'cypress/support/e2e.js'
  }
});
