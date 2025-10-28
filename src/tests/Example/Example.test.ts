/**
 * @fileoverview    Shows a real example of creating one Test file.
 */

import { ExamplePage } from '../../pages/examples/ExamplePage' // Import the Example Page Object Model, that we are using in that test file.
import { test } from '@playwright/test' // Import the Playwright test module.
import config from '../../../test-data/dataFromJson.json' // Define the path to the JSON file contains testing data and parse the JSON to an object.
import { faker } from '@faker-js/faker' // Import Faker used for dynamically generated data.
import dotenv from 'dotenv' // Import the dotenv package.
// Allow access to the .env file
dotenv.config()

// Example of using testing data from JSON file.
const url: string = `${config.baseURL}/text-box`
// Example for dynamically generated data using faker.
const fullName: string = faker.person.fullName()
// Example for hardcoded data.
const email: string = `test@test.com`
const currentAddress: string = 'White House'
// Example how to call information from .env file.
let permanentAddress: string
if (process.env.PERMANENT_ADDRESS) {
    permanentAddress = process.env.PERMANENT_ADDRESS
}

test.describe('Register test suite', async () => {
    // Initialize the ExamplePage object which will be used in the tests.
    let examplePage: ExamplePage

    test.beforeEach(async ({ page }) => {
        // Here, we are creating a new instance of ExamplePage, passing the Playwright page object,
        // which is used to interact with the browser page throughout the test.
        examplePage = new ExamplePage(page)
    })

    test.afterEach(async ({ page }) => {
        // Close the page instance.
        await page.close()
    })

    test('Example test', async () => {
        await test.step('Visit the text box page and submit data in the form. Then, validate that the information was saved correctly.', async () => {
            // Call the "Page Object Models" functions.
            await examplePage.fillInTextBox(url, fullName, email, currentAddress, permanentAddress)
            await examplePage.validateFillInTextBox(
                fullName,
                email,
                currentAddress,
                permanentAddress,
            )
        })
    })
})
