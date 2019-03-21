var RegisterPage = function() {
    this.firstinput = element(by.css("[formcontrolname='firstName']"));
    this.secondinput = element(by.css("[formcontrolname='lastName']"));
    this.thirdinput = element(by.css("[formcontrolname='username']"));
    this.fourthinput = element(by.css("[formcontrolname='password']"));
    this.registerbutton = element(by.css('.btn-primary'));

    this.getUrl = function () {
        browser.get('https://angular-7-registration-login-example.stackblitz.io/register');
    }

};

module.exports = new RegisterPage;