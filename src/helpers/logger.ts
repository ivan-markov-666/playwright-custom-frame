/**
 * @fileoverview This helper file provides logging functions that enhance the readability of console output
 * by applying color formatting. It defines `informLog` for general informational messages in green and `alertLog`
 * for alert messages in yellow background, making it easier to distinguish between these types during testing
 * and debugging. The use of ANSI escape sequences allows for a more visually organized console output,
 * which is crucial for monitoring large volumes of log data efficiently.
 */

/**
 * @description             It will print every message in BOLD Green text.
 * @param informMessage     Provide the string message, that we want to print.
 */
export async function informLog(informMessage: string): Promise<void> {
    // Prints the informational message in bold green
    console.log('\x1b[32m\x1b[1m', informMessage, '\x1b[0m')
}

/**
 * @description            It will print every message in BOLD Yellow backgrounded text.
 * @param alertMessage     Provide the string message, that we want to print.
 */
export async function alertLog(alertMessage: string): Promise<void> {
    // Prints the alert message in bold text on a yellow background
    console.log('\x1b[43m\x1b[1m', alertMessage, '\x1b[0m')
}
