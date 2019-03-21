var LoginPage = require('./loginPage.page.js');

describe('Test Login Form', function() {

    it('Should be able to submit a successful submission via Login form as credentials are correct', function () {
        LoginPage.getUrl(); // could also use beforeEach()

        LoginPage.firstinput.sendKeys('AmandaPanda');
        LoginPage.secondinput.sendKeys('password');
        browser.sleep(3000);
        LoginPage.loginbutton.click();
        browser.sleep(4000);

        expect(element(by.css('h1')).getText()).toBe('Hi Amanda!');
        // Only used once so no Page Object made
       element(by.css('h1')).getText().then(function (text) {
        // Only used once so no Page Object made
            console.log(text);
        });

        element(by.css('.navbar-nav .nav-link:nth-of-type(2)')).click();
        // Only used once so no Page Object made

    });

    it('Should not be able to submit a successful submission via Login form as credentials are incorrect', function () {
        LoginPage.getUrl();

        LoginPage.firstinput.sendKeys('Chris');
        LoginPage.secondinput.sendKeys('Chris');
        browser.sleep(3000);
        LoginPage.loginbutton.click();
        browser.sleep(4000);

        expect(element(by.css('alert [ng-reflect-ng-class]')).getText()).toBe('Username or password is incorrect');

        element(by.css('alert [ng-reflect-ng-class]')).getText().then(function (text) {

            console.log(text);
        });


    });

    it('Should not be able to submit a successful submission via Login form as password is required', function () {
        LoginPage.getUrl();

        LoginPage.firstinput.sendKeys('Chris');
        browser.sleep(3000);
        LoginPage.loginbutton.click();
        browser.sleep(3000);
        expect(element(by.css('.invalid-feedback div')).getText()).toBe('Password is required');

        element(by.css('.invalid-feedback div')).getText().then(function (text) {

            console.log(text);

        });


    });

    it('Should not be able to submit a successful submission via Login form as username is required', function () {
        LoginPage.getUrl();

        LoginPage.secondinput.sendKeys('password');
        browser.sleep(3000);
        LoginPage.loginbutton.click();
        browser.sleep(4000);

        expect(element(by.css('.invalid-feedback div')).getText()).toBe('Username is required');

        element(by.css('.invalid-feedback div')).getText().then(function (text) {

            console.log(text);

        })

    });

    it('Should not be able to submit a successful submission via Login form as username and password are required', function () {
        LoginPage.getUrl();

        LoginPage.loginbutton.click();
        browser.sleep(4000);

        expect(element(by.css('.invalid-feedback div')).isDisplayed()).toBe(true);

    });

    it('Should direct us to the register page when we click the register button', function() {
        LoginPage.getUrl();

        element(by.css('.btn-link')).click();

        expect(browser.getCurrentUrl()).toEqual('https://angular-7-registration-login-example.stackblitz.io/register');
    });

    it('Should direct us to the blog with login app ready to use when element is clicked', function() {
        LoginPage.getUrl();

        element(by.css('.text-center p:nth-of-type(1) [target]')).click();

        expect(browser.getCurrentUrl()).toEqual('http://jasonwatmore.com/post/2018/10/29/angular-7-user-registration-and-login-example-tutorial');
    });

    it('Should direct us to the JasonWatmore.com website when we click the link', function() {
        LoginPage.getUrl();

       element(by.css('.text-center p:nth-of-type(2) [target]')).click();

       expect(browser.getCurrentUrl()).toEqual('http://jasonwatmore.com/');
    });

});
