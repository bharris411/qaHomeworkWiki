import { By, WebDriver } from 'selenium-webdriver';
import BasePage from './checkoutBasePage';

export default class McCormickPage extends BasePage {
  checkoutButton = By.css('a[title="Cart"]');
  shopUrl = 'https://shop.mccormick.com/?utm_source=mkc-website&utm_medium=nav-button';

  constructor(driver: WebDriver) {
    super(driver, 'https://www.mccormick.com/');
  }

  async clickCheckoutButton() {
    await this.driver.findElement(this.checkoutButton).click();
    await this.driver.wait(async () => {
      const currentUrl = await this.driver.getCurrentUrl();
      return currentUrl.startsWith(this.shopUrl);
    });
  }
}
