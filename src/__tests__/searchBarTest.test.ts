import {SearchBarPage} from "./pageObjects/SearchBarPage"

const chromedriver = require("chromedriver");
import { WebDriver, Builder, Capabilities, By, until } from "selenium-webdriver";

const driver: WebDriver = new Builder()
  .withCapabilities(Capabilities.chrome())
  .build();
  
  const bar = new SearchBarPage(driver);

  describe("Testing Sign In and Searching", () => {
    beforeEach(async () => {
     await bar.navigate(bar.url);
     await bar.click(bar.signInLink);
    });
    afterAll(async () => {
     await bar.quit();
   });
   
   //Sign In is required by website to check out tickets
   test("Searching for Event and Reviewing Tickets Before Purchase", async () => { 
    await bar.sendKeys(bar.emailInput, "devmountain3@gmail.com");
    await bar.sendKeys(bar.pwdInput, "Group003");
    await bar.click(bar.signInBtn);
    await bar.sendKeys(bar.searchBar, "dodgers\n");
    await bar.click(bar.firstItem);
    await bar.click(bar.firstTicket);
    await bar.click(bar.checkOut);
    await bar.click(bar.payClose);
    await bar.checkIfVisible(bar.reviewNBuy);
    await bar.takeScreenshot("screenshots/review1_screenshot");
  });
});