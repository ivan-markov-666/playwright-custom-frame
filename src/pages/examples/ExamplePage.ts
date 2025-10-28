/**
 * @fileoverview    Shows a real example of creating one Page Object Model file.
 */

// 01. Import the dependencies.
import { expect } from '@playwright/test'
import { BasePage } from '../BasePage'

// 02. Create a new class and inherit the BasePage class.
export class ExamplePage extends BasePage {
    // 03. Define the locators.
    private readonly fullNameTextBox = `//input[@id='userName']`
    private readonly emailTextBox = `//input[@id='userEmail']`
    private readonly currentAddressTextBox = `//textarea[@id='currentAddress']`
    private readonly permanentAddressTextBox = `//textarea[@id='permanentAddress']`
    private readonly submitButton = `//button[@id='submit']`
    private readonly nameValidate = `//p[@id='name']`
    private readonly emailValidate = `//p[@id='email']`
    private readonly currentAddressValidate = `//p[@id='currentAddress']`
    private readonly permanentAddressValidate = `//p[@id='permanentAddress']`

    // 04. Add POM functions here.
    /**
     * @description             It will fill the 'Text Box' form with provided data
     * @param url               Provide the URL to navigate to the Text Box page
     * @param fullName          Provide data for 'Full Name'
     * @param email             Provide data for 'Email'
     * @param currentAddress    Provide data for 'Current Address'
     * @param permanentAddress  Provide data for 'Permanent Address'
     */
    async fillInTextBox(
        url: string,
        fullName: string,
        email: string,
        currentAddress: string,
        permanentAddress: string,
    ) {
        await this.common.screenSize(1152, 2048)
        await this.common.navigateTo(url)
        await this.common.sendKeys(this.fullNameTextBox, fullName)
        await this.common.sendKeys(this.emailTextBox, email)
        await this.common.sendKeys(this.currentAddressTextBox, currentAddress)
        await this.common.sendKeys(this.permanentAddressTextBox, permanentAddress)
        await this.common.clickElement(this.submitButton)
    }

    /**
     * @description                             It will validate if the system saved the information correctlly.
     * @param nameExpectedValue                 Provide the expecting name (full name).
     * @param emailExpectedValue                Provide the expecting email address.
     * @param currentAddressExpectedValue       Provide the expecting current address.
     * @param permanentAddressExpectedValue     Provide the expecting permanent address.
     */
    async validateFillInTextBox(
        nameExpectedValue: string,
        emailExpectedValue: string,
        currentAddressExpectedValue: string,
        permanentAddressExpectedValue: string,
    ) {
        this.verifyTheValue(await this.common.getElementText(this.nameValidate), nameExpectedValue)
        this.verifyTheValue(
            await this.common.getElementText(this.emailValidate),
            emailExpectedValue,
        )
        this.verifyTheValue(
            await this.common.getElementText(this.currentAddressValidate),
            currentAddressExpectedValue,
        )
        this.verifyTheValue(
            await this.common.getElementText(this.permanentAddressValidate),
            permanentAddressExpectedValue,
        )
    }

    //05. If there are local functions that should be used in the same file, add them here.
    /**
     * @description         Verifies that the extracted value from a string after the colon matches the expected value.
     *                      It trims any trailing spaces from the extracted value before comparison.
     *
     * @param actualText    The input text containing a key-value pair separated by a colon.
     * @param expectedValue The expected value to be matched after the colon.
     */
    verifyTheValue(actualText: string, expectedValue: string) {
        // Finds the index of the first occurrence of the colon in the string
        const colonIndex = actualText.indexOf(':')

        // Extracts the substring after the colon
        // Uses colonIndex + 1 to skip the colon itself
        let actualValue = actualText.substring(colonIndex + 1)

        // Removes any trailing spaces from the end of the string
        actualValue = actualValue.trimEnd()

        // Checks if the extracted value matches the expected value
        expect(actualValue).toEqual(expectedValue)
    }
}
