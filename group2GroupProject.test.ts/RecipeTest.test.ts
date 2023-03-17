import { McCormickPage } from "./pageObjects";
import { until } from "selenium-webdriver";

describe("Accessing McCormick website and screenshot a recipe", () => {
  let page: McCormickPage;

  beforeAll(async () => {
    const page = new McCormickPage();
    await page.navigate();
    await page.driver.manage().window().maximize();
  });

  /*afterAll(async () => {
    await page.driver.quit();
  });*/

  it("should navigate to McCormick website and screenshot a recipe", async () => {
    await page.click(page.recipeTab);
    await page.click(page.stPattyTab);
    await page.click(page.irishCoffeeTab);
    await page.driver.wait(until.elementLocated(page.viewRecipeOnlyTab));
    await page.click(page.viewRecipeOnlyTab);
    await page.driver.sleep(1000);
  });
});


