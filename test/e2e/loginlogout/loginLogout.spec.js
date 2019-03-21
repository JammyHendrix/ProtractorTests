var LoginLogoutPage = require('./loginLogout.page.js');

describe('Test that you are able to login and logout of app', function() {
    it('Should login and then logout', function() {
        LoginLogoutPage.getUrl();

        LoginLogoutPage.firstinput.sendKeys('AmandaPanda');
        LoginLogoutPage.secondinput.sendKeys('password');
        browser.sleep(3000);
        LoginLogoutPage.loginbutton.click();
        browser.sleep(3000);

        expect(element(by.css('h1')).getText()).toBe('Hi Amanda!');

        element(by.css('.navbar-nav .nav-link:nth-of-type(2)')).click();

        expect(browser.get('https://angular-7-registration-login-example.stackblitz.io/login'));


    });
});
