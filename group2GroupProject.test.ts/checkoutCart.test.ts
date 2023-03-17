import { McCormickPage } from "./pageObjects";
import { Builder, until } from "selenium-webdriver";

describe('McCormick website', () => {
  let page: McCormickPage;

  beforeAll(async () => {
    const page = new McCormickPage();
    await page.navigate();
    await page.driver.manage().window().maximize();
  });

  afterAll(async () => {
    await McCormickPage.driver.quit();
  });

  test('should navigate to McCormick website, click checkout button, and take a screenshot', async () => {
    await page.navigate();
    await page.clickCheckoutButton();
    const screenshot = await McCormickPage.driver.takeScreenshot();
  });
});
