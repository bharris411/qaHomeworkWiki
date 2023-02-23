import {Builder, By, Capabilities, WebDriver, until} from 'selenium-webdriver'
const chromedriver =require ('chromedriver')
const driver: WebDriver= new Builder ().withCapabilities(Capabilities.chrome(()).build

test('for async functionality', async () => {
    await driver.get('https://www.google.com')
    await driver.wait(until.elementLocated)(By.name('q')))
    await driver.findElement(By.name('q').sendKeys("Super Mario Bro\n")



}