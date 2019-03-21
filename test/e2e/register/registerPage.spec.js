var RegisterPage = require('./registerPage.page.js');

describe('Test register form', function() {

    it('Should be able to submit a successful register form', function() {
        RegisterPage.getUrl();

        RegisterPage.firstinput.sendKeys('Amanda');
        RegisterPage.secondinput.sendKeys('Panda');
        RegisterPage.thirdinput.sendKeys('AmandaPanda');
        RegisterPage.fourthinput.sendKeys('password');

        RegisterPage.registerbutton.click();

        expect(browser.getCurrentUrl()).toEqual('https://angular-7-registration-login-example.stackblitz.io/login');
        expect(element(by.css('alert [ng-reflect-ng-class]')).getText()).toBe('Registration successful');

    });

    it('Should not be able to submit a successful register form as username AmandaPanda is taken', function() {
        RegisterPage.getUrl();

        RegisterPage.firstinput.sendKeys('Amanda');
        RegisterPage.secondinput.sendKeys('Panda');
        RegisterPage.thirdinput.sendKeys('AmandaPanda');
        RegisterPage.fourthinput.sendKeys('password');

        RegisterPage.registerbutton.click();

        expect(element(by.css('alert [ng-reflect-ng-class]')).getText()).toBe('Username "AmandaPanda" is already taken');
        expect(browser.getCurrentUrl()).toEqual('https://angular-7-registration-login-example.stackblitz.io/register');

    });

   it('Should not be able to submit a successful register form as all fields are left blank', function() {
       RegisterPage.getUrl();

       element(by.css('.btn-primary')).click();

       expect(element(by.css('.form-group:nth-of-type(1) .invalid-feedback div')).getText()).toBe('First Name is required');
       expect(element(by.css('.form-group:nth-of-type(2) .invalid-feedback div')).getText()).toBe('Last Name is required');
       expect(element(by.css('.form-group:nth-of-type(3) .invalid-feedback div')).getText()).toBe('Username is required');
       expect(element(by.css('.form-group:nth-of-type(4) .invalid-feedback div')).getText()).toBe('Password is required');

       expect(browser.getCurrentUrl()).toEqual('https://angular-7-registration-login-example.stackblitz.io/register');

   });

    it('Should not be able to submit a successful register form as last name, username, and password are required', function() {
        RegisterPage.getUrl();

        RegisterPage.firstinput.sendKeys('Amanda');
        RegisterPage.registerbutton.click();

        expect(element(by.css('.form-group:nth-of-type(2) .invalid-feedback div')).getText()).toBe('Last Name is required');
        expect(element(by.css('.form-group:nth-of-type(3) .invalid-feedback div')).getText()).toBe('Username is required');
        expect(element(by.css('.form-group:nth-of-type(4) .invalid-feedback div')).getText()).toBe('Password is required');

        expect(browser.getCurrentUrl()).toEqual('https://angular-7-registration-login-example.stackblitz.io/register');

    });

    it('Should not be able to submit a successful register form as username, and password are required', function() {
        RegisterPage.getUrl();

        RegisterPage.firstinput.sendKeys('Amanda');
        RegisterPage.secondinput.sendKeys('Panda');

        RegisterPage.registerbutton.click();

        expect(element(by.css('.form-group:nth-of-type(3) .invalid-feedback div')).getText()).toBe('Username is required');
        expect(element(by.css('.form-group:nth-of-type(4) .invalid-feedback div')).getText()).toBe('Password is required');

        expect(browser.getCurrentUrl()).toEqual('https://angular-7-registration-login-example.stackblitz.io/register');

    });

    it('Should not be able to submit a successful register form as password is required', function() {
        RegisterPage.getUrl();

        RegisterPage.firstinput.sendKeys('Amanda');
        RegisterPage.secondinput.sendKeys('Panda');
        RegisterPage.thirdinput.sendKeys('AmandaPanda');

        RegisterPage.registerbutton.click();

        expect(element(by.css('.form-group:nth-of-type(4) .invalid-feedback div')).getText()).toBe('Password is required');

        expect(browser.getCurrentUrl()).toEqual('https://angular-7-registration-login-example.stackblitz.io/register');

    });

    it('Should not be able to submit a successful register form as passwords need to be 6 characters or longer', function() {
        RegisterPage.getUrl();

        RegisterPage.firstinput.sendKeys('Amanda');
        RegisterPage.secondinput.sendKeys('Panda');
        RegisterPage.thirdinput.sendKeys('AmandaPanda');
        RegisterPage.fourthinput.sendKeys('passw');

        RegisterPage.registerbutton.click();

        expect(element(by.css('form .form-group:nth-of-type(4) .invalid-feedback div')).getText()).toBe('Password must be at least 6 characters');
        expect(browser.getCurrentUrl()).toEqual('https://angular-7-registration-login-example.stackblitz.io/register');


    });


    it('Should direct us to the blog with login app ready to use when element is clicked', function() {
        RegisterPage.getUrl();

        element(by.css('.text-center p:nth-of-type(1) [target]')).click();

        expect(browser.getCurrentUrl()).toEqual('http://jasonwatmore.com/post/2018/10/29/angular-7-user-registration-and-login-example-tutorial');
    });

    it('Should direct us to the JasonWatmore.com website when we click the link', function() {
        RegisterPage.getUrl();

        element(by.css('.text-center p:nth-of-type(2) [target]')).click();

        expect(browser.getCurrentUrl()).toEqual('http://jasonwatmore.com/');
    });

    it('Should bring us to the login page when we press the cancel button', function() {
        RegisterPage.getUrl();

        element(by.css("[href=\'\\/login\']")).click();

        expect(browser.getCurrentUrl()).toEqual('https://angular-7-registration-login-example.stackblitz.io/login');


    });

});