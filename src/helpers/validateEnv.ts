import Joi from 'joi'
import dotenv from 'dotenv'
import path from 'path'

// Load .env file and extract loaded variables
const result = dotenv.config({ path: path.resolve(__dirname, '../../.env') })

if (result.error) {
    console.error('⚠️  Failed to load .env file:', result.error.message)
    process.exit(1)
}

// We load only the variables from the .env file
const envVars = result.parsed || {}

// Define validation schema for all environment variables
const envSchema = Joi.object({
    // Environment type (required)
    ENV: Joi.string().valid('qa', 'dev', 'prod').required(),
    
    // Global timeout in milliseconds (optional, default: 10000)
    // Used for playwright functions throughout the framework
    TIMEOUT: Joi.number().min(1000).max(60000).default(10000),
    
    // Slow motion delay in milliseconds (optional, default: 0)
    // Slows down operations by specified milliseconds - useful for debugging
    SLOW_MO: Joi.number().min(0).max(1000).default(0),
    
    // Permanent address (required)
    PERMANENT_ADDRESS: Joi.string().required(),
}).unknown(true) // Allow additional env variables that might be added in the future

// Validate only isolated .env variables and apply defaults
const { error, value: validatedEnv } = envSchema.validate(envVars, { 
    allowUnknown: true, 
    abortEarly: false 
})

if (error) {
    console.error('⚠️  Validation error in .env file:')
    error.details.forEach((err) => console.error(`- ${err.message}`))
    process.exit(1) // Stops execution with an error code
} else {
    console.log('✅ .env file is valid!')
}

/**
 * TypeScript interface for validated environment variables
 * Provides type safety when accessing env variables throughout the framework
 */
export interface ValidatedEnv {
    /** Environment type: qa, dev, or prod */
    ENV: 'qa' | 'dev' | 'prod'
    /** Global timeout in milliseconds */
    TIMEOUT: number
    /** Slow motion delay in milliseconds */
    SLOW_MO: number
}

// Export validated and typed environment variables
export const env = validatedEnv as ValidatedEnv