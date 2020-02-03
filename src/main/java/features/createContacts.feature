Feature: Contact creation 

Scenario Outline: HubSpot contact creation scenario

Given User is already on first landing page

When Login Title of the page is 

Then User clicks on loginButton

Then User enters credentials "<username>" and "<password>"

Then User is at landing page

Then User clicks on create contacts link

Then User enters details 


Then User quits the browser

Examples:
|    email        |   firstname | lastname |  
| abcde@gmail.com | Jon         | Sina     |

