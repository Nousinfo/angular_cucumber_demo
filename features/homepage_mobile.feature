Feature: Paytm homepage offers Mobile Recharge
    As a user of the Paytm website I should be able to recharge the Mobile

  Background:
    Given On Paytm Online Recharge website

  Scenario: User checks whether required values can be entered to Mobile Recharge
    When User insert mobile number
    And User confirm respective operator
    And User enters recharge amount
    Then User tries with a payment by clicking Proceed to Recharge

  Scenario: User enters no amount and tries payment error message 'Please enter Recharge amount' displayed
    When User insert mobile number and confirm respective operators
    And User enters no amount and clicks Proceed to Recharge button
    Then User should see the error message Please enter Reecharge amount

  Scenario: User tries to click 'Proceed to Recharge' without any entries
    When User enters no values in the fields
    When User clicks on Proceed to Recharge
    Then User should see the errors Please enter mobile number to Reecharge, Please select your Operator, Please enter Recharge amount

  Scenario: User clicks postpaid radio button, Postpaid Mobile option is selected
    When User checks whether 'Postpaid Mobile' option is available
    And User clicks 'Postpaid Mobile' radio button
    Then User verifies whether 'Postpaid Mobile' option is selected

  Scenario: User selects 'Fast Forward' in prepaid option, submit button text changes to 'Recharge now'
    When User clicks 'Prepaid Mobile' and selects 'Fast Forward' option
    Then User verifies text of Submit button changes to Reecharge Now

  Scenario: User selects 'Fast Forward' in postpaid option, submit button text changes to 'Pay bill Now'
    When User clicks 'Postpaid Mobile' and selects 'Fast Forward' option
    Then User verifies text of Submit button changes to Paay Bill Now