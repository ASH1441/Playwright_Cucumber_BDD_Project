Feature: Register User Feature

@smoke
    Scenario: Register New User Fail
    Given User is on the registration page
    When User fills in the registration form with username "MaxMustermann" and password "Passwort!123!" and repeatPassword "Passwort"
    #Then User should see a confirmation message indicating successful registration
