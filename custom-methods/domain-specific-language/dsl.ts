import { Page, expect } from "@playwright/test"; // Add this to have suggestions in the spec class.
import { configuration } from "../../configs/configuration"; // Add this to have suggestions in the spec class.
import { tsMethods } from "../other-methods/tsMethods";

let config: configuration;
let ts: tsMethods;

// Declare a class.
export class dsl {
  // Declare a page varible.
  page: Page;
  context: any;

  // Declare a constructor.
  constructor(page: Page, context?: any) {
    // Get access to the page property.
    this.page = page;
    this.context = context;
    ts = new tsMethods(page);
    config = new configuration();
  }

  /**
   * @description               This function changes the screen size.
   * @param widthSize           Provide the number for the width screen size.
   * @param heightSize          Provide the number for the height screen size.
   * @type                      The type is set to: "Promise<void>".
   * @usage                     - Usage:
   *                              {constructorKeyword}.screenSize({widthSize}, {heightSize});
   * @example                   Example: Provide values for screen width and height.
   *                              await dsl.screenSize(1920, 1080);
   */
  async screenSize(widthSize: number, heightSize: number): Promise<void> {
    try {
      // Create the method steps here. Describe the custom command in this "try" statement (Domain Specific Language).
      // If the numbers are positive numbers...
      if (widthSize > 0 || heightSize > 0) {
        // Change the screen size.
        await this.page.setViewportSize({
          width: widthSize,
          height: heightSize,
        });
        // Add the information message.
        ts.informLog(
          ts.methodMessages_informMessage(
            config.beginInformMessage +
              "The screen size was set to: '" +
              widthSize +
              "' width and '" +
              heightSize +
              "' height."
          )
        );
      }
      // If the numbers are negative or it is 0.
      else if (widthSize <= 0 || heightSize <= 0) {
        ts.errorLog(
          "You entered a negative value. Please enter a positive integer value." +
            ts.methodMessages_errorMessage2(
              this.screenSize.name,
              __filename.split(__dirname + "/").pop()
            )
        );
      }
      // If the numbers are not an integer.
      else if (!Number.isInteger(widthSize) || !Number.isInteger(heightSize)) {
        ts.errorLog(
          "You need to enter an integer value." +
            ts.methodMessages_errorMessage2(
              this.screenSize.name,
              __filename.split(__dirname + "/").pop()
            )
        );
      }
      // Everything else...
      else {
        ts.errorLog(
          "You entered an invalid value. Please provide a positive integer number for two parameters." +
            ts.methodMessages_errorMessage2(
              this.screenSize.name,
              __filename.split(__dirname + "/").pop()
            )
        );
      }
    } catch (error) {
      // Unit Test.
      // Create the error log and show it to the UI. Show the function name, the class where the function is located and the cached error.
      ts.errorLog(
        ts.methodMessages_errorMessage(
          this.screenSize.name,
          __filename.split(__dirname + "/").pop(),
          error
        )
      );
    }
  }

  /**
   * @description               This function navigates to the URL.
   * @param url                 Provide the destination URL.
   * @type                      The type is set to: "Promise<void>".
   * @usage                     - Usage:
   *                              {constructorKeyword}.navigateTo({URL address});
   * @example                   Example: Provide the URL address.
   *                              await dsl.navigateTo("https://domainurladdress/endpoint/");
   */
  async navigateTo(url: string): Promise<void> {
    try {
      // Create the method steps here. Describe the custom command in this "try" statement (Domain Specific Language).
      // Provide the destination URL.
      await this.page.goto(url);
      // Verify that the browser loads the correct URL.
      await expect(this.page).toHaveURL(url);
      // Add the information message.
      ts.informLog(
        ts.methodMessages_informMessage(
          config.beginInformMessage +
            "The user was redirected to the URL address: " +
            url
        )
      );
    } catch (error) {
      // Unit Test.
      // Create the error log and show it to the UI. Show the function name, the class where the function is located and the cached error.
      ts.errorLog(
        ts.methodMessages_errorMessage(
          this.navigateTo.name,
          __filename.split(__dirname + "/").pop(),
          error
        )
      );
    }
  }

  /**
   * @description               This function navigates back to the previous URL.
   * @param verifyUrl           Provide the expected URL address.
   * @type                      The type is set to: "Promise<void>".
   * @usage                     - Usage:
   *                              {constructorKeyword}.goBack({expected URL address});
   * @example                   Example: Provide the expected URL address.
   *                              await dsl.goBack("https://domainurladdress/previous/url/");
   */
  async goBack(verifyUrl: string): Promise<void> {
    try {
      // Create the method steps here. Describe the custom command in this "try" statement (Domain Specific Language).

      // Navigate back to the previous URL.
      await this.page.goBack();
      // Verify that the browser loads the correct URL.
      await expect(this.page).toHaveURL(verifyUrl);
      // Add the information message.
      ts.informLog(
        ts.methodMessages_informMessage(
          config.beginInformMessage +
            "The use was redirected to the previous URL address: " +
            verifyUrl
        )
      );
    } catch (error) {
      // Unit Test.
      // Create the error log and show it to the UI. Show the function name, the class where the function is located and the cached error.
      ts.errorLog(
        ts.methodMessages_errorMessage(
          this.goBack.name,
          __filename.split(__dirname + "/").pop(),
          error
        )
      );
    }
  }

  /**
   * @description               This function navigates to the forward URL.
   * @param verifyUrl           Provide the expected URL address.
   * @type                      The type is set to: "Promise<void>".
   * @usage                     - Usage:
   *                              {constructorKeyword}.goForward({expected URL address});
   * @example                   Example: Provide the expected URL address.
   *                              await dsl.goForward("https://domainurladdress/forward/url/");
   */
  async goForward(verifyUrl: string): Promise<void> {
    try {
      // Create the method steps here. Describe the custom command in this "try" statement (Domain Specific Language).

      // Navigate to the forward URL.
      await this.page.goForward();
      // Verify that the browser loads the correct URL.
      await expect(this.page).toHaveURL(verifyUrl);
      // Add the information message.
      ts.informLog(
        ts.methodMessages_informMessage(
          config.beginInformMessage +
            "The use was redirected to the forward URL address: " +
            verifyUrl
        )
      );
    } catch (error) {
      // Unit Test.
      // Create the error log and show it to the UI. Show the function name, the class where the function is located and the cached error.
      ts.errorLog(
        ts.methodMessages_errorMessage(
          this.goForward.name,
          __filename.split(__dirname + "/").pop(),
          error
        )
      );
    }
  }

  /**
   * @description                                    This method switches to a second browser window. The browser window should be opened after some action - pressing the over button, hyperlink etc.
   * @param locatorForcesOpeningNewWindow            Provide a locator (string) that receives the action forces opening the new browser tab.
   * @param verifyLocatorOrElement                   Optional. Provide a locator (string) to verify that the browser opened a new tab window.
   * @type                                           The type is set to: "Promise<any>".
   * @returns                                        The method is returning the switched browser focus as an object.
   * @usage                                          - Usage 1: Use the method by providing a verification locator parameter.
   *                                                   {constructorKeyword}.browserWindowAfterClick("#id1", "#id2");
   *                                                 - Usage 2: Use the method without providing a verification locator parameter.
   *                                                   {constructorKeyword}.browserWindowAfterClick("#id");
   * @example                                        Example 1: Use the method by providing a verification locator parameter.
   *                                                   await dsl.browserWindowAfterClick("#id1", "#id2");
   *                                                 Example 2: Use the method without providing a verification locator parameter.
   *                                                   let newPage = await dsl.browserWindowAfterClick("#id");
   *                                                   let elementInsideNewBrowserWindow: any = newPage.locator("#id2");
   *                                                   await dsl.element(elementInsideNewBrowserWindow);
   *
   */
  async browserWindowAfterClick(
    locatorForcesOpeningNewWindow: any,
    verifyLocatorOrElement?: any
  ): Promise<any> {
    try {
      // Create the method steps here. Describe the custom command in this "try" statement (Domain Specific Language).

      // Get a page after a specific action (e.g. clicking a link).
      let [newPage] = await Promise.all([
        // Wait for a specific event to happen. In this case, we are waiting for the browser to open a new window.
        this.context.waitForEvent("page"),
        // Click over an element to force open the new browser window.
        this.click(locatorForcesOpeningNewWindow),
      ]);
      // Wait until the opening of the new browser window happens.
      await newPage.waitForLoadState();
      // If the parameter "verifyLocatorOrElement" is provided - verify if the verification element loads in the new (switched) browser window.
      if (verifyLocatorOrElement != null) {
        await this.element(await newPage.locator(verifyLocatorOrElement));
      }
      // Add the information message.
      ts.informLog(
        ts.methodMessages_informMessage(
          config.beginInformMessage +
            "The automation test switched the focus to the second browser tab."
        )
      );
      // Return the switched browser focus as an object.
      return newPage;
    } catch (error) {
      // Unit Test.
      // Create the error log and show it to the UI. Show the function name, the class where the function is located and the cached error.
      ts.errorLog(
        ts.methodMessages_errorMessage(
          this.browserWindowAfterClick.name,
          __filename.split(__dirname + "/").pop(),
          error
        )
      );
    }
  }

