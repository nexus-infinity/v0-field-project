import type { Field } from "@/types/fractal-field-types"

export interface ValidationResult {
  isValid: boolean
  fieldResults: FieldValidationResult[]
  summary: string
}

export interface FieldValidationResult {
  fieldName: string
  isComplete: boolean
  petalCount: number
  expectedPetalCount: number
  incompleteDetails: string[]
}

/**
 * Validates the structural completeness of the Fractal Field data
 * @param fields The array of Field objects to validate
 * @param expectedFieldNames The expected field names (default: ["Tata", "Atlas", "Dojo", "ObiWan"])
 * @param expectedPetalCount The expected number of petals per field (default: 6)
 * @returns A ValidationResult object with details about the validation
 */
export function validateFractalFieldStructure(
  fields: Field[],
  expectedFieldNames: string[] = ["Tata", "Atlas", "Dojo", "ObiWan"],
  expectedPetalCount = 6,
): ValidationResult {
  const fieldResults: FieldValidationResult[] = []
  let isValid = true

  // Check if all expected fields exist
  const fieldNames = fields.map((field) => field.name)
  const missingFields = expectedFieldNames.filter((name) => !fieldNames.includes(name))

  if (missingFields.length > 0) {
    isValid = false
    missingFields.forEach((name) => {
      fieldResults.push({
        fieldName: name,
        isComplete: false,
        petalCount: 0,
        expectedPetalCount,
        incompleteDetails: [`Field "${name}" is missing entirely`],
      })
    })
  }

  // Validate each field that exists
  fields.forEach((field) => {
    const fieldResult: FieldValidationResult = {
      fieldName: field.name,
      isComplete: true,
      petalCount: field.petals.length,
      expectedPetalCount,
      incompleteDetails: [],
    }

    // Check petal count
    if (field.petals.length !== expectedPetalCount) {
      fieldResult.isComplete = false
      isValid = false
      fieldResult.incompleteDetails.push(`Expected ${expectedPetalCount} petals, found ${field.petals.length}`)
    }

    // Check each petal for recursive nodes
    field.petals.forEach((petal) => {
      if (!petal.children || petal.children.length === 0) {
        fieldResult.isComplete = false
        isValid = false
        fieldResult.incompleteDetails.push(`Petal "${petal.name}" has no recursive nodes`)
      }

      // Check for required petal properties
      const requiredPetalProps = ["name", "glyph", "description", "pNumber"]
      const missingProps = requiredPetalProps.filter((prop) => !(prop in petal))
      if (missingProps.length > 0) {
        fieldResult.isComplete = false
        isValid = false
        fieldResult.incompleteDetails.push(
          `Petal "${petal.name}" is missing required properties: ${missingProps.join(", ")}`,
        )
      }

      // Check recursive nodes for required properties
      if (petal.children) {
        petal.children.forEach((node) => {
          const requiredNodeProps = ["name", "glyph", "color", "description", "rNumber", "rName"]
          const missingNodeProps = requiredNodeProps.filter((prop) => !(prop in node))
          if (missingNodeProps.length > 0) {
            fieldResult.isComplete = false
            isValid = false
            fieldResult.incompleteDetails.push(
              `Node "${node.name}" in petal "${petal.name}" is missing required properties: ${missingNodeProps.join(", ")}`,
            )
          }
        })
      }
    })

    fieldResults.push(fieldResult)
  })

  // Generate summary
  const completeFields = fieldResults.filter((result) => result.isComplete).length
  const summary = isValid
    ? `✅ All ${fields.length} fields are structurally complete with ${expectedPetalCount} petals each`
    : `⚠️ Only ${completeFields} of ${expectedFieldNames.length} fields are structurally complete`

  return {
    isValid,
    fieldResults,
    summary,
  }
}

/**
 * Generates a detailed report of the validation results
 * @param validationResult The validation result to report
 * @returns A formatted string with the validation report
 */
export function generateValidationReport(validationResult: ValidationResult): string {
  const { isValid, fieldResults, summary } = validationResult

  let report = `# Fractal Field Validation Report\n\n`
  report += `${summary}\n\n`

  fieldResults.forEach((result) => {
    const statusEmoji = result.isComplete ? "✅" : "❌"
    report += `## ${statusEmoji} ${result.fieldName}\n`
    report += `- Petals: ${result.petalCount}/${result.expectedPetalCount}\n`

    if (result.incompleteDetails.length > 0) {
      report += `- Issues:\n`
      result.incompleteDetails.forEach((detail) => {
        report += `  - ${detail}\n`
      })
    }

    report += "\n"
  })

  return report
}
