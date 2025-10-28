/**
 * @fileoverview    Shows an example for using randomly generated testing data.
 */

// 01. Import the dependencies.
// import { Locator } from '@playwright/test'
import { BasePage } from '../BasePage'

// 02. Create a new class and inherit the BasePage class.
export class RandomTestingDataPage extends BasePage {
    // 03. Define the locators.
    private readonly firstName_InputTextElement = `//*[@id='firstName']`
    private readonly lastName_InputTextElement = `//*[@id='lastName']`
    private readonly email_InputTextElement = `//*[@id='userEmail']`
    private readonly gender_RadioOption = `//*[@name='gender']`
    private readonly mobileNumber_InputTextElement = `//*[@id='userNumber']`
    private readonly dateOfBirth_DropDownCalendar = `//*[@id='dateOfBirthInput']`
    private readonly subjects_InputTextElement = `//*[@id='subjectsInput']`
    private readonly hobbies_CheckBoxes = `//*[@type='checkbox']`
    private readonly currentAddress_InputTextElement = `//*[@id='currentAddress']`
    private readonly stateAndCity_DropDownList = `//*[@id='state']`
    private readonly stateAndCity_DropDownValue = `//*[@id='stateCity-wrapper']//div[@tabindex]`
    private readonly selectCity_DropDownList = `//*[@id='city']`
    private readonly city_DropDownValue = `//*[@id='stateCity-wrapper']//div[@tabindex]`
    private readonly submit_Button = `//*[@id='submit']`

    // 04. Add POM functions here.
    async fillInPracticeForm(
        url: string,
        firstName: string,
        lastName: string,
        email: string,
        phoneNumber: string,
        dateOfBirth: string,
        subject: string,
        currentAddress: string,
    ) {
        await this.common.screenSize(1152, 2048)
        await this.common.navigateTo(url)
        await this.common.delay(2000)
        await this.common.sendKeys(this.firstName_InputTextElement, firstName)
        await this.common.delay(2000)
        await this.common.sendKeys(this.lastName_InputTextElement, lastName)
        if (this.common.getRandomBoolean()) {
            await this.common.delay(2000)
            await this.common.sendKeys(this.email_InputTextElement, email)
        }
        await this.common.delay(2000)
        const genders = await this.common.getElementsByXPath(this.gender_RadioOption)
        const randomGender = this.common.getRandomLocator(genders)
        await this.common.clickElement(randomGender)
        await this.common.delay(2000)
        await this.common.sendKeys(this.mobileNumber_InputTextElement, phoneNumber)
        await this.common.delay(2000)
        await this.common.sendKeys(this.dateOfBirth_DropDownCalendar, dateOfBirth)
        await this.common.delay(2000)
        await this.common.sendKeyboardKeys('Escape', this.dateOfBirth_DropDownCalendar)
        if (this.common.getRandomBoolean()) {
            await this.common.delay(2000)
            await this.common.sendKeys(this.subjects_InputTextElement, subject)
        }
        if (this.common.getRandomBoolean()) {
            await this.common.delay(2000)
            await this.getRandomHobbies()
        }
        if (this.common.getRandomBoolean()) {
            await this.common.delay(2000)
            await this.common.sendKeys(this.currentAddress_InputTextElement, currentAddress)
        }
        if (this.common.getRandomBoolean()) {
            await this.common.delay(2000)
            await this.getRandomStateAndCity()
            await this.getRandomCity()
        }
        console.log(`test`)
    }

    generateRandomBirthDate() {
        const randomYear = this.common.getRandomYearInRange(
            new Date().getFullYear() - 99,
            new Date().getFullYear() - 18,
        )
        const randomDate = this.common.generateRandomDateForYear(randomYear)
        return randomDate
    }

    getRandomSubject(array: string[]) {
        return this.common.getRandomElementFromArray(array)
    }

    async getRandomHobbies() {
        const allHobbies = await this.common.getElementsByXPath(this.hobbies_CheckBoxes)
        const randomlySelectedHobbies = this.common.getRandomLocators(allHobbies)
        await this.common.clickOnEachLocator(randomlySelectedHobbies)
    }

    async getRandomStateAndCity() {
        await this.common.scrollToElement(this.stateAndCity_DropDownList)
        await this.common.clickElement(this.stateAndCity_DropDownList)
        await this.common.delay(2000)
        const allStetaAndCityDropDownValues = await this.common.getElementsByLocator(
            this.stateAndCity_DropDownValue,
        )
        const randomStateAndCity = this.common.getRandoArrayElement(allStetaAndCityDropDownValues)
        await this.common.clickElement(randomStateAndCity)
        await this.common.delay(2000)
    }

    async getRandomCity() {
        await this.common.scrollToElement(this.selectCity_DropDownList)
        await this.common.clickElement(this.selectCity_DropDownList)
        await this.common.delay(2000)
        const allCityDropDownValues = await this.common.getElementsByLocator(
            this.city_DropDownValue,
        )
        const randomCity = this.common.getRandomElementFromArray(allCityDropDownValues)
        await this.common.clickElement(randomCity)
        await this.common.delay(2000)
    }
}
