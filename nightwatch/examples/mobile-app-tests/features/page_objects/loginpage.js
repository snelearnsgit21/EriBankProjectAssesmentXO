import { $ } from '@wdio/globals'

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage {
    /**
     * define selectors using getter methods
     */
    get inputUsername () {
        return $('com.experitest.ExperiBank:id/usernameTextField');
    }

    get inputPassword () {
        return $('com.experitest.ExperiBank:id/passwordTextField');
    }

    get btnLogin () {
        return $('com.experitest.ExperiBank:id/loginButton');
    }

    get btnLogout () {
        return $('com.experitest.ExperiBank:id/logoutButton');
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async login (username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnLogin.click();
    }

    /**
     * a method to logout of the application
     */
    async logout () {
        await this.btnLogout.click();
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('login');
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('logout');
    }
}

export default new LoginPage();
