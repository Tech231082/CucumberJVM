package stepDefinition;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;



public class LoginStepDefinition {
	WebDriver driver;
	
	@Given("^User is already on login page$")
	public void user_is_alreadyOn_loginPage() {
		
		System.setProperty("webdriver.gecko.driver", "C:\\mytools\\geckodriver-v0.25.0-win64\\geckodriver.exe");
		driver=new FirefoxDriver();
		driver.get("https://www.hubspot.com/");
	}
	@When("Title of login page is")
	public void title_of_login_page_is() {
	    String title=driver.getTitle();
	    System.out.println(title);
	}

		
	

}
