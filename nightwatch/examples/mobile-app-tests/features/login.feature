Feature: EriBank Login Scenario

  Scenario Outline: As a user, I can log into the EriBank

    Given I am on the login page
    When I login with <username> and <password>
    Then I should see a flash message saying <message>

    Examples:
      | username | password             | message                        |
      | company | company! | You logged into a secure area! |
      | company1   | company               | Your username is invalid!      |
      | company   | company1               | Your password is invalid!      |
      | company1   | company1               | Your username and password are invalid!      |
