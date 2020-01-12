Feature: HubSpot login feature  testing 

@SmokeTest
Scenario: Login with correct username and correct password

Given This is a valid test case

@SmokeTest @RegressionTest
Scenario: Login with correct username and incorrect password

Given This is a invalid test case

@RegressionTest
Scenario: Login with incorrect username and correct password

Given This is a invalid test case

@SmokeTest @RegressionTest
Scenario: Login with incorrect username and incorrect password

Given This is a invalid test case

@SmokeTest 
Scenario: Login with blank username and correct password

Given This is a invalid test case

@SmokeTest @RegressionTest
Scenario: Login with correct username and blank password

Given This is a invalid test case


@RegressionTest
Scenario: Login with blank username and blank password

Given This is a invalid test case