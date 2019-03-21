// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts

const { SpecReporter } = require('jasmine-spec-reporter');

exports.config = {
  allScriptsTimeout: 11000,
  specs: [
    './test/e2e/register/registerPage.spec.js',
    './test/e2e/login/loginPage.spec.js',
    './test/e2e/loginlogout/loginLogout.spec.js',
    './test/e2e/deleteusers/deleteUsers.spec.js'

  ],
  capabilities: {
    'browserName': 'chrome',
  },
  directConnect: true,
  baseUrl: 'http://localhost:4200/',
  framework: 'jasmine',
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000,
    print: function () {
    }
  }
};