  /**
   * @description               This function is responsible for selecting an element and verifying that the element is ready to be used.
   * @param locatorOrElement    Provide a locator (string) or element (object). The method uses a mechanism to use a locator (string) and an element (object). That is useful if we want to provide just a locator or give the whole element (in cases when we want to use this method with iFrames or want to use the method with other browser windows).
   * @param timeoutPeriod       Optional. Provide the time out in miliseconds.
   * @return                    We are returning the element.
   * @type                      The type is set to: "Promise<any>".
   * @usage                     - Usage 1: Use the method by providing a locator parameter and timeout period.
   *                              {constructorKeyword}.element({locator}, {timeout});
   *                            - Usage 2: Use the method by providing a locator parameter without timeout period.
   *                              {constructorKeyword}.element({locator});
   *                            - Usage 3: Use the method by providing an element parameter and timeout period.
   *                              {constructorKeyword}.element({element}, {timeout});
   *                            - Usage 4: Use the method by providing an element parameter without timeout period.
   *                              {constructorKeyword}.element({element});
   * @example                   Example 1: Provide the locator and timeout.
   *                              let elementName: any = page.locator("#id");
   *                              await dsl.element(elementName, 10000);
   *                            Example 2: Provide the locator without the timeout.
   *                              let elementName: any = page.locator("#id");
   *                              await dsl.element(elementName);
   *                            Example 3: Provide the element and timeout.
   *                              await dsl.element("#id", 10000);
   *                            Example 4: Provide the element without timeout.
   *                               await dsl.element("#id");
   */
  async element(locatorOrElement: any, timeoutPeriod?: number): Promise<any> {
    try {
      // Create the method steps here. Describe the custom command in this "try" statement (Domain Specific Language).

      let element: any; // Declare an internal variable for assigning the element value.
      // If the provided value is a string, this is just a selector.
      if (typeof locatorOrElement === "string") {
        // We need to transform this selector into an element.
        element = this.page.locator(locatorOrElement);
      }
      // If the provided value is an object, this is the whole element.
      else if (
        typeof locatorOrElement === "object" ||
        locatorOrElement instanceof Object
      ) {
        // So we don't need to do anything else unique.
        element = locatorOrElement;
      }
      // Unit test.
      else {
        ts.errorLog(
          "You have entered a not supported data type. Please provide a locator (string) or element (object)." +
            ts.methodMessages_errorMessage2(
              this.element.name,
              __filename.split(__dirname + "/").pop()
            )
        );
      }
      // Focus on the element.
      await element.focus();
      // Wait for the element to be visible.
      await element.waitFor({ state: "visible", timeout: timeoutPeriod });
      // Verify that the element is visible.
      await expect(element).toBeVisible({
        timeout: timeoutPeriod,
      });
      // Verify that the element is not hidden.
      await expect(element).not.toBeHidden({
        timeout: timeoutPeriod,
      });
      // Verify that the element is enabled.
      await expect(element).toBeEnabled({
        timeout: timeoutPeriod,
      });
      // Verify that the element is not disabled.
      await expect(element).not.toBeDisabled({
        timeout: timeoutPeriod,
      });
      // Verify that the element is the only one in the DOM tree.
      await expect(element).toHaveCount(1, {
        timeout: timeoutPeriod,
      });

      // Add the information message.
      if (timeoutPeriod == null) {
        ts.informLog(
          ts.methodMessages_informMessage(
            config.beginInformMessage + "The element was selected."
          )
        );
      } else {
        ts.informLog(
          ts.methodMessages_informMessage(
            config.beginInformMessage +
              "The element was selected. Timeout was set to: " +
              timeoutPeriod +
              " milliseconds."
          )
        );
      }

      // Return the selected element.
      return element;
    } catch (error) {
      // Unit Test.
      // Create the error log and show it to the UI. Show the function name, the class where the function is located and the cached error.
      ts.errorLog(
        ts.methodMessages_errorMessage(
          this.element.name,
          __filename.split(__dirname + "/").pop(),
          error
        )
      );
    }
  }

  /**
   * @description                   This method gets the attribute value of an element.
   * @param locatorOrElement        Provide a locator (string) or element (object). The method uses a mechanism to use a locator (string) and an element (object). That is useful if we want to provide just a locator or give the whole element (in cases when we want to use this method with iFrames or want to use the method with other browser windows).
   * @param attributeName           Provide the attribute name.
   * @param expectedAttributeValue  Optional. Provide the expected attribute value.
   * @type                          The type is set to: "Promise<any>".
   * @return                        The method returns the attribute value.
   * @usage                         - Usage 1: Use the method by providing a locator parameter of an element we want to inspect, providing an attribute name and expected attribute value.
   *                                  {constructorKeyword}.getAttribute({locator}, {attribute-name}, {expected-attribute-value});
   *                                - Usage 2: Use the method by providing a locator parameter of an element we want to inspect, providing an attribute name without expected attribute value.
   *                                  {constructorKeyword}.getAttribute({locator}, {attribute-name});
   *                                - Usage 3: Use the method by providing an element parameter we want to inspect, providing an attribute name and expected attribute value.
   *                                  {constructorKeyword}.getAttribute({element}, {attribute-name}, {expected-attribute-value});
   *                                - Usage 4: Use the method by providing an element parameter we want to inspect, providing an attribute name without expected attribute value.
   *                                  {constructorKeyword}.getAttribute({element}, {attribute-name});
   * @example                       Example 1: Provide the locator, attribute name and expected attribute value.
   *                                  await dsl.getAttribute("#id", "attribute-name", "expected-attribute-value");
   *                                Example 2: Provide the locator, attribute name without expected attribute value.
   *                                  let attribute = await dsl.getAttribute("#id", "attribute-name");
   *                                  await expect(attribute).toEqual("expected-attribute-value");
   *                                Example 3: Provide the element, attribute name and expected attribute value.
   *                                  let inspectedElement: any = page.locator("#id");
   *                                  await dsl.getAttribute(inspectedElement, "attribute-name", "expected-attribute-value");
   *                                Example 4: Provide the element, attribute name without expected attribute value.
   *                                  let inspectedElement: any = page.locator("#id");
   *                                  let attribute = await dsl.getAttribute(inspectedElement, "attribute-name");
   *                                  await expect(attribute).toEqual("expected-attribute-value");
   */
  async getAttribute(
    locatorOrElement: string,
    attributeName: string,
    expectedAttributeValue?: string
  ): Promise<any> {
    try {
      // Create the method steps here. Describe the custom command in this "try" statement (Domain Specific Language).
      // Assign the element to a variable.
      let element = await this.element(locatorOrElement, config.elementTimeOut);
      // Get the attribute value from the element.
      let attributeValue = await element.getAttribute(attributeName);
      // If the expected attribute value parameter is provided - verify that the inspected attribute value is correct.
      if (expectedAttributeValue != null) {
        expect(await attributeValue).toEqual(expectedAttributeValue);
      }

      // Add the information message.
      ts.informLog(
        ts.methodMessages_informMessage(
          config.beginInformMessage +
            "The automated test reads the attribute value from the used element. The attribute value is: '" +
            (await attributeValue) +
            "'."
        )
      );

      // Return the attribute value.
      return await attributeValue;
    } catch (error) {
      // Unit Test.
      // Create the error log and show it to the UI. Show the function name, the class where the function is located and the cached error.
      ts.errorLog(
        ts.methodMessages_errorMessage(
          this.getAttribute.name,
          __filename.split(__dirname + "/").pop(),
          error
        )
      );
    }
  }

