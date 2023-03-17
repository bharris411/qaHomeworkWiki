import { By, until, WebDriver } from "selenium-webdriver";
import { BasePage } from "./basePageMcCormick";

export class McCormickPage extends BasePage {
  mealPlannerTab(mealPlannerTab: any) {
      throw new Error("Method not implemented.");
  }
  makeGreatTab(makeGreatTab: any) {
      throw new Error("Method not implemented.");
  }
  searchBox: By = By.xpath('//span[@class="icon icon-search search-utility"]');
  recipeTab: By = By.xpath('(//a[text()="Recipes"])[1]');
  stPattyTab: By = By.xpath('(//a)[68]');
  irishCoffeeTab: By = By.xpath('(//div[@class="ow-square-recipe-card ajax-recipe-card clickable-card"])[1]');
  viewRecipeOnlyTab: By = By.xpath('//button[@class="ow-recipe-video-button"]');
  checkoutCart = By.xpath('//span[@class="utility-icon"]');
  
  static driver: any;
  
}
