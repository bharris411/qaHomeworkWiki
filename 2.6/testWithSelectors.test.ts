import {Builder, By, Capabilities, WebDriver} from "selenium-webdriver"

const chromedriver = require("chromedriver")

const driver: WebDriver = new Builder().withCapabilities(Capabilities.chrome()).build();

describe("Filling in the blanks", () => {
    beforeEach(async () => {
        await driver.get('https://devmountain-qa.github.io/enter-wanted/1.4_Assignment/index.html')
    });
    afterAll(async () => {
        await driver.quit();
    })

    const hdrInput: By = By.xpath('//input[@name="hdrInput"]')
    const mkeInput: By = By.xpath('//input[@name=""mkeInput"]')
    const oaiInput: By = By.xpath('//input[@name="oriInput"]')
    const nameInput: By = By.xpath('//input[@name="namInput"]')
    const clrBtn: By = By.xpath('//button[@id="clearInput"]')
    const submitBtn: By = By.xpath('//button[@id=""saveBtn"')
    const errorMsg: By = By.xpath('//p[@id="validInput"]')

    test("filling in the blanks for real", async () => {
        await driver.findElement(hdrInput).sendKeys("Header")
        await driver.findElement(mkeInput).sendKeys("Maker")
        await driver.findElement(oaiInput).sendKeys("OAI")
        await driver.findElement(nameInput).sendKeys("NAME")
        await driver.findElement(submitBtn).click();
        expect(errorMsg).toContain("Errors Received:")
        await driver.findElement(clrBtn).click()
        
    })
})