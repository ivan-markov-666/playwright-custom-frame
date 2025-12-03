# Playwright Automation Testing Boilerplate

A ready‑to‑use Playwright + TypeScript test automation starter.  
It comes with a rich helper library, Page Object Model structure, environment validation, and example tests so you can focus on writing scenarios instead of framework plumbing.

---

## Key Features

- **Rich helper library (`Common` class)**  
  Reusable high‑level actions that cover most UI automation needs (locating elements, interactions, waits, frames, visual checks, OCR, files, and more).

- **Page Object Model (POM)**  
  Clear separation between test flow and page locators/behaviour, making tests easier to read, maintain, and extend.

- **Environment validation**  
  Strict `.env` validation using Joi to fail fast when configuration is incorrect.

- **Built‑in utilities**  
  Faker data generation, JSON test data, file handling, image comparison, OCR, and basic API support.

- **Code quality tooling**  
  ESLint, Prettier, Husky and lint‑staged pre‑commit checks.

- **HTML reporting & debugging**  
  Timestamped HTML reports, screenshots, video, Playwright UI mode and inspector integration.

---

## Tech Stack

- **Playwright Test** (TypeScript)
- **TypeScript** for type‑safe tests and helpers
- **dotenv + Joi** for environment configuration and validation
- **@faker-js/faker** for generating test data
- **cheerio** for HTML parsing
- **odiff-bin** for image comparison
- **tesseract.js** for OCR
- **ESLint + Prettier + Husky + lint-staged** for consistent, clean code

---

## Getting Started

### Prerequisites

- **Node.js LTS** installed  
  Download: https://nodejs.org/en/download/prebuilt-installer

- (Recommended) **Visual Studio Code** with extensions:
  - “Playwright Test for VS Code”: https://marketplace.visualstudio.com/items?itemName=ms-playwright.playwright
  - “ESLint”: https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint

### Installation

1. **Clone the repository**

2. **Install dependencies**
   ```bash
   npm install  
   ```

3. **Install Playwright browsers**
   ```bash
   npx playwright install
   ```

4. **Create environment file**
   ```bash
   cp .env.example .env
   ```
   Then adjust the values according to your environment.

5. **Validate the environment configuration (optional, but recommended)**
   ```bash
   npm run validate:env
   ```

---

## Project Structure

High‑level layout:

```text
playwright-boilerplate/
├─ src/
│  ├─ helpers/
│  │  ├─ common.ts          # Main helper library (Common class)
│  │  ├─ config.ts          # Singleton Config class using validated env values
│  │  ├─ logger.ts          # Logging helpers
│  │  ├─ validateEnv.ts     # Joi-based .env validation
│  │  ├─ performeOCR.d.ts   # Types for OCR helpers
│  │  └─ types.d.ts         # Shared TypeScript types
│  ├─ pages/
│  │  ├─ BasePage.ts        # Base class for all page objects
│  │  ├─ examples/          # Example page objects
│  │  └─ templates/         # Page object templates to copy from
│  └─ tests/
│     ├─ Example/           # Example test suites
│     └─ templates/         # Test templates
├─ test-data/
│  └─ dataFromJson.json     # Example external test data
├─ report/                  # HTML reports (timestamped folders)
├─ test-results/            # Raw Playwright artifacts (screenshots, traces, videos)
├─ screenshots/             # Visual comparison assets (if used)
├─ upload/                  # Files used for upload scenarios
├─ .env.example             # Sample env configuration
├─ playwright.config.ts     # Global Playwright configuration
├─ eslint.config.mjs        # ESLint configuration
├─ .prettierrc              # Prettier configuration
├─ todo.txt                 # Roadmap / known improvements
└─ README.md
```

---

## Environment Configuration

Environment variables are managed with **dotenv** and validated using **Joi** in `src/helpers/validateEnv.ts`.

- Copy `.env.example` to `.env`
- Adjust values
- Run validation:

```bash
npm run validate:env
```

If something is wrong, validation will print all issues and exit the process.

### Available Variables (from `.env.example`)

- `ENV`  
  Environment name.  
  Allowed: `qa`, `dev`, `prod`.

- `TIMEOUT`  
  Global timeout (ms) used by Playwright helper functions.  
  Default: `10000`.

