import { Builder, Capabilities, By, WebDriver, WebElement } from 'selenium-webdriver';
interface Options {
  driver?: WebDriver;
  url?: string; 
  url1?: string;
 
}
export class BasePage {
  driver: WebDriver;
  url: string;

  constructor(options?: Options) {
    if (options && options.driver) this.driver = options.driver;
    else
    this.driver = new Builder().withCapabilities(Capabilities.chrome()).build()
    if(options && options.url) this.url = options.url
  }
  async navigateTo(): Promise<void> {
    await this.driver.get(this.url);
  }

  async findElement(locator: By): Promise<WebElement> {
    return await this.driver.findElement(locator);
  }

  async clickElement(locator: By): Promise<void> {
    const element = await this.findElement(locator);
    await element.click();
  }

  async sendKeys(locator: By, keys: string): Promise<void> {
    const element = await this.findElement(locator);
    await element.sendKeys(keys);
  }

  async takeScreenshot(filename: string): Promise<void> {
    await this.driver.takeScreenshot().then((data: string) => {
      require('fs').writeFileSync(filename, data, 'base64');
    });
  }
}
