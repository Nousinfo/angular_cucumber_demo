Feature: Paytm homepage offers Data Card Recharge
    As a user of the Paytm website I should be able to recharge the Data Card

  Background:
    Given On Paytm Data Card Recharge page

#  Scenario: User checks whether required values can be entered to Data Card
#    When User insert data card number
#    And User confirm respective data card operator
#    And User enters recharge amount for data card
#    Then User tries with a payment for data card by clicking Proceed to Recharge

  Scenario: User enters no amount and tries payment error message 'Please enter Recharge amount' displayed
    When User insert data card number and confirm respective operators
    And User enters no amount for data card and clicks Proceed to Recharge button
    Then User should see the error message Please enter Reecharge amount