Feature: HubSpot login feature

#Scenario: HubSpot login test scenario

#Given User is already on login page
#When Title of login page is 
#Then User clicks on login Button
#Then Title of the page is
#Then User enters "sush.rinwa@gmail.com" and "Sushila231082"
#Then User is at home page
#Then User closes the browser

Scenario Outline: HubSpot login test scenario

Given User is already on login page
When Title of login page is 
Then User clicks on login Button
Then Title of the page is
Then User enters "<username>" and "<password>"
Then User is at home page
Then User closes the browser

Examples:

   | username             |    | password       |
   | sush.rinwa@gmail.com |	   | Sushila231082  |  
   | myname@gmail.com     |	   | Sushila231082  | 
   | gelio@gmail.com      |	   | Sushila231082  | 





