import { Builder, By, Capabilities, Key, until, WebDriver } from "selenium-webdriver";
import { McCormickPage } from "./pageObjects";
import { BasePage } from "./basePage";
const page = new McCormickPage()
const fs = require('fs')

test("searching for a recipe", async () => {
await page.navigate();
await page.driver.manage().window().maximize();
await page.driver.sleep(2000);
await page.click(page.searchBox);
await page.setInput(page.searchField, "French Toast");
await fs.writeFile(${__dirname}/FrenchToast.png,
await page.driver.takeScreenshot(), "base64", 
(e) => {
        if (e) console.error(e)
        else console.log('Save Successful')
    })
    await page.driver.quit()
});