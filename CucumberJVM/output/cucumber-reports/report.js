$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/main/java/features/tagging.feature");
formatter.feature({
  "name": "HubSpot login feature  testing",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Login with correct username and correct password",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "name": "This is a valid test case",
  "keyword": "Given "
});
formatter.match({
  "location": "TaggingStepDefinition.this_is_a_valid_test_case()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Login with correct username and incorrect password",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@SmokeTest"
    },
    {
      "name": "@RegressionTest"
    }
  ]
});
formatter.step({
  "name": "This is a invalid test case",
  "keyword": "Given "
});
formatter.match({
  "location": "TaggingStepDefinition.this_is_a_invalid_test_case()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Login with incorrect username and incorrect password",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@SmokeTest"
    },
    {
      "name": "@RegressionTest"
    }
  ]
});
formatter.step({
  "name": "This is a invalid test case",
  "keyword": "Given "
});
formatter.match({
  "location": "TaggingStepDefinition.this_is_a_invalid_test_case()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Login with blank username and correct password",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "name": "This is a invalid test case",
  "keyword": "Given "
});
formatter.match({
  "location": "TaggingStepDefinition.this_is_a_invalid_test_case()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Login with correct username and blank password",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@SmokeTest"
    },
    {
      "name": "@RegressionTest"
    }
  ]
});
formatter.step({
  "name": "This is a invalid test case",
  "keyword": "Given "
});
formatter.match({
  "location": "TaggingStepDefinition.this_is_a_invalid_test_case()"
});
formatter.result({
  "status": "skipped"
});
});