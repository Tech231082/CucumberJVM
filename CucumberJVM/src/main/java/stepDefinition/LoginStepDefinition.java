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
		
		System.setProperty("webdriver.chrome.driver", "C:\\mytools\\chromedriver_win32 (1)\\chromedriver.exe");
		driver=new ChromeDriver();
		driver.get("https://www.hubspot.com/");
	}
	@When("Title of login page is")
	public void title_of_login_page_is() {
	    String title=driver.getTitle();
	    System.out.println(title);
	}
	@Then("User clicks on login Button")
	public void user_clicks_on_login_Button() {
	    driver.findElement(By.xpath("//a[@class='cta--secondary cta--small']")).click();
	}
	@Then("close the browser")
	public void cose_the_browser() {
		System.out.println("closing the browser");
	    driver.quit();
	}


		
	

}
