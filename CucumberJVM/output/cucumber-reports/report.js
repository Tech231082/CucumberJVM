$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/main/java/features/login.feature");
formatter.feature({
  "name": "HubSpot login feature",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "HubSpot login test scenario",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "User is already on login page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepDefinition.user_is_alreadyOn_loginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Title of login page is",
  "keyword": "When "
});
formatter.match({
  "location": "LoginStepDefinition.title_of_login_page_is()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on login Button",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.user_clicks_on_login_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Title of the page is",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.title_of_the_page_is()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters id and password",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.user_enters_id_and_password()"
});
formatter.result({
  "status": "passed"
});
});