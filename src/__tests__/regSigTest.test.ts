import {RegSigPage} from "./pageObjects/RegSigPage"

const chromedriver = require("chromedriver");
import { WebDriver, Builder, Capabilities, By, until } from "selenium-webdriver";

const driver: WebDriver = new Builder()
  .withCapabilities(Capabilities.chrome())
  .build();

  const sig = new RegSigPage(driver);
  
 describe("Testing Register/Sign In Features", () => {
   beforeEach(async () => {
    await sig.navigate(sig.url);
    await sig.click(sig.signInLink);
   });
   afterAll(async () => {
    await sig.quit();
  });
  //Everytime you run this test make sure you change the email
  //Just increase the number at the end of the email by 1
  //Ex: stubhubtester001@gmail.com -> stubhubtester002@gmail.com 
test("User can sign up", async () => {
     await sig.click(sig.createAccLink);
     await sig.sendKeys(sig.fstName, "Jun");
     await sig.sendKeys(sig.lstName, "Tankai");
     await sig.sendKeys(sig.regEmail, "stubhubtester021@gmail.com");
     await sig.sendKeys(sig.regPwd, "teststubhub1");
     await sig.click(sig.sbmtRegistration)
   });

test("user can sign in", async () => { 
  await sig.sendKeys(sig.emailInput, "devmountain3@gmail.com");
  await sig.sendKeys(sig.pwdInput, "Group003");
  await sig.click(sig.signInBtn);
});

test("invalid sign in info will not allow sign in", async () => {
  await sig.sendKeys(sig.emailInput, "testtest@gmail.com");
  await sig.sendKeys(sig.pwdInput, "teststubhub2");
  await sig.click(sig.signInBtn);
  expect(await sig.getText(sig.errorMsg)).toContain("Username or password is incorrect");
  //await sig.takeScreenshot("screenshots/login_screenshot");
});
 });

