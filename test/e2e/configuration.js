exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['registerPage.spec.js',
            'loginPage.spec.js',
            'loginLogout.spec.js',
            'deleteUsers.spec.js'],

    onPrepare :function() {
      // initialize reports
      // change browser window size or viewport
      browser.driver.manage().window().maximize();
    }



};
