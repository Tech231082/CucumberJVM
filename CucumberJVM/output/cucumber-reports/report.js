$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/main/java/features/login.feature");
formatter.feature({
  "name": "HubSpot login feature",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "HubSpot login test scenario",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User is already on login page",
  "keyword": "Given "
});
formatter.step({
  "name": "Title of login page is",
  "keyword": "When "
});
formatter.step({
  "name": "User clicks on login Button",
  "keyword": "Then "
});
formatter.step({
  "name": "Title of the page is",
  "keyword": "Then "
});
formatter.step({
  "name": "User enters \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "User is at home page",
  "keyword": "Then "
});
formatter.step({
  "name": "User closes the browser",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "",
        "password"
      ]
    },
    {
      "cells": [
        "sush.rinwa@gmail.com",
        "",
        "Sushila231082"
      ]
    },
    {
      "cells": [
        "myname@gmail.com",
        "",
        "Sushila231082"
      ]
    },
    {
      "cells": [
        "gelio@gmail.com",
        "",
        "Sushila231082"
      ]
    }
  ]
});
formatter.scenario({
  "name": "HubSpot login test scenario",
  "description": "",
  "keyword": "Scenario Outline"
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
  "name": "User enters \"sush.rinwa@gmail.com\" and \"Sushila231082\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.user_enters_id_and_password(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User is at home page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.user_is_at_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User closes the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.user_closes_the_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "HubSpot login test scenario",
  "description": "",
  "keyword": "Scenario Outline"
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
  "name": "User enters \"myname@gmail.com\" and \"Sushila231082\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.user_enters_id_and_password(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User is at home page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.user_is_at_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User closes the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.user_closes_the_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "HubSpot login test scenario",
  "description": "",
  "keyword": "Scenario Outline"
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
  "name": "User enters \"gelio@gmail.com\" and \"Sushila231082\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.user_enters_id_and_password(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User is at home page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.user_is_at_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User closes the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.user_closes_the_browser()"
});
formatter.result({
  "status": "passed"
});
});