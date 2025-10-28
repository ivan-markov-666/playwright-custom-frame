# Playwright Automation Testing Boilerplate

A comprehensive Playwright-based test automation framework featuring pre-built helper functions, Page Object Model architecture, and ready-to-use examples.

## Key Features

- **Rich Helper Library**: Pre-defined common functions covering 80%+ of typical automation actions
- **Page Object Model (POM)**: Clean separation of locators and test logic
- **Ready-to-Use Examples**: Working test examples included for quick onboarding
- **Built-in Utilities**: Faker data generation, image comparison, OCR, API testing, file handling
- **Code Quality Tools**: ESLint and Prettier with pre-commit hooks
- **Comprehensive Reporting**: HTML reports with screenshots and traces

## Installation and Configuration

1. Clone the repository  
2. Download and install NodeJS LTS version  
https://nodejs.org/en/download/prebuilt-installer  
3. Download and install Visual Studio Code (Recommended IDE)  
Recommended VS Code extensions:
   - "Playwright Test for VS Code": https://marketplace.visualstudio.com/items?itemName=ms-playwright.playwright  
   - "ESLint": https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint  
4. Navigate to the project root directory from the terminal  
5. Install all dependencies  
```bash
npm install  
```
6. Install Playwright browsers  
```bash
npx playwright install
```
7. Create environment configuration file  
Copy `.env.example` to `.env` and provide required values.

## Project Structure

The framework follows the Page Object Model (POM) pattern with the following structure:

- **Page Objects**: Each page class contains locators and methods specific to that page
- **Tests**: Test files utilizing page objects and helper functions
- **Helpers**: Common utility functions accessible across all tests
  - `common.ts`: Pre-built helper functions for most automation scenarios
  - `config.ts`: Configuration management
  - `logger.ts`: Logging utilities
- **Examples**: Working test examples demonstrating framework usage

## Common Helper Functions

The framework includes an extensive `Common` class (`src/helpers/common.ts`) with pre-defined functions that handle the majority of automation tasks you'll encounter. These functions provide:

- Element interactions (click, type, select, hover, drag-and-drop)
- Advanced waiting strategies and element verification
- Frame and shadow DOM handling
- API testing capabilities
- File operations (upload, download, comparison)
- Image processing and OCR
- Data generation with Faker
- Screenshot and visual comparison utilities
- Custom scroll behaviors
- Clipboard operations
- Function for selecting random options from input elements\

These ready-to-use functions eliminate the need to write repetitive code and ensure consistent behavior across your test suite. Check the existing examples to see these functions in action.

## Running Tests

### Using VS Code Extension
Use "Playwright Test for VS Code" extension from the "Testing" tab.  
Documentation: https://marketplace.visualstudio.com/items?itemName=ms-playwright.playwright

### Using npm Scripts
Execute tests using predefined scripts in `package.json`:  
```bash
npm run example:test
```

### Using Playwright CLI
Run all tests:
```bash
npx playwright test
```

Run specific test file:
```bash
npx playwright test Example.test.ts
```

Run tests in a folder:
```bash
npx playwright test ./src/tests/example
```

Run specific test by name:
```bash
npx playwright test -g 'example testcase name'
```

Run in headed mode:
```bash
npx playwright test --headed
```

For more execution options, consult the official Playwright documentation.

## Environment Variables

The framework uses the `dotenv` package for environment variable management. Create a `.env` file (copy from `.env.example`) and populate it with required values. See `Example.test.ts` for usage examples.

## Configuration

Test suite configuration is managed through `playwright.config.ts`. Refer to the Playwright documentation for available configuration options.

## Code Quality

**Formatting and Linting**  
The framework uses Prettier and ESLint for code formatting and static analysis. Related scripts are available in `package.json`. Configuration files:
- Prettier: `.prettierrc`
- ESLint: `eslint.config.mjs`

**Pre-commit Hooks**  
Husky runs lint and format checks on staged files before each commit to maintain code quality.

## Debugging

**VS Code**  
Use the "Testing" tab with the Playwright Test extension for integrated debugging.

**Playwright Inspector**  
Run tests with the `--debug` flag to use Playwright's built-in inspector.

## Playwright UI Mode

UI Mode provides an interactive testing experience with time-travel debugging and watch mode:
```bash
npx playwright test --ui
```

## Reporting

**HTML Reports**  
Reports are generated in the `report` folder with timestamps. Each test run creates a separate report directory. To view the latest report:
```bash
npx playwright show-report
```

Note: Reports are generated per test run, not per test case. To generate a report for a specific test, run only that test.

## Updating Dependencies

Check for outdated packages:
```bash
npx npm-check-updates
```

Update `package.json` with latest versions:
```bash
npx npm-check-updates -u
```

Install updated packages:
```bash
npm install
```

**Important**: If you encounter version-related errors after pulling changes, delete `package-lock.json` and `node_modules`, then run:
```bash
npm install
npx playwright install
```

## Contributing

The framework is continuously evolving. See `todo.txt` in the project root for planned improvements and known limitations.