  /**
   * @description               This method gets a text from an element that contains the text.
   * @param locatorOrElement    Provide a locator (string) or element (object). The method uses a mechanism to use a locator (string) and an element (object). That is useful if we want to provide just a locator or give the whole element (in cases when we want to use this method with iFrames or want to use the method with other browser windows).
   * @param expectedTextValue   Optional. Provide a string value to verify that the inspected text is like provided parameter (expected value).
   * @type                      The type of this method is set to "Promise<any>".
   * @return                    We return the text (string) value we read from the inspected element.
   * @usage                     - Usage 1: Use the method by providing a locator parameter and expected text value.
   *                              {constructorKeyword}.getInnerText({locator}, "expected text value");
   *                            - Usage 2: Use the method by providing a locator parameter without expected text value.
   *                              {constructorKeyword}.getInnerText({locator});
   *                            - Usage 3: Use the method by providing an element parameter and expected text value.
   *                              {constructorKeyword}.getInnerText({element}, "expected text value");
   *                            - Usage 4: Use the method by providing a element parameter without expected text value.
   *                              {constructorKeyword}.getInnerText({element});
   * @example                   Example 1: Provide the locator and expected text value.
   *                              await dsl.getInnerText("#id", "expected text value");
   *                            Example 2: Provide the locator without expected text value.
   *                              dsl.getInnerText("#id");
   *                            Example 3: Provide the element and expected text value.
   *                              let elementName = await dsl.element("#id", 10000);
   *                              await dsl.getInnerText(elementName, "expected text value");
   *                            Example 4: Provide the element without expected text value.
   *                              let elementName = await dsl.element("#id", 10000);
   *                              await dsl.getInnerText(elementName);
   */
  async getInnerText(
    locatorOrElement: any,
    expectedTextValue?: string
  ): Promise<any> {
    try {
      // Create the method steps here. Describe the custom command in this "try" statement (Domain Specific Language).

      let element: any; // Declare an internal variable for assigning the element value.
      // If the provided value is a string, this is just a selector.
      if (typeof locatorOrElement === "string") {
        // We need to transform this selector into an element.
        element = this.page.locator(locatorOrElement);
      }
      // If the provided value is an object, this is the whole element.
      else if (
        typeof locatorOrElement === "object" ||
        locatorOrElement instanceof Object
      ) {
        // So we don't need to do anything else unique.
        element = locatorOrElement;
      }
      // Unit test.
      else {
        ts.errorLog(
          "You have entered a not supported data type. Please provide a locator (string) or element (object)." +
            ts.methodMessages_errorMessage2(
              this.getInnerText.name,
              __filename.split(__dirname + "/").pop()
            )
        );
      }
      // Call this method, to verify that the element is present and it is ready for usage.
      await this.element(element, config.elementTimeOut);
      // Get the text of an inspected element and assign it to a variable.
      let elementTextValue = (await element.innerText()).valueOf();

      // Make a verification. If there is provided string for the expected value parameter - assert to verify that the inspected element contains the exact text.
      if (expectedTextValue != null) {
        expect(elementTextValue).toEqual(expectedTextValue);
      }

      // Add the information message.
      ts.informLog(
        ts.methodMessages_informMessage(
          config.beginInformMessage +
            "The automated test reads the element text value. The element text value is: '" +
            (await elementTextValue) +
            "'."
        )
      );

      // Return the containing element text.
      return await elementTextValue;
    } catch (error) {
      // Unit Test.
      // Create the error log and show it to the UI. Show the function name, the class where the function is located and the cached error.
      ts.errorLog(
        ts.methodMessages_errorMessage(
          this.getInnerText.name,
          __filename.split(__dirname + "/").pop(),
          error
        )
      );
    }
  }

  /**
   * @description               This method gets all texts from an element that contains the text. We are using the Playwright method "allTextContents()". This (our) method returns a list with values. In our method - we are using only the first value from the list. So you need to give a selector (or element) with only one coordinate in the DOM tree.
   * @param locatorOrElement    Provide a locator (string) or element (object). The method uses a mechanism to use a locator (string) and an element (object). That is useful if we want to provide just a locator or give the whole element (in cases when we want to use this method with iFrames or want to use the method with other browser windows).
   * @param expectedTextValue   Optional. Provide a string value to verify that the inspected text is like provided parameter (expected value).
   * @type                      The type of this method is set to "Promise<any>".
   * @return                    We return the text (string) value we read from the inspected element.
   * @usage                     - Usage 1: Use the method by providing a locator parameter and expected text value.
   *                              {constructorKeyword}.getText({locator}, "expected text value");
   *                            - Usage 2: Use the method by providing a locator parameter without expected text value.
   *                              {constructorKeyword}.getText({locator});
   *                            - Usage 3: Use the method by providing an element parameter and expected text value.
   *                              {constructorKeyword}.getText({element}, "expected text value");
   *                            - Usage 4: Use the method by providing a element parameter without expected text value.
   *                              {constructorKeyword}.getText({element});
   * @example                   Example 1: Provide the locator and expected text value.
   *                              await dsl.getText("#id", "expected text value");
   *                            Example 2: Provide the locator without expected text value.
   *                              dsl.getText("#id");
   *                            Example 3: Provide the element and expected text value.
   *                              let elementName = await dsl.element("#id", 10000);
   *                              await dsl.getText(elementName, "expected text value");
   *                            Example 4: Provide the element without expected text value.
   *                              let elementName = await dsl.element("#id", 10000);
   *                              await dsl.getText(elementName);
   */
  async getText(
    locatorOrElement: any,
    expectedTextValue?: string
  ): Promise<any> {
    try {
      // Create the method steps here. Describe the custom command in this "try" statement (Domain Specific Language).

      let element: any; // Declare an internal variable for assigning the element value.
      // If the provided value is a string, this is just a selector.
      if (typeof locatorOrElement === "string") {
        // We need to transform this selector into an element.
        element = this.page.locator(locatorOrElement);
      }
      // If the provided value is an object, this is the whole element.
      else if (
        typeof locatorOrElement === "object" ||
        locatorOrElement instanceof Object
      ) {
        // So we don't need to do anything else unique.
        element = locatorOrElement;
      }
      // Unit test.
      else {
        ts.errorLog(
          "You have entered a not supported data type. Please provide a locator (string) or element (object)." +
            ts.methodMessages_errorMessage2(
              this.getText.name,
              __filename.split(__dirname + "/").pop()
            )
        );
      }
      // Call this method, to verify that the element is present and it is ready for usage.
      await this.element(element, config.elementTimeOut);

      // Get the text of an inspected element and assign it to a variable. As you can see, we are getting the first value from the list because "all text contents" return an array list.
      let elementTextValue: string = await (await element.allTextContents())[0];

      // Make a verification. If there is provided string for the expected value parameter - assert to verify that the inspected element contains the exact text.
      if (expectedTextValue != null) {
        expect(elementTextValue).toEqual(expectedTextValue);
      }

      // Add the information message.
      ts.informLog(
        ts.methodMessages_informMessage(
          config.beginInformMessage +
            "The automated test reads the element text value. The element text value is: '" +
            elementTextValue +
            "'."
        )
      );

      // Return the containing element text.
      return elementTextValue;
    } catch (error) {
      // Unit Test.
      // Create the error log and show it to the UI. Show the function name, the class where the function is located and the cached error.
      ts.errorLog(
        ts.methodMessages_errorMessage(
          this.getText.name,
          __filename.split(__dirname + "/").pop(),
          error
        )
      );
    }
  }

  /**
   * @description               This method gets all texts from an element that contains the text. We are using the Playwright method "allTextContents()". This (our) method returns a list with values.
   * @param locatorOrElement    Provide a locator (string) or element (object). The method uses a mechanism to use a locator (string) and an element (object). That is useful if we want to provide just a locator or give the whole element (in cases when we want to use this method with iFrames or want to use the method with other browser windows).
   * @param sequenceNumber      Provide the sequence number of the list, that we want to inspect.
   * @param expectedTextValue   Optional. Provide a string value to verify that the inspected text is like provided parameter (expected value).
   * @type                      The type of this method is set to "Promise<any>".
   * @return                    We return the text (string) value we read from the inspected element.
   * @usage                     - Usage 1: Use the method by providing a locator parameter, sequence number and expected text value.
   *                              {constructorKeyword}.getAllTexts({locator}, {number} "expected text value");
   *                            - Usage 2: Use the method by providing a locator parameter, sequence number without expected text value.
   *                              {constructorKeyword}.getAllTexts({locator}, {number});
   *                            - Usage 3: Use the method by providing an element parameter, sequence number and expected text value.
   *                              {constructorKeyword}.getAllTexts({element}, {number}, "expected text value");
   *                            - Usage 4: Use the method by providing a element parameter, sequence number without expected text value.
   *                              {constructorKeyword}.getAllTexts({element}, {number});
   * @example                   Example 1: Provide the locator, sequence number and expected text value.
   *                              await dsl.getAllTexts("#id", 0, "expected text value");
   *                            Example 2: Provide the locator, sequence number without expected text value.
   *                              dsl.getAllTexts("#id", 1);
   *                            Example 3: Provide the element, sequence number and expected text value.
   *                              let elementName = await dsl.element("#id", 10000);
   *                              await dsl.getAllTexts(elementName, 2, "expected text value");
   *                            Example 4: Provide the element, sequence number without expected text value.
   *                              let elementName = await dsl.element("#id", 10000);
   *                              await dsl.getAllTexts(elementName, 3);
   */
  async getAllTexts(
    locatorOrElement: any,
    sequenceNumber: number,
    expectedTextValue?: string
  ): Promise<any> {
    try {
      // Create the method steps here. Describe the custom command in this "try" statement (Domain Specific Language).

      let element: any; // Declare an internal variable for assigning the element value.
      // If the provided value is a string, this is just a selector.
      if (typeof locatorOrElement === "string") {
        // We need to transform this selector into an element.
        element = this.page.locator(locatorOrElement);
      }
      // If the provided value is an object, this is the whole element.
      else if (
        typeof locatorOrElement === "object" ||
        locatorOrElement instanceof Object
      ) {
        // So we don't need to do anything else unique.
        element = locatorOrElement;
      }
      // Unit test.
      else {
        ts.errorLog(
          "You have entered a not supported data type. Please provide a locator (string) or element (object)." +
            ts.methodMessages_errorMessage2(
              this.getAllTexts.name,
              __filename.split(__dirname + "/").pop()
            )
        );
      }
      // Call this method, to verify that the element is present and it is ready for usage.
      await this.element(element, config.elementTimeOut);

      let listLenght = await (await element.allTextContents()).length;

      // Check if the provided number is contained in the list length.
      if (sequenceNumber <= (await listLenght)) {
        // Get the text of an inspected element and assign it to a variable. As you can see, we are getting the first value from the list because "all text contents" return an array list.
        let elementTextValue: string = await (await element.allTextContents())[sequenceNumber];

        // Make a verification. If there is provided string for the expected value parameter - assert to verify that the inspected element contains the exact text.
        if (expectedTextValue != null) {
          expect(elementTextValue).toEqual(expectedTextValue);
        }

        // Add the information message.
        ts.informLog(
          ts.methodMessages_informMessage(
            config.beginInformMessage +
              "The automated test reads the element text value. The element text value is: '" +
              elementTextValue +
              "'."
          )
        );

        // Return the containing element text.
        return elementTextValue;
      }
      // Else - we need to provide a valid number.
      else {
        ts.errorLog(
          "It seems that you call value that doesn't exist. The list size is '" +
            (await listLenght) +
            "'. Please provide number between 0 and " +
            (await listLenght) +
            "."
        );
      }
    } catch (error) {
      // Unit Test.
      // Create the error log and show it to the UI. Show the function name, the class where the function is located and the cached error.
      ts.errorLog(
        ts.methodMessages_errorMessage(
          this.getAllTexts.name,
          __filename.split(__dirname + "/").pop(),
          error
        )
      );
    }
  }

