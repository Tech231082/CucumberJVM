package stepDefinition;

import org.junit.Assert;
import org.openqa.selenium.Alert;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

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
	public void user_clicks_on_login_Button(){
		WebDriverWait wait=new WebDriverWait(driver,15);
		
	    WebElement ele=driver.findElement(By.xpath("//ul[@class='hsg-nav__group']//li[@class='hsg-nav__group-item hsg-nav__group-item--login']//a[@class='cta--secondary cta--small']"));
	   // wait.until(ExpectedConditions.elementToBeClickable(ele)).click();
	    JavascriptExecutor js=(JavascriptExecutor)driver;
	    js.executeScript("arguments[0].click();", ele);
	    
	}
	@Then("Title of the page is")
	public void title_of_the_page_is() {
	   System.out.println( driver.getTitle());
	}

	@Then("User enters id and password")
	public void user_enters_id_and_password() {
	    
	}
	


		
	

}
