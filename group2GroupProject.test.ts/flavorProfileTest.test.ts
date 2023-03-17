import { Builder, By, Capabilities, Key, until, WebDriver } from "selenium-webdriver";
import { BasePage } from "./basePage";
// const driver: WebDriver = new Builder().withCapabilities(Capabilities.chrome()).build()
import { McCormickPage } from "./pageObjects";
const page = new McCormickPage()
const fs = require('fs')

test("should open the flavor profile", async () => {
await page.navigate()
await page.driver.manage().window().maximize();
await page.driver.sleep(3000)
await page.click(page.makeGreatTab);
await page.click(page.greekBtn);
await fs.writeFile(${__dirname}/GreekDish.png,
await page.driver.takeScreenshot(), "base64", 
(e) => {
    if (e) console.error(e)
    else console.log('Save Successful')
})
await page.driver.quit();
});