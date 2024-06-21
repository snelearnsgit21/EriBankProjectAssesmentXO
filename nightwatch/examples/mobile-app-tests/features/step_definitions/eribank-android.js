import { Given, When, Then } from '@wdio/cucumber-framework';
//import { expect, $ } from '@wdio/globals';

import LoginPage from '../page_objects/login.page.js';

const pages = {
    login: LoginPage
}

Given(/^EriBank Mobile App is Launchede$/, async (page) => {
    await pages[page].open()
});

When(/^I login with valid username : (\w+) and password : (.+)$/, async (username, password) => {
    await LoginPage.login(username, password)
});

Then(/^I should see a flash message saying (.*)$/, async (message) => {
    //await expect(SecurePage.flashAlert).toBeExisting();
    //await expect(SecurePage.flashAlert).toHaveTextContaining(message);
});

