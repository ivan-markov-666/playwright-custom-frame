/**
 * @fileoverview Configuration class that contains settings used throughout the framework.
 * All configurations are loaded from validated environment variables.
 * Uses Singleton pattern to ensure only one instance exists in the application.
 */

import { env } from './validateEnv'

export class Config {
    /**
     * Singleton instance of the Config class.
     * Ensures that only one object exists in memory.
     */
    private static instance: Config

    /**
     * Global timeout in milliseconds.
     * Used primarily for Playwright functions in the 'src/helpers/common.ts' file.
     * Loaded from TIMEOUT env variable (default: 10000ms = 10 seconds)
     */
    readonly timeout: number

    /**
     * Slow motion delay in milliseconds.
     * Slows down Playwright operations by the specified amount - useful for debugging.
     * Loaded from SLOW_MO env variable (default: 0ms)
     */
    readonly slowMo: number

    /**
     * Whether tests should run in headless mode (without visible browser).
     * Loaded from HEADLESS env variable (default: true)
     */
    readonly headless: boolean

    /**
     * Number of test retries on failure.
     * Loaded from RETRIES env variable (default: 2)
     */
    readonly retries: number

    /**
     * Private constructor - prevents direct instantiation from outside the class.
     * Singleton pattern requires the constructor to be private to ensure
     * that only the getInstance() method can create instances.
     */
    private constructor() {
        // Load all configurations from validated environment variables
        this.timeout = env.TIMEOUT
        this.slowMo = env.SLOW_MO
        this.headless = env.HEADLESS
        this.retries = env.RETRIES
    }

    /**
     * Returns the single instance of the Config class (Singleton pattern).
     * If the instance doesn't exist, it creates it. If it exists, returns the same instance.
     * This ensures that the same configuration is used throughout the entire application.
     * 
     * @returns {Config} Singleton instance of the Config class
     * 
     * @example
     * const config = Config.getInstance()
     * console.log(config.timeout) // 10000
     */
    static getInstance(): Config {
        // Check if the instance already exists
        if (!Config.instance) {
            // If it doesn't exist, create a new instance
            Config.instance = new Config()
        }
        // Return the same instance every time
        return Config.instance
    }

    /**
     * Helper method: Returns half of the standard timeout.
     * Useful for quick operations that shouldn't take long.
     * 
     * @returns {number} Timeout value / 2 (e.g., 5000ms if timeout is 10000ms)
     * 
     * @example
     * const config = Config.getInstance()
     * await page.waitForSelector('.fast-element', { timeout: config.shortTimeout })
     */
    get shortTimeout(): number {
        return this.timeout / 2
    }

    /**
     * Helper method: Returns double the standard timeout.
     * Useful for slow operations like file uploads or heavy computations.
     * 
     * @returns {number} Timeout value * 2 (e.g., 20000ms if timeout is 10000ms)
     * 
     * @example
     * const config = Config.getInstance()
     * await page.waitForResponse(response => response.url().includes('/upload'), 
     *     { timeout: config.longTimeout })
     */
    get longTimeout(): number {
        return this.timeout * 2
    }

    /**
     * Helper method: Returns triple the standard timeout.
     * Useful for very slow operations like generating large PDF files.
     * 
     * @returns {number} Timeout value * 3 (e.g., 30000ms if timeout is 10000ms)
     * 
     * @example
     * const config = Config.getInstance()
     * await page.waitForLoadState('networkidle', { timeout: config.extraLongTimeout })
     */
    get extraLongTimeout(): number {
        return this.timeout * 3
    }
}