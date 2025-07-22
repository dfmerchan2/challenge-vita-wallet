const { defineConfig } = require('cypress');
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = defineConfig({
  retries: 1,
  e2e: {
    baseUrl: 'https://petstore.swagger.io/v2',
    env: {
      apiBaseUrlWeb: 'https://www.saucedemo.com/',
    },
    setupNodeEvents(on, config) {
      allureWriter(on, config);
      return config;
    },
  },
});