  /**
   * @description               This method sends a text to the input text element.
   * @param locatorOrElement    Provide a locator (string) or element (object). The method uses a mechanism to use a locator (string) and an element (object). That is useful if we want to provide just a locator or give the whole element (in cases when we want to use this method with iFrames or want to use the method with other browser windows).
   * @param text                Provide the text that we will send to the input text element.
   * @type                      The type of this method is set to "Promise<void>".
   * @usage                     - Usage 1: Use the method by providing a locator parameter.
   *                              {constructorKeyword}.sendKeys({locator}, "the text we send");
   *                            - Usage 2: Use the method by providing an element parameter.
   *                              {constructorKeyword}.sendKeys({element}, "the text we send");
   * @example                   Example 1: Provide the locator and the text value.
   *                              await dsl.sendKeys("#id", "the text we send");
   *                            Example 2: Provide the element and the text value.
   *                              let elementName: any = dsl.element("#userName");
   *                              await dsl.sendKeys(await elementName, "test");
   */
  async sendKeys(locatorOrElement: any, text: string): Promise<void> {
    try {
      // Create the method steps here. Describe the custom command in this "try" statement (Domain Specific Language).

      let element: any; // Declare an internal variable for assigning the element value.
      // If the provided value is a string, this is just a selector.
      if (typeof locatorOrElement === "string") {
        // We need to transform this selector into an element.
        element = this.page.locator(locatorOrElement);
      }
      // If the provided value is an object, this is the whole element.
      else if (
        typeof locatorOrElement === "object" ||
        locatorOrElement instanceof Object
      ) {
        // So we don't need to do anything else unique.
        element = locatorOrElement;
      }
      // Unit test.
      else {
        ts.errorLog(
          "You have entered a not supported data type. Please provide a locator (string) or element (object)." +
            ts.methodMessages_errorMessage2(
              this.sendKeys.name,
              __filename.split(__dirname + "/").pop()
            )
        );
      }

      // Call this method, to verify that the element is present and it is ready for usage.
      await this.element(element, config.elementTimeOut);
      // Send Ctrl+A to the element. This will work for Windows and Linux. We are using this to select all containing text inside inspected input text element.
      await this.page.keyboard.press("Control+A");
      // Send Meta+A to the element. This will work for macOS. We are using this to select all containing text inside inspected input text element.
      await this.page.keyboard.press("Meta+A");

      // Fill the element with text.
      await element.fill(text);
      // Verify that the input text element contains the sent text data.
      expect(await element.inputValue()).toEqual(text);

      // Add the information message.
      ts.informLog(
        ts.methodMessages_informMessage(
          config.beginInformMessage +
            "The automated test fill with text inside the input text element with value: '" +
            text +
            "'."
        )
      );
    } catch (error) {
      // Unit Test.
      // Create the error log and show it to the UI. Show the function name, the class where the function is located and the cached error.
      ts.errorLog(
        ts.methodMessages_errorMessage(
          this.sendKeys.name,
          __filename.split(__dirname + "/").pop(),
          error
        )
      );
    }
  }

  /**
   * @description                       This method sends a text to the input text element.
   * @param locatorOrElement            Provide a locator (string) or element (object). The method uses a mechanism to use a locator (string) and an element (object). That is useful if we want to provide just a locator or give the whole element (in cases when we want to use this method with iFrames or want to use the method with other browser windows).
   * @param text                        Provide the text that we will send to the input text element.
   * @param loctorOrElementVerificator  Optional. Provide the verification element. If you don't provide this parameter - the used element will be used for verification.
   * @type                              The type of this method is set to "Promise<void>".
   * @usage                             - Usage 1: Use the method by providing a locator parameter.
   *                                      {constructorKeyword}.sendKeys_MultySelect({locator}, "the text we send", {locator});
   *                                    - Usage 2: Use the method by providing an element parameter.
   *                                      {constructorKeyword}.sendKeys_MultySelect({element}, "the text we send", {element});
   * @example                           Example 1: Provide the locator and the text value.
   *                                      await dsl.sendKeys_MultySelect("#id", "the text we send", "#verificatorId");
   *                                    Example 2: Provide the element and the text value.
   *                                      let elementName: any = dsl.element("#id");
   *                                      let elementVerificatorName: any = dsl.element("#verificatorId");
   *                                      await dsl.sendKeys_MultySelect(await elementName, "test", await elementVerificatorName);
   */
  async sendKeys_MultySelect(
    locatorOrElement: any,
    text: string,
    loctorOrElementVerificator?: any
  ): Promise<void> {
    try {
      // Create the method steps here. Describe the custom command in this "try" statement (Domain Specific Language).

      let element: any; // Declare an internal variable for assigning the element value.
      let elementVerificator: any; // Declare an internal variable for assigning the element value.
      // If the provided value is a string, this is just a selector.
      if (typeof locatorOrElement === "string") {
        // We need to transform this selector into an element.
        element = this.page.locator(locatorOrElement);
      }
      // If the provided value is an object, this is the whole element.
      else if (
        typeof locatorOrElement === "object" ||
        locatorOrElement instanceof Object
      ) {
        // So we don't need to do anything else unique.
        element = locatorOrElement;
      }
      // Unit test.
      else {
        ts.errorLog(
          "You have entered a not supported data type. Please provide a locator (string) or element (object)." +
            ts.methodMessages_errorMessage2(
              this.sendKeys_MultySelect.name,
              __filename.split(__dirname + "/").pop()
            )
        );
      }

      // If the provided value is a string, this is just a selector.
      if (
        typeof loctorOrElementVerificator === "string" &&
        loctorOrElementVerificator != null
      ) {
        // We need to transform this selector into an element.
        elementVerificator = this.page.locator(loctorOrElementVerificator);
      }
      // If the provided value is an object, this is the whole element.
      else if (
        typeof loctorOrElementVerificator === "object" ||
        (loctorOrElementVerificator instanceof Object &&
          loctorOrElementVerificator != null)
      ) {
        // So we don't need to do anything else unique.
        elementVerificator = loctorOrElementVerificator;
      } else if (loctorOrElementVerificator == null) {
        // Do nothing, because the parameter is optional.
      }
      // Unit test.
      else {
        ts.errorLog(
          "You have entered a not supported data type. Please provide a locator (string) or element (object)." +
            ts.methodMessages_errorMessage2(
              this.sendKeys_MultySelect.name,
              __filename.split(__dirname + "/").pop()
            )
        );
      }

      // Call this method, to verify that the element is present and it is ready for usage.
      await this.element(element, config.elementTimeOut);
      // Send Ctrl+A to the element. This will work for Windows and Linux. We are using this to select all containing text inside inspected input text element.
      await this.page.keyboard.press("Control+A");
      // Send Meta+A to the element. This will work for macOS. We are using this to select all containing text inside inspected input text element.
      await this.page.keyboard.press("Meta+A");

      // Fill the element with text.
      await element.fill(text);
      // Press the "Enter" key of the keyboard.
      await this.page.keyboard.press("Enter");
      // Verify that the input text element contains the sent text data.
      // If the element we use is the same as the element, that will verify the operation was compleated correctly. Or if we don't provide a verification element - because it is the same as a used element.
      if (
        locatorOrElement == loctorOrElementVerificator ||
        loctorOrElementVerificator == null
      ) {
        let verificateValueIsCorrect: string = await (
          await element.allTextContents()
        )[0];
        expect(verificateValueIsCorrect).toEqual(text);
      }
      // If we provide different element for verificaiton.
      else {
        let verificateValueIsCorrect: string = await (
          await elementVerificator.allTextContents()
        )[0];
        expect(verificateValueIsCorrect).toEqual(text);
      }

      // Add the information message.
      ts.informLog(
        ts.methodMessages_informMessage(
          config.beginInformMessage +
            "The automated test fill with text inside the multi-select element with the value: '" +
            text +
            "'."
        )
      );
    } catch (error) {
      // Unit Test.
      // Create the error log and show it to the UI. Show the function name, the class where the function is located and the cached error.
      ts.errorLog(
        ts.methodMessages_errorMessage(
          this.sendKeys_MultySelect.name,
          __filename.split(__dirname + "/").pop(),
          error
        )
      );
    }
  }

