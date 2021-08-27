import {CitiesPage} from "./pageObjects/TopCitiesPage"

const chromedriver = require("chromedriver");
import { WebDriver, Builder, Capabilities, By, until, Actions } from "selenium-webdriver";

const driver: WebDriver = new Builder()
  .withCapabilities(Capabilities.chrome())
  .build();

  const top = new CitiesPage(driver);

  //const actions = driver.actions({bridge: true});
  //const mouse = actions.mouse();
  
 describe("Filtering Events Using Top Cities and Review Tickets Before Purchase", () => {
   beforeEach(async () => {
    await top.navigate2(top.url2);
    await top.click(top.signInLink);
   });
   afterAll(async () => {
    await top.quit();
  });
//Must Sign In to check out and review tickets
  test("Testing Top Cities Feature", async () => { 
    await top.sendKeys(top.emailInput, "devmountain3@gmail.com");
    await top.sendKeys(top.pwdInput, "Group003");
    await top.click(top.signInBtn);
    await top.click(top.firstEvent);
    await top.click(top.firstTicket);
    await top.click(top.checkOut);
    await top.click(top.payClose);
    await top.checkIfVisible(top.reviewNBuy);
    //await top.takeScreenshot("screenshots/review2_screenshot");
  });
}); 



//await actions.mouse();
//await actions.move({
    //x: 434,
    //y: 116,
    //origin: driver.findElement(top.logo)}).click().perform();
    //driver.actions.mouseMove(top.topCities).perform(); 
//await actions.move({
  //  origin: driver.findElement(top.la)

