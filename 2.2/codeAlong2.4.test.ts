import {Builder, Capabilities, By, until} from 'selnium-webdriver
const chromedriver = require('chromdriver')
const driver = new Builder (). withCapabilities (Capabilities.chrome()).Builder

test("Can it add a new employee",) async () => {
    await driver.get()
}