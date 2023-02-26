import {Builder, By, Capabilities, until, WebDriver, WebElement} from 'selenium-webdriver'
const driver: WebDriver = new Builder().withCapabilities(Capabilities.chrome()).build()
const chromedriver = require('chromedriver')

class employeePO{
    driver: WebDriver;
    url: string = "https://devmountain-qa.github.io/employee-manager/1.2_Version/index.html"
    header: By = By.css('.titleText')
    addEmployee: By = By.xpath('//li[@name="addEmployee"]')
    newEmployee: By = By.name('employee11')
    nameinput: By = By.name('nameEntry')
    phoneInput: By = By.name('phoneEntry')
    titleInput: By = By.name('titleEntry')
    saveBtn: By = By.id('saveBtn')
    constructor(driver: WebDriver) {
        this.driver = driver
     }
    async naviagte(){
        await this.driver.get (this.url)
        await this.driver.wait(until.elementsLocated(this.header))
}
async click(elementBy: By) {
    await this.driver.wait(until.elementLocated(elementBy))
    return (await this.driver.findElement(elementBy)).click()
}
async sendKeys(elementBy: By, keys){
    await this.driver.wait(until.elementLocated(elementBy))
    return await this.driver.findElement(elementBy).sendKeys(keys)
}
async getText(elementBy) {
    await this.driver.wait(until.elementLocated(elementBy))
    return this.driver.findElement(elementBy).getText()
}
async setInput(elementBy: By, keys: any): Promise<void> {
    let input = await this.driver.findElement(elementBy)
    await input.click()
    await input.clear()
    return input.sendKeys(keys)

}
}

const emPage = new employeePO(driver)

test('adding employees', async () => {
    await emPage.naviagte()
    await emPage.click(emPage.addEmployee)
    await emPage.click(emPage.newEmployee)
    await emPage.setInput(emPage.nameinput, "Bob Smith")
    await emPage.setInput(emPage.phoneInput, "123456789")
    await emPage.setInput(emPage.titleInput, "CEO of always bring tired")
    await emPage.click(emPage.saveBtn)
    await emPage.driver.quit()
})