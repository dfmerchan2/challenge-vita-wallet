const { defineConfig } = require('cypress');

module.exports = defineConfig({
  retries: 2,
  e2e: {
    baseUrl: 'https://petstore.swagger.io/v2',
    env: {
      apiBaseUrlWeb: 'https://www.saucedemo.com/',
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
