import { By, WebDriver } from "selenium-webdriver"
import { BasePage } from "./BasePage"


export class RegSigPage extends BasePage {
    driver: WebDriver;
    url: string = "https://www.stubhub.com/";


//Sign Up Page Locators

signInLink: By = By.xpath('//span[@class="mh__nav-menu-header-text menu__header-text-sign-in"]')

createAccLink: By = By.xpath('//a[@class="auth-link signup"]')

fstName: By = By.xpath('//input[@id="first-name"]')

lstName: By = By.xpath('//input[@id="last-name"]')

regEmail: By = By.xpath('//input[@id="email"]')

regPwd: By = By.xpath('//input[@id="password"]')

sbmtRegistration: By = By.xpath('//button[@type="submit"]')

//Sign In Page Locators

emailInput: By = By.xpath('//input[@type="email"]')

pwdInput: By = By.xpath('//input[@id="password"]')

signInBtn: By = By.xpath('//button[@class="UIKIT-UIButton UIKIT-UIButton--Primary UIKIT-UIButton--default"]')

errorMsg: By = By.xpath('//section[@class="login-alert__wrapper"]')

};