package runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
//import cucumber.api.junit.Cucumber;
import cucumber.api.junit.Cucumber;




@SuppressWarnings("deprecation")
@RunWith(Cucumber.class)

@CucumberOptions(features="src\\main\\java\\features\\login.feature",glue={"stepDefinition"},
monochrome=true,strict=false,dryRun=false,plugin= {"pretty","html:output/cucumber-reports"})
public class TestRunner {

}