  /**
   * @description               This method checks radio buttons or checkboxes.
   * @param locator             Provide the locator of the element that we want to check.
   * @param checkOrClickAction  Optional. If we don't provide a value for this parameter, the method will use the "click" action for checking the element. Provide a "check" or "click" value to choose the action we will use for checking the radio button or checkbox. We can checks radio buttons and checkboxes using two action methods - "check" and "click".
   * @type                      The type of this method is set to "Promise<void>".
   * @usage                     - Usage 1: Use the method by providing a locator parameter only.
   *                              {constructorKeyword}.checkRadioButtonCheckBox({locator});
   *                            - Usage 2: Use the method by providing a locator parameter and "check" action.
   *                              {constructorKeyword}.checkRadioButtonCheckBox({locator}, "check");
   *                            - Usage 3: Use the method by providing a locator parameter and "click" action.
   *                              {constructorKeyword}.checkRadioButtonCheckBox({locator}, "click");
   * @example                   Example 1: Provide the locator only.
   *                              await dsl.checkRadioButtonCheckBox("#id");
   *                            Example 2: Provide the locator and "check" action.
   *                              await dsl.checkRadioButtonCheckBox("#id", "check");
   *                            Example 3: Provide the locator and "click" action.
   *                              await dsl.checkRadioButtonCheckBox("#id", "click");

   */
  async checkRadioButtonCheckBox(
    locator: string,
    checkOrClickAction?: string
  ): Promise<void> {
    try {
      // Create the method steps here. Describe the custom command in this "try" statement (Domain Specific Language).
      // Create an element.
      let element = await this.element(locator, config.elementTimeOut);
      // Verify the element is not checked.
      expect(await this.page.isChecked(locator)).toBeFalsy();
      await expect(element).not.toBeChecked();
      // If the checkOrClickAction value is not null.
      if (checkOrClickAction != null) {
        // If the provided action is "check".
        if (checkOrClickAction == "check") {
          // Check the element using "check" action.
          await this.page.check(locator, { force: true });
        }
        // If the provided action is "click".
        else if (checkOrClickAction == "click") {
          // Check the element using "click" action.
          await this.page.click(locator, { force: true });
        }
        // Unit test.
        else {
          ts.errorLog(
            "You provided the wrong action data. If you want to provide data for this parameter, please provide only the 'check' or 'click' value for the 'checkOrClickAction' parameter." +
              ts.methodMessages_errorMessage2(
                this.checkRadioButtonCheckBox.name,
                __filename.split(__dirname + "/").pop()
              )
          );
        }
      } else {
        // Check the element using "click" action.
        await this.page.click(locator, { force: true });
      }
      // Verify the element is checked.
      expect(await this.page.isChecked(locator)).toBeTruthy();
      await expect(element).toBeChecked();

      // Add the information message.
      ts.informLog(
        ts.methodMessages_informMessage(
          config.beginInformMessage + "The automated test checks the element."
        )
      );
    } catch (error) {
      // Unit Test.
      // Create the error log and show it to the UI. Show the function name, the class where the function is located and the cached error.
      ts.errorLog(
        ts.methodMessages_errorMessage(
          this.checkRadioButtonCheckBox.name,
          __filename.split(__dirname + "/").pop(),
          error
        )
      );
    }
  }

  /**
   * @description               This method unchecks radio buttons or checkboxes.
   * @param locator             Provide the locator of the element that we want to uncheck.
   * @param checkOrClickAction  Optional. If we don't provide a value for this parameter, the method will use the "click" action for checking the element. Provide a "uncheck" or "click" value to choose the action we will use for unchecking the checkbox. We can unchecks checkboxes using two action methods - "uncheck" and "click".
   * @type                      The type of this method is set to "Promise<void>".
   * @usage                     - Usage 1: Use the method by providing a locator parameter only.
   *                              {constructorKeyword}.checkRadioButtonCheckBox({locator});
   *                            - Usage 2: Use the method by providing a locator parameter and "uncheck" action.
   *                              {constructorKeyword}.checkRadioButtonCheckBox({locator}, "uncheck");
   *                            - Usage 3: Use the method by providing a locator parameter and "click" action.
   *                              {constructorKeyword}.checkRadioButtonCheckBox({locator}, "click");
   * @example                   Example 1: Provide the locator only.
   *                              await dsl.checkRadioButtonCheckBox("#id");
   *                            Example 2: Provide the locator and "uncheck" action.
   *                              await dsl.checkRadioButtonCheckBox("#id", "uncheck");
   *                            Example 3: Provide the locator and "click" action.
   *                              await dsl.checkRadioButtonCheckBox("#id", "click");
   */
  async unCheckBox(
    locator: string,
    checkOrClickAction?: string
  ): Promise<void> {
    try {
      // Create the method steps here. Describe the custom command in this "try" statement (Domain Specific Language).
      // Create an element.
      let element = await this.element(locator, config.elementTimeOut);
      // Verify the element is checked.
      expect(await this.page.isChecked(locator)).toBeTruthy();
      await expect(element).toBeChecked();
      // If the checkOrClickAction value is not null.
      if (checkOrClickAction != null) {
        // If the provided action is "uncheck".
        if (checkOrClickAction == "uncheck") {
          // Check the element using "uncheck" action.
          await this.page.uncheck(locator, { force: true });
        }
        // If the provided action is "click".
        else if (checkOrClickAction == "click") {
          // Check the element using "click" action.
          await this.page.click(locator, { force: true });
        }
        // Unit test.
        else {
          ts.errorLog(
            "You provided the wrong action data. If you want to provide data for this parameter, please provide only the 'uncheck' or 'click' value for the 'checkOrClickAction' parameter." +
              ts.methodMessages_errorMessage2(
                this.unCheckBox.name,
                __filename.split(__dirname + "/").pop()
              )
          );
        }
      } else {
        // Check the element using "click" action.
        await this.page.click(locator, { force: true });
      }
      // Verify the element is not checked.
      expect(await this.page.isChecked(locator)).toBeFalsy();
      await expect(element).not.toBeChecked();

      // Add the information message.
      ts.informLog(
        ts.methodMessages_informMessage(
          config.beginInformMessage +
            "The automated test unchecks the check box element."
        )
      );
    } catch (error) {
      // Unit Test.
      // Create the error log and show it to the UI. Show the function name, the class where the function is located and the cached error.
      ts.errorLog(
        ts.methodMessages_errorMessage(
          this.unCheckBox.name,
          __filename.split(__dirname + "/").pop(),
          error
        )
      );
    }
  }

  /**
   * @description               This method makes a double-click mouse action over an element.
   * @param locator             Provide the locator of the element that we will use.
   * @type                      The type of this method is set to "Promise<void>".
   * @usage                     - Usage: Use the method by providing a locator parameter only.
   *                              {constructorKeyword}.doubleClick({locator});
   * @exaple                    Example: Provide the locator.
   *                              await dsl.doubleClick("#id");
   */
  async doubleClick(locator: string): Promise<void> {
    try {
      // Create the method steps here. Describe the custom command in this "try" statement (Domain Specific Language).
      // Call this method, to verify that the element is present and it is ready for usage.
      await this.element(locator, config.elementTimeOut);
      // Make double-click mouse action over selected element.
      await this.page.dblclick(locator, { force: true });

      // Add the information message.
      ts.informLog(
        ts.methodMessages_informMessage(
          config.beginInformMessage +
            "The automated test makes the double mouse (left) click over the element."
        )
      );
    } catch (error) {
      // Unit Test.
      // Create the error log and show it to the UI. Show the function name, the class where the function is located and the cached error.
      ts.errorLog(
        ts.methodMessages_errorMessage(
          this.doubleClick.name,
          __filename.split(__dirname + "/").pop(),
          error
        )
      );
    }
  }

