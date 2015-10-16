Feature: Paytm homepage data-driven tests
  As a user of the Paytm website I should be able to handle multiple set of data

  Background:
    Given On Paytm.com website for data driven tests

  Scenario: User tries parameterized required values for Mobile Recharge
    Then User tries variety of numbers and confirm respective operators

  Scenario: User selects parameterized menu links should navigate to the respective pages
    Then User selects variety of menu links and confirm respective pages