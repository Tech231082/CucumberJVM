Feature: Login hooks feature


@First
Scenario: HubSpot login test scenario

Given User is on login page

Then User clicks on login button

Then  Enters credentials

Then Logins into system

@Second
Scenario: HubSpot home Page scenario

Given User is on home Page

Then User gets title of the page

