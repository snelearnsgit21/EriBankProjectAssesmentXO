describe('EriBank Android app test', function() {
    before(function(app) {
      app.click('id', 'com.experitest.ExperiBank:id/scrollView1');
    });
  
    it('Login with valid username and password', async function(app) {
      app
        .sendKeys('id', 'com.experitest.ExperiBank:id/usernameTextField','company')
        .sendKeys('id', 'com.experitest.ExperiBank:id/passwordTextField', 'company')
        .click({selector: 'com.experitest.ExperiBank:id/loginButton', locateStrategy: 'id', index: 0})
        .waitUntil(async function() {
          // wait for native_app context to be available
          const contexts = await this.appium.getContexts();
          console.log('Available Contexts:', contexts);
          return contexts.includes('NATIVE_APP');
        })
        .appium.setContext('NATIVE_APP')
        .assert.textEquals('android.widget.TextView', 'EriBank')
        .click({selector: 'com.experitest.ExperiBank:id/logoutButton', locateStrategy: 'id', index: 0});
    });

    it('Login with invalid username and valid password', async function(app) {
      app
        .sendKeys('id', 'com.experitest.ExperiBank:id/usernameTextField','company1')
        .sendKeys('id', 'com.experitest.ExperiBank:id/passwordTextField', 'company')
        .click({selector: 'com.experitest.ExperiBank:id/loginButton', locateStrategy: 'id', index: 0})
        .waitUntil(async function() {
          // wait for native_app context to be available
          const contexts = await this.appium.getContexts();
          console.log('Available Contexts:', contexts);
          return contexts.includes('NATIVE_APP');
        })
        .appium.setContext('NATIVE_APP')
        .assert.elementPresent({selector: 'android:id/alertTitle', locateStrategy: 'id', index: 0})
        .assert.elementPresent({selector: 'android:id/message', locateStrategy: 'id', index: 0})
        .click({selector: 'android:id/button3', locateStrategy: 'id', index: 0})
        .assert.elementPresent({selector: 'com.experitest.ExperiBank:id/usernameTextField', locateStrategy: 'id', index: 0})
        .assert.elementPresent({selector: 'com.experitest.ExperiBank:id/passwordTextField', locateStrategy: 'id', index: 0})
        .assert.elementPresent({selector: 'com.experitest.ExperiBank:id/loginButton', locateStrategy: 'id', index: 0});
    });

    it('Login with valid username and invalid password', async function(app) {
      app
        .sendKeys('id', 'com.experitest.ExperiBank:id/usernameTextField','company')
        .sendKeys('id', 'com.experitest.ExperiBank:id/passwordTextField', 'company1')
        .click({selector: 'com.experitest.ExperiBank:id/loginButton', locateStrategy: 'id', index: 0})
        .waitUntil(async function() {
          // wait for native_app context to be available
          const contexts = await this.appium.getContexts();
          console.log('Available Contexts:', contexts);
          return contexts.includes('NATIVE_APP');
        })
        .appium.setContext('NATIVE_APP')
        .assert.elementPresent({selector: 'android:id/alertTitle', locateStrategy: 'id', index: 0})
        .assert.elementPresent({selector: 'android:id/message', locateStrategy: 'id', index: 0})
        .click({selector: 'android:id/button3', locateStrategy: 'id', index: 0})
        .assert.elementPresent({selector: 'com.experitest.ExperiBank:id/usernameTextField', locateStrategy: 'id', index: 0})
        .assert.elementPresent({selector: 'com.experitest.ExperiBank:id/passwordTextField', locateStrategy: 'id', index: 0})
        .assert.elementPresent({selector: 'com.experitest.ExperiBank:id/loginButton', locateStrategy: 'id', index: 0});
    });

    it('Login with invalid username and invalid password', async function(app) {
      app
        .sendKeys('id', 'com.experitest.ExperiBank:id/usernameTextField','company1')
        .sendKeys('id', 'com.experitest.ExperiBank:id/passwordTextField', 'company1')
        .click({selector: 'com.experitest.ExperiBank:id/loginButton', locateStrategy: 'id', index: 0})
        .waitUntil(async function() {
          // wait for native_app context to be available
          const contexts = await this.appium.getContexts();
          console.log('Available Contexts:', contexts);
          return contexts.includes('NATIVE_APP');
        })
        .appium.setContext('NATIVE_APP')
        .assert.elementPresent({selector: 'android:id/alertTitle', locateStrategy: 'id', index: 0})
        .assert.elementPresent({selector: 'android:id/message', locateStrategy: 'id', index: 0})
        .click({selector: 'android:id/button3', locateStrategy: 'id', index: 0})
        .assert.elementPresent({selector: 'com.experitest.ExperiBank:id/usernameTextField', locateStrategy: 'id', index: 0})
        .assert.elementPresent({selector: 'com.experitest.ExperiBank:id/passwordTextField', locateStrategy: 'id', index: 0})
        .assert.elementPresent({selector: 'com.experitest.ExperiBank:id/loginButton', locateStrategy: 'id', index: 0});
    });
  });
  