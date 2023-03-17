import { WebDriver } from 'selenium-webdriver';

export default class BasePage {
  driver: WebDriver;
  url: string;

  constructor(driver: WebDriver, url: string) {
    this.driver = driver;
    this.url = url;
  }

  async navigate() {
    await this.driver.get(this.url);
  }
}
