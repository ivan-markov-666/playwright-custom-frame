/**
 * @fileoverview    This file shows an example of calling the function defined in the Page Object Files.
 */

// 01. Import the dependencies.
import { test } from '@playwright/test'
// 02. Define the testing date.
const username = 'testingUsername'

// 03. Define the describe test block here.
test.describe('test', async () => {
    // 04. Define the beforeEach test block.
    test.beforeEach(async () => {
        // Add code that will be executed before each test.
    })

    // 05. Define the afterEach test block.
    test.afterEach(async () => {
        // Add code that will be executed after each test.
    })

    // 06. Define the tests. Each test can be a different version of one test case, or it can be different test cases.
    test('test1', async () => {
        // Call the Page Object Model functions here.
        // Or add code that will simulate user actions.
        console.log(username)
    })

    test('test2', async () => {})

    // There are more hooks. Check the official documentation : https://playwright.dev/docs/api/class-test
})
