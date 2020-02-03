$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/main/java/features/hooks.feature");
formatter.feature({
  "name": "Login hooks feature",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "HubSpot login test scenario",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@First"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on login page",
  "keyword": "Given "
});
formatter.match({
  "location": "HooksStepDifinition.user_is_on_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on login button",
  "keyword": "Then "
});
formatter.match({
  "location": "HooksStepDifinition.user_clicks_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enters credentials",
  "keyword": "Then "
});
formatter.match({
  "location": "HooksStepDifinition.enters_credentials()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Logins into system",
  "keyword": "Then "
});
formatter.match({
  "location": "HooksStepDifinition.logins_into_system()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "HubSpot home Page scenario",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Second"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on home Page",
  "keyword": "Given "
});
formatter.match({
  "location": "HooksStepDifinition.user_is_on_home_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User gets title of the page",
  "keyword": "Then "
});
formatter.match({
  "location": "HooksStepDifinition.user_gets_title_of_the_page()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});