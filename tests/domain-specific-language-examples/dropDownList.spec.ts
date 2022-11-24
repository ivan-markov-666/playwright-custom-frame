/**
 * @description     This class shows the solution for selecting a value from the drop-down list.
 *                  The class contains examples of Playwright commands and domain-specific language (custom methods).
 *                  As you can see in the Playwright example/s, we use both domain-specific language methods and Playwright functions. The example related to this class is shown in Playwright functions, and the other part of the code is shown (most probably) in domain-specific language methods.
 */

//01. Import libraries and classes.
// Import Playwright test library.
import { test, expect, Page } from "@playwright/test";
import BaseClass from "../../baseClass/baseClass";
// Import the domain-specific language class.
import domainSpecificLanguage from "../../custom-methods/domain-specific-language/dsl";
import tsMethods from "../../custom-methods/other-methods/tsMethods";

//02. Create the "describe" block.
test.describe("This block contains examples for selecting a value from the drop-down list.", async () => {
  let page: Page; // Create a new variable for Page. Add a specific type (of the Page class) to enable the suggestions.
  let dsl: domainSpecificLanguage; // Create a new variable for a domain-specific language. Add a specific type (of the domainSpecificLanguage class) to enable the suggestions.
  let ts: tsMethods;

  //03. Create the "beforeAll" block.
  test.beforeAll(async ({ browser }) => {
    page = await browser.newPage(); // Add value to 'page'.
    dsl = new domainSpecificLanguage(page); // Create a new 'dsl' and include 'page' inside.
    ts = new tsMethods(page);
  });

  //04. Create the "beforeEach" block.
  test.beforeEach(async () => {
    await dsl.navigateTo("https://demoqa.com/select-menu/");
  });

  //05. Create the "test" block/s.
  test("Playwright Example", async () => {
    // Declare an element.
    let oldStyleDropDownList = page.locator("#oldSelectMenu");
    // Select by value.
    await oldStyleDropDownList.selectOption("1");
    // Verify that automation selected the value correctly.
    await expect(oldStyleDropDownList).toHaveValue('1');
  });

  test("Domain-Specific Language Example", async () => {
    // Provide the element and timeout.
    await dsl.dropDown_oldStyle("#oldSelectMenu", '1');
  });
});
