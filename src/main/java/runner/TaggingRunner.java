package runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
//import cucumber.api.junit.Cucumber;
import cucumber.api.junit.Cucumber;





@SuppressWarnings("deprecation")
@RunWith(Cucumber.class)

@CucumberOptions(features="src\\main\\java\\features\\tagging.feature",glue={"stepDefinition"},
monochrome=true,tags= {"@SmokeTest","~@RegressionTest"},strict=true,dryRun=true,plugin= {"pretty","html:output/cucumber-reports","json:json-output/cucumber.json","junit:junit-output/junit-cucumber.xml"})

public class TaggingRunner {

}


