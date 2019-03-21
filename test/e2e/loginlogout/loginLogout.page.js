var LoginLogoutPage = function() {

    this.firstinput = element(by.css("[formcontrolname='username']"));
    this.secondinput = element(by.css("[formcontrolname='password']"));
    this.loginbutton = element(by.css('.btn-primary'));

    this.getUrl = function () {
        browser.get('https://angular-7-registration-login-example.stackblitz.io/login');
    }

};

module.exports = new LoginLogoutPage;