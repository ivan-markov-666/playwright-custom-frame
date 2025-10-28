/**
 * @fileoverview    Shows an example for using randomly selecting testing data.
 */

import { RandomTestingDataPage } from '../../pages/examples/RandomTestingDataPage' // Import the Example Page Object Model, that we are using in that test file.
import { test } from '@playwright/test' // Import the Playwright test module.
import config from '../../../test-data/dataFromJson.json' // Define the path to the JSON file contains testing data and parse the JSON to an object.
import { faker } from '@faker-js/faker' // Import Faker used for dynamically generated data.
import dotenv from 'dotenv' // Import the dotenv package.
// Allow access to the .env file
dotenv.config()

// Example of using testing data from JSON file.
const url: string = `${config.baseURL}/automation-practice-form`
const firstName: string = faker.person.firstName()
const lastName: string = faker.person.lastName()
const email: string = `${faker.internet.username()}@testingdomain.com`
const phoneNumber: string = faker.string.numeric(10)
let dateOfBirth: string
const subjects: string[] = [
    `Physics`,
    `Chemistry`,
    `Computer Science`,
    `Commerce`,
    `Accounting`,
    `Economics`,
    `Social Studies`,
    `Civics`,
    `Biology`,
    `Hindi`,
    `English`,
    `Maths`,
    `Arts`,
    `History`,
]
let subject: string
const currentAddress: string = faker.location.streetAddress()

test.describe('Register test suite', async () => {
    // Initialize the ExamplePage object which will be used in the tests.
    let randomTestingDataPage: RandomTestingDataPage

    test.beforeEach(async ({ page }) => {
        // Here, we are creating a new instance of ExamplePage, passing the Playwright page object,
        // which is used to interact with the browser page throughout the test.
        randomTestingDataPage = new RandomTestingDataPage(page)
        // Generating random value for the dateOfBirth testing data.
        dateOfBirth = randomTestingDataPage.generateRandomBirthDate()
        subject = randomTestingDataPage.getRandomSubject(subjects)
    })

    test.afterEach(async ({ page }) => {
        // Close the page instance.
        await page.close()
    })

    test('Fill in the practice form with random data', async () => {
        await test.step('Visit the practice form and fill it with randomly generated and selected data.', async () => {
            await randomTestingDataPage.fillInPracticeForm(
                url,
                firstName,
                lastName,
                email,
                phoneNumber,
                dateOfBirth,
                subject,
                currentAddress,
            )
        })
    })
})
