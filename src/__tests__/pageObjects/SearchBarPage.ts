import { By, WebDriver } from "selenium-webdriver"
import { BasePage } from "./BasePage"


export class SearchBarPage extends BasePage {
    driver: WebDriver;
    url: string = "https://www.stubhub.com/";


//Sign In Page Locators

signInLink: By = By.xpath('//div[@id="Sign In"]')

emailInput: By = By.xpath('//input[@type="email"]')

pwdInput: By = By.xpath('//input[@id="password"]')

signInBtn: By = By.xpath('//button[@class="UIKIT-UIButton UIKIT-UIButton--Primary UIKIT-UIButton--default"]')


//Search Bar Locators

searchBar: By = By.xpath('//input[@title="Search input"]')

firstItem: By = By.xpath('(//div[@class="EventRedirection"])[1]')

firstTicket: By = By.xpath('//li[@class="RoyalTicketListPanel RoyalTicketListPanel__0"]')

checkOut: By = By.xpath('//a[@class="Button_pill RoyalBuildYourOrder__footer_button_checkout"]')

payClose: By = By.xpath('//button[@class="uikit-dialog-close-button"]')

reviewNBuy: By = By.xpath('//h1[@class="UIKit-H1"]')

};