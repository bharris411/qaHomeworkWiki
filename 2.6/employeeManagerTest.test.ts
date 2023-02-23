import {Builder, By , Capabilities, until, WebDriver, Key } from "selenium-webdriver";
  const chromedriver = require("chromedriver");

  const driver: WebDriver = new Builder()
  .withCapabilities(Capabilities.chrome())
  .build();

  class employeePage {
    driver: WebDriver;
    url: string = ("https://devmountain-qa.github.io/employee-manager/1.2_Version/index.html") ;
        header: By = By.id("titleText");
        employees: By = By.xpath("li");
        footer: By = By.name("footer");
        noEmployeeMessage: By = By.css("#noEmployee")
        employeeCardBigName: By = By.xpath('p[@id="employeTitle"]]')
        addEmployee: By = By.css('[name="addEmployee"]');
        nameInput: By = By.css('[name="nameEntry"]')
        newEmployee: By = By.css('[name="employee11"]')
        phoneInput: By = By.css('[name="phoneEntry"]')
        titleInput: By = By.css('[name="titleEntry"]')
    static navigate: any;

        constructor(driver:WebDriver) {
            this.driver = driver;

      }
      async navigate() {
        await this.driver.get(this.url);
        await this.driver.wait;
      }
        async click(elementBy: By){
            await this.driver.wait(until.elementLocated(elementBy))
            return (await this.driver.findElement(elementBy)).click()
      }
        async sendKeys(elementBy: By, keys){
        await this.driver.wait(until.elementLocated(elementBy))
        return this.driver.findElement(elementBy).sendKeys(keys)
        
        }

      }
  const emPage = new employeePage(driver)

  describe("Employee Manger Test", () => {
      beforeEach(async() => {
  
        await emPage.navigate();
      })
      afterAll(async () => {
await emPage.driver.quit()
      })

    test("adding an employee", async () => {
          
          await driver.wait(until.elementLocated(emPage.addEmployee))
          await driver.findElement(emPage.addEmployee).click()
          await driver.findElement(emPage.newEmployee).click()
          await driver.findElement(emPage.nameInput).click()
          await driver.findElement(emPage.nameInput).clear()
          await driver.findElement(emPage.nameInput).sendKeys("Name Entry")
          await driver.findElement(emPage.phoneInput).click()
          await driver.findElement(emPage.phoneInput).clear()
          await driver.findElement(emPage.phoneInput).sendKeys("123456789")
          await driver.findElement(emPage.titleInput).click()
          await driver.findElement(emPage.titleInput).clear()
          await driver.findElement(emPage.titleInput).sendKeys("Title")
  })
  });