- `SLOW_MO`  
  Global slow‑motion delay (ms) for Playwright actions.  
  Useful for debugging and demos.  
  Default: `0`.

- `PERMANENT_ADDRESS`  
  Example of test data coming from the environment.  
  Used in `Example.test.ts` to demonstrate reading secrets/config from `.env`.

Validated values are exposed via:

- `env` (typed) from `src/helpers/validateEnv.ts`
- `Config` singleton from `src/helpers/config.ts`  
  (`Config.getInstance()` gives you `timeout`, `slowMo`, and helper timeouts like `shortTimeout`, `longTimeout`, `extraLongTimeout`)

---

## Helper Library (`Common` Class)

The `Common` class in `src/helpers/common.ts` centralizes reusable building blocks for your tests:

- **Element location & state**
  - Locate visible, hidden, or disabled elements with additional checks
  - Frame and `FrameLocator` support
  - Focus, visibility, enabled/disabled validation

- **User interactions**
  - Clicks, typing, selection, hovering, scrolling
  - Composite actions built on top of Playwright primitives

- **Waiting & assertions**
  - Consistent timeouts via the `Config` class
  - Higher‑level wait helpers for typical UI flows

- **Data utilities**
  - Faker‑based random data
  - Random selection from lists and UI controls

- **Files & screenshots**
  - Upload/download helpers
  - Image comparison using `odiff-bin`
  - Screenshot and visual regression workflows

- **Parsing & OCR**
  - HTML parsing via `cheerio`
  - OCR via `tesseract.js` for reading text from images

Use the provided example tests and page objects as a reference for how to compose these helpers in your own test flows.

---

## Writing and Running Tests

### Example Tests

The project includes example tests under `src/tests/Example` which demonstrate:

- Using the **Page Object Model** (`ExamplePage` and friends)
- Mixing **JSON test data**, **faker** data, and **.env values**
- Organizing tests with `test.describe`, `beforeEach`, `afterEach`, and `test.step`

### Using npm Scripts

Common test commands (see `package.json`):

```bash
# Run the main example test
npm run example:test

# Run example with randomized data
npm run example:randomized:data
```

### Using Playwright CLI

Run all tests:

```bash
npx playwright test
```

Run a specific test file:

```bash
npx playwright test src/tests/Example/Example.test.ts
```

Run tests in a folder:

```bash
npx playwright test src/tests/Example
```

Run a single test by title:

```bash
npx playwright test -g "Example test"
```

Run in headed mode (browser visible):

```bash
npx playwright test --headed
```

For more options, refer to the official Playwright docs.

---

## Debugging & Playwright UI Mode

### VS Code Integration

- Use the **Testing** tab with the “Playwright Test for VS Code” extension.
- Run, debug, and inspect tests directly from the IDE.

### Playwright Inspector

Start tests in debug mode:

```bash
npx playwright test --debug
```

### UI Mode

Interactive runner with time‑travel debugging and watch mode:

```bash
npx playwright test --ui
```

---

## Reporting

HTML reports are configured in `playwright.config.ts`:

- Each run generates an HTML report under `report/<timestamp>`
- To open the report from the last run:

```bash
npx playwright show-report
```

Reports are generated **per run** (not per test).  
To get a focused report, run only the tests you care about.

---

## Code Quality

### Formatting & Linting

The project uses **Prettier** and **ESLint** to enforce a consistent style:

- Prettier configuration: `.prettierrc`
- ESLint configuration: `eslint.config.mjs`

Useful commands:

```bash
# Lint tests
npm run lint

# Format source and test files
npm run format
```

### Pre‑commit Hooks

Husky + lint‑staged are configured to run lint and format checks on staged `src/**/*.ts` files before each commit, helping keep the codebase clean.

---

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

If you hit version‑related issues after pulling changes, you can reset everything:

```bash
rm -rf node_modules package-lock.json
npm install
npx playwright install
```

(Use the Windows equivalents if needed.)

---

## Contributing & Next Steps

The boilerplate is intended as a starting point that you can freely adapt to your project’s needs.

- See `todo.txt` in the project root for planned improvements and known limitations.
- Feel free to adjust helpers, page objects and test templates to fit your team’s conventions.

---
