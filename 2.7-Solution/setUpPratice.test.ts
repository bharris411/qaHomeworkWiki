import {Builder, By, Capabilities, until, WebDriver, WebElement} from 'selenium-webdriver'
const chromedriver = require("chromedriver")

const driver: WebDriver = new Builder().withCapabilities(Capabilities.chrome()).build()

export class employeeManager {
driver: WebDriver;
url: string = 'https://devmountain-qa.github.io/employee-manager/1.2_Version/index.html';
addEmployee: By = By.<li name="addEmployee" class="listText"> + Add Employee </li>
}