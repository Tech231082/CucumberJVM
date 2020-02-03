package stepDefinition;

import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.WebDriverWait;

import io.cucumber.datatable.DataTable;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class CreateContactStepDefinition {
	
	WebDriver driver;
	
	@Given("^User is already on first landing page$")
	public void user_is_alreadyOn_loginPage() {
		
		System.setProperty("webdriver.chrome.driver", "C:\\mytools\\chromedriver_win32 (1)\\chromedriver.exe");
		driver=new ChromeDriver();
		driver.get("https://www.hubspot.com/");
	}
	@When("Login Title of the page is")
	public void title_of_login_page_is() {
	    String title=driver.getTitle();
	    System.out.println(title);
	}
	@Then("User clicks on loginButton")
	public void user_clicks_on_login_Button(){
		WebDriverWait wait=new WebDriverWait(driver,15);
		
	    WebElement ele=driver.findElement(By.xpath("//ul[@class='hsg-nav__group']//li[@class='hsg-nav__group-item hsg-nav__group-item--login']//a[@class='cta--secondary cta--small']"));
	   // wait.until(ExpectedConditions.elementToBeClickable(ele)).click();
	    JavascriptExecutor js=(JavascriptExecutor)driver;
	    js.executeScript("arguments[0].click();", ele);
	    
	}
	@Then("User enters credentials \"(.*)\" and \"(.*)\"$")
	public void user_enters_id_and_password(String username,String password) {
		driver.findElement(By.id("username")).sendKeys(username);
	    driver.findElement(By.id("password")).sendKeys(password);
	    driver.findElement(By.xpath("//button[@id='loginBtn']")).click();
	}
	@Then("User is at landing page")
	public void user_is_at_home_page() {
	    String title=driver.getTitle();
	    System.out.println(title);
	}
	
	@Then("User clicks on create contacts link")
	public void user_clicks_on_create_contacts_link() {
	    driver.findElement(By.xpath("//div[@class='nav-left']//a[@id='nav-primary-contacts-branch']")).click();
	    driver.findElement(By.xpath("//li[@class='expandable active']//div[@class='secondary-nav expansion']//ul//li//div[contains(text(),'Contacts')] ")).click();
	}

	@Then("User enters details")
	public void user_enters_details() {
	    // Write code here that turns the phrase above into concrete actions
	    throw new cucumber.api.PendingException();
	}
	@Then("User quits the browser")
	public void user_closes_the_browser() {
	    driver.close();
	}



	

}
