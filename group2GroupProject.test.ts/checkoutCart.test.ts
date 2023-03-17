import { McCormickPage } from "./pageObjects";
import { until } from "selenium-webdriver";
const page = new McCormickPage
const fs = require ('fs')

  test('should navigate to McCormick checkout icon', async () => {
    await page.navigate("https://www.mccormick.com")
    await page.driver.manage().window().maximize
    await page.driver.sleep(3000)
    await page.click(page.checkoutCart)
    await fs.writeFile(`${__dirname}/CheckoutCart.png`, 
    await page.driver.takeScreenshot(), "base64", 
    (e) => {
        if (e) console.error(e)
        else console.log('Save Successful')
    })
    await page.driver.quit()
  });