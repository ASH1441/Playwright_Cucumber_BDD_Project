@smoke
Feature: Register User Feature

    Scenario: Register New User successfully
    Given User is on the registration page
    When User fills in the registration form with username "MaxMustermann" and password "Passwort!123!" and repeatPassword "Passwort!123!"
    Then User should see a confirmation message indicating successful registration

    Scenario: Register New User Fail
    Given User is on the registration page
    When User fills in the registration form with username "Musterfrau" and password "Passwort!123!" and repeatPassword "Passwort000"
    Then User should see a error message indicating unsuccessful registration    
