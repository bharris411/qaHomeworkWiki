import {McCormickPage} from './pageObjects'
import { until } from "selenium-webdriver";
const page = new McCormickPage()
const fs = require('fs')

  test("should navigate to McCormick website and screenshot a recipe", async () => {
    await page.navigate("https://www.mccormick.com")
    await page.driver.manage().window().maximize();
    await page.driver.sleep(3000)
    await page.click(page.recipeTab);
    await page.click(page.stPattyTab);
    await page.driver.sleep(3000)
    await fs.writeFile(`${__dirname}/IrishCoffee.png`, 
    await page.driver.takeScreenshot(), "base64", 
    (e) => {
        if (e) console.error(e)
        else console.log('Save Successful')
    })
    await page.driver.quit()
  });