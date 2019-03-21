var DeleteUsersPage = function() {

    this.firstinput = element(by.css("[formcontrolname='username']"));
    this.secondinput = element(by.css("[formcontrolname='password']"));
    this.deletebutton = element(by.css('.btn-primary'));

    this.getUrl = function () {
        browser.get('https://angular-7-registration-login-example.stackblitz.io');
    }

};

module.exports = new DeleteUsersPage;