  /**
   * @description               This method makes a right-click mouse action over an element.
   * @param locator             Provide the locator of the element that we will use.
   * @type                      The type of this method is set to "Promise<void>".
   * @usage                     - Usage: Use the method by providing a locator parameter only.
   *                              {constructorKeyword}.rightClick({locator});
   * @exaple                    Example: Provide the locator.
   *                              await dsl.rightClick("#id");
   */
  async rightClick(locator: string): Promise<void> {
    try {
      // Create the method steps here. Describe the custom command in this "try" statement (Domain Specific Language).
      // Call this method, to verify that the element is present and it is ready for usage.
      await this.element(locator, config.elementTimeOut);
      // Make right-click mouse action over selected element.
      await this.page.click(locator, {
        button: "right",
        force: true,
      });

      // Add the information message.
      ts.informLog(
        ts.methodMessages_informMessage(
          config.beginInformMessage +
            "The automated test makes the right click with the mouse over the element."
        )
      );
    } catch (error) {
      // Unit Test.
      // Create the error log and show it to the UI. Show the function name, the class where the function is located and the cached error.
      ts.errorLog(
        ts.methodMessages_errorMessage(
          this.rightClick.name,
          __filename.split(__dirname + "/").pop(),
          error
        )
      );
    }
  }

  /**
   * @description               This method clicks on an element.
   * @param locator             Provide the locator of the element that we want to click.
   * @type                      The type of this method is set to "Promise<void>".
   * @usage                     - Usage: Use the method by providing a locator parameter.
   *                              {constructorKeyword}.click({locator});
   * @example                   Example: Provide the locator.
   *                              await dsl.click("#id");
   */
  async click(locator: string): Promise<void> {
    try {
      // Create the method steps here. Describe the custom command in this "try" statement (Domain Specific Language).
      // Call this method, to verify that the element is present and it is ready for usage.
      await this.element(locator, config.elementTimeOut);

      // Click over the element using the locator.
      await this.page.click(locator, { force: true });

      // Add the information message.
      ts.informLog(
        ts.methodMessages_informMessage(
          config.beginInformMessage +
            "The automated test makes the left click with the mouse over the element."
        )
      );
    } catch (error) {
      // Unit Test.
      // Create the error log and show it to the UI. Show the function name, the class where the function is located and the cached error.
      ts.errorLog(
        ts.methodMessages_errorMessage(
          this.click.name,
          __filename.split(__dirname + "/").pop(),
          error
        )
      );
    }
  }

  /**
   * @description               This method hovers over the element.
   * @param locator             Provide the locator of the element that we want to hover.
   * @type                      The type of this method is set to "Promise<void>".
   * @usage                     - Usage: Use the method by providing a locator parameter.
   *                              {constructorKeyword}.hover({locator});
   * @example                   Example: Provide the locator.
   *                              await dsl.hover("#id");
   */
  async hover(locator: string): Promise<void> {
    try {
      // Create the method steps here. Describe the custom command in this "try" statement (Domain Specific Language).
      // Call this method, to verify that the element is present and it is ready for usage.
      await this.element(locator, config.elementTimeOut);
      // Hover over the element.
      await this.page.hover(locator, { force: true });

      // Add the information message.
      ts.informLog(
        ts.methodMessages_informMessage(
          config.beginInformMessage + "The automated test hovers the element."
        )
      );
    } catch (error) {
      // Unit Test.
      // Create the error log and show it to the UI. Show the function name, the class where the function is located and the cached error.
      ts.errorLog(
        ts.methodMessages_errorMessage(
          this.hover.name,
          __filename.split(__dirname + "/").pop(),
          error
        )
      );
    }
  }

  /**
   * @description               This method clicks over an element on the exact element position. Every element has size. We can click over the element on the exact position (in pixels)
   * @param locator             Provide the locator of the element that we want to hover.
   * @param xValue              Provide the position where we will click the element for X (horizontal) value.
   * @param yValue              Provide the position where we will click the element for Y (vertical) value.
   * @type                      The type of this method is set to "Promise<void>".
   * @usage                     - Usage: Use the method by providing a locator parameter and position for X and Y.
   *                              {constructorKeyword}.clickPosition({locator}, {integer number for x}, {integer number for y});
   * @example                   Example: Provide the locator and position where the click action should happen.
   *                              await dsl.clickPosition("#id", 12, 22);
   */
  async clickPosition(
    locator: string,
    xValue: number,
    yValue: number
  ): Promise<void> {
    try {
      // Create the method steps here. Describe the custom command in this "try" statement (Domain Specific Language).
      // Call this method, to verify that the element is present and it is ready for usage.
      await this.element(locator, config.elementTimeOut);
      // If the numbers are positive numbers...
      if (xValue > 0 || yValue > 0) {
        // ...click over the element on the exact position using the locator.
        await this.page.click(locator, {
          position: { x: xValue, y: yValue },
          force: true,
        });
      }
      // If the numbers are negative or it is 0.
      else if (xValue <= 0 || yValue <= 0) {
        ts.errorLog(
          "You entered a negative value. Please enter a positive integer value." +
            ts.methodMessages_errorMessage2(
              this.clickPosition.name,
              __filename.split(__dirname + "/").pop()
            )
        );
      }
      // If the numbers are not an integer.
      else if (!Number.isInteger(xValue) || !Number.isInteger(yValue)) {
        ts.errorLog(
          "You need to enter an integer value." +
            ts.methodMessages_errorMessage2(
              this.clickPosition.name,
              __filename.split(__dirname + "/").pop()
            )
        );
      }
      // Everything else...
      else {
        ts.errorLog(
          "You entered an invalid value. Please provide a positive integer number for two parameters." +
            ts.methodMessages_errorMessage2(
              this.clickPosition.name,
              __filename.split(__dirname + "/").pop()
            )
        );
      }

      // Add the information message.
      ts.informLog(
        ts.methodMessages_informMessage(
          config.beginInformMessage +
            "The automated test makes the left click with the mouse over the element on a specific position with coordinates: X:" +
            xValue +
            " and Y:" +
            yValue +
            "."
        )
      );
    } catch (error) {
      // Unit Test.
      // Create the error log and show it to the UI. Show the function name, the class where the function is located and the cached error.
      ts.errorLog(
        ts.methodMessages_errorMessage(
          this.clickPosition.name,
          __filename.split(__dirname + "/").pop(),
          error
        )
      );
    }
  }

  /**
   * @description               This method sends keyboard keys to the element.
   * @param locator             Provide the locator of the element that we want to use.
   * @param keyboardKey         Provide the key or combination of keys.
   * @type                      The type of this method is set to "Promise<void>".
   * @usage                     - Usage: Use the method by providing a locator parameter and keyboard key/s.
   *                              {constructorKeyword}.clickWithHoldingKeyboardKey({locator}, {keyboardKey/s});
   * @example                   Example: Provide the locator and keyboard key/s.
   *                              await dsl.clickWithHoldingKeyboardKey("#id", "Shift");
   *                              await dsl.clickWithHoldingKeyboardKey("#id", "Shift+A");
   */
  async clickWithHoldingKeyboardKey(
    locator: string,
    keyboardKey: "Alt" | "Control" | "Meta" | "Shift"
  ): Promise<void> {
    try {
      // Create the method steps here. Describe the custom command in this "try" statement (Domain Specific Language).
      // Call this method, to verify that the element is present and it is ready for usage.
      await this.element(locator, config.elementTimeOut);
      // Send keyboard key/s to inspected element.
      await this.page.click(locator, {
        modifiers: [keyboardKey],
        force: true,
      });

      // Add the information message.
      ts.informLog(
        ts.methodMessages_informMessage(
          config.beginInformMessage +
            "The automated test makes click with keyboard key/s using: '" +
            keyboardKey +
            "'."
        )
      );
    } catch (error) {
      // Unit Test.
      // Create the error log and show it to the UI. Show the function name, the class where the function is located and the cached error.
      ts.errorLog(
        ts.methodMessages_errorMessage(
          this.clickWithHoldingKeyboardKey.name,
          __filename.split(__dirname + "/").pop(),
          error
        )
      );
    }
  }

