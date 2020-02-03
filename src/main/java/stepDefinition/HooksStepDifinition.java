package stepDefinition;

import io.cucumber.java.After;
import io.cucumber.java.Before;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;

public class HooksStepDifinition {
	
	@Before
	public void setUp() {
		System.out.println("User launch the browser");
	}
	
	@After
	public void tearDown() {
		System.out.println("User closes the browser");
	}
	
	@Before("@Second")
	public void setUpLocal() {
		System.out.println("Only before second");
	}
	
	@Given("User is on login page")
	public void user_is_on_home_page() {
		
		System.out.println("User is on login page");
	    
	}

	@Then("User clicks on login button")
	public void user_clicks_on_login_button() {
		System.out.println("User clicks on login button");
	    
	}

	@Then("Enters credentials")
	public void enters_credentials() {
		System.out.println("User enters credentials");
	    
	}

	@Then("Logins into system")
	public void logins_into_system() {
		System.out.println("User logins to system");
	    
	}
	
	@Given("User is on home Page")
	public void user_is_on_home_Page() {
		System.out.println("User is on home page");
	}

	@Then("User gets title of the page")
	public void user_gets_title_of_the_page() {
		System.out.println("User get the title of the page");
	}





}
