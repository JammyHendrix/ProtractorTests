var DeleteUsersPage = require('./deleteUsers.page.js');

describe('Test remove a user', function() {
    it('Should login and then be able to delete a user', function() {
        DeleteUsersPage.getUrl();

        DeleteUsersPage.firstinput.sendKeys('AmandaPanda');
        DeleteUsersPage.secondinput.sendKeys('password');
        browser.sleep(3000);
        DeleteUsersPage.deletebutton.click();
        browser.sleep(3000);

        expect(element(by.css('h1')).getText()).toBe('Hi Amanda!');

        element(by.css('ul li:nth-of-type(1) .text-danger')).click();
        expect(element(by.css('ul li:nth-of-type(1)')).isPresent()).toBe(false);


    });
});