  /**
   * @description                                       This function downloads a file.
   * @param locator                                     Provide the locator of the element (button/hyperlink) that we want to use.
   * @param downloadFolderPathWithFileNameAndExtension  Optional. Provide the downloads folder path with the file name and file extension. If we don't provide this parameter, the automation will download and delete the file when the test is ready. We can use this approach to verify that the download process is working.
   * @type                                              The type of this method is set to "Promise<void>".
   * @usage                                             - Usage 1: Use the method by providing a button locator to force the downloading process and provide the destination path to download the file. Alert, ensure that you add the file name and extension to the destination folder path.
   *                                                      {constructorKeyword}.downloadFile({locator}, {destination path});
   *                                                    - Usage 2: Use the method by providing a button locator to force the downloading process without giving the destination path to download the file. We can use this approach only to verify that the download process is working as expected and the file is downloaded. The file will be deleted when the test is ready.
   *                                                      {constructorKeyword}.downloadFile({locator});
   * @example                                           Example 1: Provide the locator of a button that triggers the downloading process and the destination folder path where the automation will download the file. Alert, ensure that you add the file name and extension to the destination folder path.
   *                                                      await dsl.downloadFile("#id", "C:/download-folder/file.jpg");
   *                                                    Example 2: Provide the locator of a button that triggers the downloading process without the destination folder path where the automation will download the file.  We can use this approach only to verify that the download process is working as expected and the file is downloaded. The file will be deleted when the test is ready.
   *                                                      await dsl.downloadFile("#id");
   */
  async downloadFile(
    locator: string,
    downloadFolderPathWithFileNameAndExtension?: string
  ): Promise<void> {
    try {
      // Create the method steps here. Describe the custom command in this "try" statement (Domain Specific Language).
      // Call this method, to verify that the element is present and it is ready for usage.
      await this.element(locator);
      // Initialize the downloading process.
      let [download] = await Promise.all([
        // Start waiting for the download process.
        this.page.waitForEvent("download"),
        // Perform the action that initiates the download.
        this.page.locator(locator).click(),
      ]);
      // Wait for the download process to complete.
      if (downloadFolderPathWithFileNameAndExtension != null) {
        // Save downloaded file in specific path direcotry.
        await download.saveAs(downloadFolderPathWithFileNameAndExtension);
      } else if (downloadFolderPathWithFileNameAndExtension == null) {
        // Save downloaded files automatically. Alert the downloaded file will download with a random name, with no extension, and it will be deleted when the automation is stopped.
        await download.path();
      } else {
        ts.errorLog(
          "This error should never happen." +
            ts.methodMessages_errorMessage2(
              this.downloadFile.name,
              __filename.split(__dirname + "/").pop()
            )
        );
      }

      // Add the information message.
      if (downloadFolderPathWithFileNameAndExtension != null) {
        ts.informLog(
          ts.methodMessages_informMessage(
            config.beginInformMessage + "The automated test downloads a file."
          )
        );
      } else {
        ts.informLog(
          ts.methodMessages_informMessage(
            config.beginInformMessage +
              "The automated test downloads a file in the: '" +
              downloadFolderPathWithFileNameAndExtension +
              "'."
          )
        );
      }
    } catch (error) {
      // Unit Test.
      // Create the error log and show it to the UI. Show the function name, the class where the function is located and the cached error.
      ts.errorLog(
        ts.methodMessages_errorMessage(
          this.downloadFile.name,
          __filename.split(__dirname + "/").pop(),
          error
        )
      );
    }
  }

  /**
   * @description                                       This function uploads a file.
   * @param locator                                     Provide the locator of the element (button/hyperlink) that we want to use.
   * @param uploadFilePathWithFileNameAndExtension      Add the uploaded file path, including the file name and file extension.
   * @type                                              The type of this method is set to "Promise<void>".
   * @usage                                             - Usage: Use the method by providing a button locator to force the uploading process and provide the destination path of the uploading file. Alert, ensure that you add the file name and extension to the destination folder path.
   *                                                      {constructorKeyword}.uploadFile({locator}, {destination path});
   * @example                                           Example: Provide the locator of a button that triggers the uploading process and the destination folder path where the automation will download the file. Alert, ensure that you add the file name and extension to the destination folder path.
   *                                                      await dsl.uploadFile("#id", "C:/upload-folder/file.jpg");
   */
  async uploadFile(
    locator: string,
    uploadFilePathWithFileNameAndExtension: string
  ): Promise<void> {
    try {
      // Create the method steps here. Describe the custom command in this "try" statement (Domain Specific Language).
      // Call this method, to verify that the element is present and it is ready for usage.
      await this.element(locator);
      // Upload the file by providing the element locator and file path.
      await this.page.setInputFiles(
        locator,
        uploadFilePathWithFileNameAndExtension
      );

      // Add the information message.
      ts.informLog(
        ts.methodMessages_informMessage(
          config.beginInformMessage +
            "The automated test uploads a file successfully."
        )
      );
    } catch (error) {
      // Unit Test.
      // Create the error log and show it to the UI. Show the function name, the class where the function is located and the cached error.
      ts.errorLog(
        ts.methodMessages_errorMessage(
          this.uploadFile.name,
          __filename.split(__dirname + "/").pop(),
          error
        )
      );
    }
  }

  /**
   * @description             This method accepts alert pop-up windows.
   * @param locator           Provide the locator of the element that will force the alert window.
   * @param alertMessage      Optional. Provide the alert message contained in the alert pop-up window.
   * @type                    The type of this method is set to "Promise<void>".
   * @usage                   - Usage 1: Use the method by providing a button locator to force the pop-up window and provide the text contained in the alert pop-up window.
   *                            {constructorKeyword}.alertAccept({locator}, {contained text inside alert pop up window});
   *                          - Usage 2: Use the method by providing a button locator to force the pop-up window.
   *                            {constructorKeyword}.alertAccept({locator});
   * @example                 Example 1: Provide the locator of a button that triggers the alert pop-up window and provide the text contained inside the alert pop-up window.
   *                            dsl.alertAccept("#id", "text inside alert pop-up window");
   *                          Example 2: Provide the locator of a button that triggers the alert pop-up window.
   *                            dsl.alertAccept("#id");
   */
  async alertAccept(locator: string, alertMessage?: string): Promise<void> {
    try {
      // Create the method steps here. Describe the custom command in this "try" statement (Domain Specific Language).
      // Handle the alert pop-up window.
      this.page.once("dialog", async (dialog) => {
        // If we provide the alertMessage parameter...
        if (alertMessage != null) {
          // ...assert to verify that the pop-up window contains the expected text.
          expect(dialog.message()).toEqual(alertMessage);
        }
        // Accept the pop-up window.
        await dialog.accept();
      });
      // Click the element that forces the alert pop-up window. It is a bit confusing, but we should take this action after handling the alert pop-up window.
      await this.click(locator);

      // Add the information message.
      ts.informLog(
        ts.methodMessages_informMessage(
          config.beginInformMessage +
            "The automation accepted the Alert pop-up window."
        )
      );
    } catch (error) {
      // Unit Test.
      // Create the error log and show it to the UI. Show the function name, the class where the function is located and the cached error.
      ts.errorLog(
        ts.methodMessages_errorMessage(
          this.alertAccept.name,
          __filename.split(__dirname + "/").pop(),
          error
        )
      );
    }
  }

  /**
   * @description             This method dismisses alert pop-up windows.
   * @param locator           Provide the locator of the element that will force the alert window.
   * @param alertMessage      Optional. Provide the alert message contained in the alert pop-up window.
   * @type                    The type of this method is set to "Promise<void>".
   * @usage                   - Usage 1: Use the method by providing a button locator to force the pop-up window and provide the text contained in the alert pop-up window.
   *                            {constructorKeyword}.alertCancel({locator}, {contained text inside alert pop up window});
   *                          - Usage 2: Use the method by providing a button locator to force the pop-up window.
   *                            {constructorKeyword}.alertCancel({locator});
   * @example                 Example 1: Provide the locator of a button that triggers the alert pop-up window and provide the text contained inside the alert pop-up window.
   *                            dsl.alertCancel("#id", "text inside alert pop-up window");
   *                          Example 2: Provide the locator of a button that triggers the alert pop-up window.
   *                            dsl.alertCancel("#id");
   */
  async alertCancel(locator: string, alertMessage?: string): Promise<void> {
    try {
      // Create the method steps here. Describe the custom command in this "try" statement (Domain Specific Language).
      // Handle the alert pop-up window.
      this.page.once("dialog", async (dialog) => {
        // If we provide the alertMessage parameter...
        if (alertMessage != null) {
          // ...assert to verify that the pop-up window contains the expected text.
          expect(dialog.message()).toEqual(alertMessage);
        }
        // Dismiss the pop-up window.
        await dialog.dismiss();
      });
      // Click the element that forces the alert pop-up window. It is a bit confusing, but we should take this action after handling the alert pop-up window.
      await this.click(locator);

      // Add the information message.
      ts.informLog(
        ts.methodMessages_informMessage(
          config.beginInformMessage +
            "The automation dismissed the Alert pop-up window."
        )
      );
    } catch (error) {
      // Unit Test.
      // Create the error log and show it to the UI. Show the function name, the class where the function is located and the cached error.
      ts.errorLog(
        ts.methodMessages_errorMessage(
          this.alertCancel.name,
          __filename.split(__dirname + "/").pop(),
          error
        )
      );
    }
  }

