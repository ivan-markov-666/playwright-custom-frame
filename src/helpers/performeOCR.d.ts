// Define a custom type for the OCR progress messages
interface OCRProgressMessage {
    status: string // Describes the current status of the OCR process
    progress: number // Represents the progress as a number between 0 and 1
}
