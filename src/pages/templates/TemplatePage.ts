/**
 * @fileoverview    This file shows an example of the usage of Page Object Model Implementation.
 */

// 01. Import the dependencies.
import { BasePage } from '../BasePage'

// 02. Create a new class and inherit the BasePage class.
export class TemplatePage extends BasePage {
    // 03. Define the locators.
    private readonly CssLocatorExample = `#username`
    private readonly xpathLocatorExample = `//*[@id='username']`

    // 04. Add POM functions here.
    async examplePOMfunction() {
        // Add code that will simulate user actions.
    }
}
