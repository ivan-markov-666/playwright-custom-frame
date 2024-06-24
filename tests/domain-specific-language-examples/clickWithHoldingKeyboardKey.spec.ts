/**
 * @description     This class shows the solution for sending keyboard keys to the element.
 *                  The class contains examples of Playwright commands and domain-specific language (custom methods).
 *                  As you can see in the Playwright example/s, we use both domain-specific language methods and Playwright functions. The example related to this class is shown in Playwright functions, and the other part of the code is shown (most probably) in domain-specific language methods.
 */

//01. Import libraries and classes.
// Import Playwright test library.
import { test, Page } from "@playwright/test";
// Import the domain-specific language class.
import DomainSpecificLanguage from "../../custom-methods/domain-specific-language/dsl";

//02. Create the "describe" block.
test.describe("This block contains examples for sending keyboard keys to the element.", async () => {
  let page: Page; // Create a new variable for Page. Add a specific type (of the Page class) to enable the suggestions.
  let dsl: DomainSpecificLanguage; // Create a new variable for a domain-specific language. Add a specific type (of the domainSpecificLanguage class) to enable the suggestions.

  //03. Create the "beforeAll" block.
  test.beforeAll(async ({ browser }) => {
    page = await browser.newPage(); // Add value to 'page'.
    dsl = new DomainSpecificLanguage(page); // Create a new 'dsl' and include 'page' inside.
  });

  //04. Create the "beforeEach" block.
  test.beforeEach(async () => {
    await dsl.navigateTo("https://demoqa.com/buttons/");
  });

  //05. Create the "test" block/s.
  test("Playwright Example", async () => {
    // Declare a locator of an element.
    let clickElementLocator: string = "//button[text()='Click Me']";
    // Call this method, to verify that the element is present and it is ready for usage.
    await dsl.element(clickElementLocator, 10000);
    // Send keyboard key/s to inspected element.
    await page.click(clickElementLocator, {
      modifiers: ["Shift"],
      force: true,
    });
  });

  test("Domain-Specific Language Example", async () => {
    // Provide the locator and keyboard key/s.
    await dsl.clickWithHoldingKeyboardKey(
      "//button[text()='Click Me']",
      "Shift"
    );
  });
});
