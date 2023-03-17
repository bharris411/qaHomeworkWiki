import { By, until, WebDriver } from "selenium-webdriver";
import { BasePage } from "./basePageMcCormick";

export class McCormickPage extends BasePage {
  static clickCheckoutButton() {
    throw new Error("Method not implemented.");
  }
  static navigate() {
    throw new Error("Method not implemented.");
  } 
  driver: WebDriver;
  searchBox: By = By.xpath('//span[@class="icon icon-search search-utility"]');
  recipeTab: By = By.xpath('(//a[text()="Recipes"])[1]');
  stPattyTab: By = By.xpath('(//a)[67]');
  irishCoffeeTab: By = By.xpath('(//a[text()="Maple Irish Coffee"])[1]');
  viewRecipeOnlyTab: By = By.xpath('//button[@class="ow-recipe-video-button"]');
  checkoutButton = By.css('a[title="Cart"]');
  static driver: any;


  async navigate(url: string = "https://www.mccormick.com"): Promise<void> {
    await this.driver.get(url);
  }

  async click(locator: By): Promise<void> {
    await this.driver.wait(until.elementLocated(locator));
    await this.driver.findElement(locator).click();
  }

  async search(query: string): Promise<void> {
    await this.driver.wait(until.elementLocated(this.searchBox));
    await this.driver.findElement(this.searchBox).sendKeys(query);
  }
}