  /**
   * @description             This method accepts an alert pop-up window and fills the input text element with text (located inside the alert pop-up window).
   * @param locator           Provide the locator of the element that will force the alert window.
   * @param textValue         Provide the text value that we will fill inside the alert pop-up window.
   * @param alertMessage      Optional. Provide the alert message contained in the alert pop-up window.
   * @type                    The type of this method is set to "Promise<void>".
   * @usage                   - Usage 1: Use the method by providing a button locator to force the pop-up window, give the text that will be filled inside the alert pop-up window and provide the text (contained) in the alert pop-up window.
   *                            {constructorKeyword}.alertTypeValueAndAccept({locator}, {text value}, {contained text inside alert pop up window});
   *                          - Usage 2: Use the method by providing a button locator to force the pop-up window, give the text that will be filled inside the alert pop-up window.
   *                            {constructorKeyword}.alertTypeValueAndAccept({locator}, {text value});
   * @example                 Example 1: Provide the locator of a button that triggers the alert pop-up window, provide the text that will be filled inside the alert pop-up window and provide the text (contained) inside the alert pop-up window.
   *                            dsl.alertTypeValueAndAccept("#id", "fill with this text" , "text inside alert pop-up window");
   *                          Example 2: Provide the locator of a button that triggers the alert pop-up window, provide the text that will be filled inside the alert pop-up window.
   *                            dsl.alertTypeValueAndAccept("#id", "fill with this text");
   */
  async alertTypeValueAndAccept(
    locator: string,
    textValue: string,
    alertMessage?: string
  ): Promise<void> {
    try {
      // Create the method steps here. Describe the custom command in this "try" statement (Domain Specific Language).
      // Handle the alert pop-up window.
      this.page.once("dialog", async (dialog) => {
        // If we provide the alertMessage parameter...
        if (alertMessage != null) {
          // ...assert to verify that the pop-up window contains the expected text.
          expect(dialog.message()).toEqual(alertMessage);
        }
        // Accept the pop-up window and provide text that will fill it inside the input text element (located inside the alert pop-up window).
        await dialog.accept(textValue);
      });
      // Click the element that forces the alert pop-up window. It is a bit confusing, but we should take this action after handling the alert pop-up window.
      await this.click(locator);

      // Add the information message.
      ts.informLog(
        ts.methodMessages_informMessage(
          config.beginInformMessage +
            "The automation accepts and fills the value '" +
            textValue +
            "' in the Alert pop-up window."
        )
      );
    } catch (error) {
      // Unit Test.
      // Create the error log and show it to the UI. Show the function name, the class where the function is located and the cached error.
      ts.errorLog(
        ts.methodMessages_errorMessage(
          this.alertTypeValueAndAccept.name,
          __filename.split(__dirname + "/").pop(),
          error
        )
      );
    }
  }

  /**
   * @description             This method gives a focus to the iFrame.
   * @param iFrameLocator     Provide the iFrame locator.
   * @returns                 Returns the switched iFrame element.
   * @type                    The type of this method is set to "Promise<any>".
   * @usage                   - Usage: Use the method by providing a iFrame locator.
   *                            {constructorKeyword}.iFrame({locator});
   * @example                 Example: Provide the locator of an iFrame element.
   *                            let iFrame = await dsl.iFrame("#id1");
   *                            let iFrameElement = dsl.element(await iFrame.locator('#id2'));
   */
  async iFrame(iFrameLocator: string): Promise<any> {
    try {
      // Create the method steps here. Describe the custom command in this "try" statement (Domain Specific Language).

      // Add the information message.
      ts.informLog(
        ts.methodMessages_informMessage(
          config.beginInformMessage +
            "The automation successfully switched to iFrame."
        )
      );

      // Return the switched focus inside the iFrame.
      return this.page.frameLocator(iFrameLocator);
    } catch (error) {
      // Unit Test.
      // Create the error log and show it to the UI. Show the function name, the class where the function is located and the cached error.
      ts.errorLog(
        ts.methodMessages_errorMessage(
          this.iFrame.name,
          __filename.split(__dirname + "/").pop(),
          error
        )
      );
    }
  }

  /**
   * @description                   This method focuses on the iFrame inside another iFrame (Nested iFrame).
   * @param parentIframeLocator     Provide the locator of the parent (first) iFrame element.
   * @param childIframeLocator      Provide the locator of the child (Nested) iFrame element.
   * @returns                       Returns the switched nested iFrame element.
   * @type                          The type of this method is set to "Promise<any>".
   * @usage                         - Usage: Use the method by providing parent and child iFrame locators.
   *                                  {constructorKeyword}.iFrameNested({locator}, {locator});
   * @example                       Example: Provide the locators for parent and child iFrame elements.
   *                                  let iFrameChild = await dsl.iFrameNested("#id1", "id2");
   *                                  let iFrameChildElement = dsl.element(await iFrameChild.locator("#id3"));
   */
  async iFrameNested(
    parentIframeLocator: string,
    childIframeLocator: string
  ): Promise<any> {
    try {
      // Create the method steps here. Describe the custom command in this "try" statement (Domain Specific Language).
      // Assign the parent iFrame focus to the variable.
      let iFrameParent = await this.iFrame(parentIframeLocator);

      // Add the information message.
      ts.informLog(
        ts.methodMessages_informMessage(
          config.beginInformMessage +
            "The automation successfully switched to neasted iFrame."
        )
      );

      // Return the switched focus inside the nested iFrame.
      return await iFrameParent.frameLocator(childIframeLocator);
    } catch (error) {
      // Unit Test.
      // Create the error log and show it to the UI. Show the function name, the class where the function is located and the cached error.
      ts.errorLog(
        ts.methodMessages_errorMessage(
          this.iFrameNested.name,
          __filename.split(__dirname + "/").pop(),
          error
        )
      );
    }
  }

  /**
   * @description                       This method selects a value from the drop-down list by clicking over the drop-down list and the drop-down value.
   * @param locatorDropDownList         Provide a locator (string) of drop-down list.
   * @param locatorDropDownValue        Provide a locator (string) of drop-down value.
   * @type                              The type of this method is set to "Promise<void>".
   * @usage                             - Usage : Use the method by providing locator parameters.
   *                                      {constructorKeyword}.dropDown_ByDoubleClick({locator}, {locator});
   * @example                           Example : Provide the locators for two elemets.
   *                                      await dsl.dropDown_ByDoubleClick("#drop-down-list-id", "#drop-down-value-id");
   */
  async dropDown_ByDoubleClick(
    locatorDropDownList: string,
    locatorDropDownValue: string
  ): Promise<void> {
    try {
      // Create the method steps here. Describe the custom command in this "try" statement (Domain Specific Language).

      // Call this method, to verify that the element is present and it is ready for usage.
      await this.element(locatorDropDownList, config.elementTimeOut);

      // Click over the drop-down list element to list the drop-down values.
      await this.page.click(locatorDropDownList, { force: true });

      // Because we are not able to use the "focus()" function over the listed drop-down list value, we can't use "dsl.element()" method from this class. That's why we will add the following few lines of code for verification that the drop-down value is ready for usage.
      let elementDropDownValue: any; // Declare an internal variable for assigning the element value.
      // If the provided value is a string, this is just a selector.
      if (typeof locatorDropDownValue === "string") {
        // We need to transform this selector into an element.
        elementDropDownValue = this.page.locator(locatorDropDownValue);
      }
      // Unit test.
      else {
        ts.errorLog(
          "You have entered a not supported data type. Please provide a locator (string)." +
            ts.methodMessages_errorMessage2(
              this.dropDown_ByDoubleClick.name,
              __filename.split(__dirname + "/").pop()
            )
        );
      }
      // Wait for the element to be visible.
      await elementDropDownValue.waitFor({
        state: "visible",
        timeout: config.elementTimeOut,
      });
      // Verify that the element is visible.
      await expect(elementDropDownValue).toBeVisible({
        timeout: config.elementTimeOut,
      });
      // Verify that the element is not hidden.
      await expect(elementDropDownValue).not.toBeHidden({
        timeout: config.elementTimeOut,
      });
      // Verify that the element is enabled.
      await expect(elementDropDownValue).toBeEnabled({
        timeout: config.elementTimeOut,
      });
      // Verify that the element is not disabled.
      await expect(elementDropDownValue).not.toBeDisabled({
        timeout: config.elementTimeOut,
      });
      // Verify that the element is the only one in the DOM tree.
      await expect(elementDropDownValue).toHaveCount(1, {
        timeout: config.elementTimeOut,
      });

      // Get the drop-down list value.
      let dropDownListValue: string = await (
        await elementDropDownValue.allTextContents()
      )[0];

      // Click over the drop-down value to choose this value.
      await this.page.click(locatorDropDownValue, { force: true });

      // Add the information message.
      ts.informLog(
        ts.methodMessages_informMessage(
          config.beginInformMessage +
            "The automated test selected a value '" +
            dropDownListValue +
            "' from the drop-down list."
        )
      );

      // Add the alert message.
      ts.alertLog(
        "This method doesn't do any assertion. You need to check if the automation test selected correct drop-down value. Method name is '" +
          this.dropDown_ByDoubleClick.name +
          "', the class of the method is '" +
          __filename.split(__dirname + "/").pop() +
          "'"
      );
    } catch (error) {
      // Unit Test.
      // Create the error log and show it to the UI. Show the function name, the class where the function is located and the cached error.
      ts.errorLog(
        ts.methodMessages_errorMessage(
          this.dropDown_ByDoubleClick.name,
          __filename.split(__dirname + "/").pop(),
          error
        )
      );
    }
  }
}

// Export the current class.
export default dsl;