"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { validateFractalFieldStructure, generateValidationReport } from "@/utils/fractal-field-validator"
import { fractalFieldData } from "@/data/fractal-field-data"
import { CheckCircle, AlertTriangle } from "lucide-react"
import { MainNav } from "@/components/main-nav"

export default function ValidationReportPage() {
  const [validationResult, setValidationResult] = useState<any>(null)
  const [reportMarkdown, setReportMarkdown] = useState<string>("")

  useEffect(() => {
    // Run validation on component mount
    const result = validateFractalFieldStructure(fractalFieldData)
    setValidationResult(result)
    setReportMarkdown(generateValidationReport(result))
  }, [])

  if (!validationResult) {
    return <div className="p-8">Loading validation report...</div>
  }

  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-950">
      <div className="border-b">
        <div className="flex h-16 items-center px-4 max-w-7xl mx-auto">
          <div className="mr-4 font-bold text-xl">Fractal Field System</div>
          <MainNav />
        </div>
      </div>

      <div className="p-4 md:p-8 max-w-7xl mx-auto space-y-8">
        <div className="space-y-2">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Fractal Field Validation Report</h1>
          <p className="text-slate-500 dark:text-slate-400 max-w-3xl">
            Comprehensive structural validation of the Fractal Field System
          </p>
        </div>

        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              {validationResult.isValid ? (
                <CheckCircle className="h-5 w-5 text-green-500" />
              ) : (
                <AlertTriangle className="h-5 w-5 text-amber-500" />
              )}
              <CardTitle>Validation Summary</CardTitle>
            </div>
            <CardDescription>{validationResult.summary}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {validationResult.fieldResults.map((result: any, index: number) => (
                <div key={index} className="border rounded-md p-4">
                  <div className="flex items-center gap-2 mb-2">
                    {result.isComplete ? (
                      <CheckCircle className="h-4 w-4 text-green-500" />
                    ) : (
                      <AlertTriangle className="h-4 w-4 text-amber-500" />
                    )}
                    <h3 className="text-lg font-semibold">{result.fieldName}</h3>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-2">
                    <div>
                      <span className="text-sm text-slate-500 dark:text-slate-400">Petals:</span>
                      <span className="ml-2 font-medium">
                        {result.petalCount}/{result.expectedPetalCount}
                      </span>
                    </div>
                    <div>
                      <span className="text-sm text-slate-500 dark:text-slate-400">Status:</span>
                      <span className={`ml-2 font-medium ${result.isComplete ? "text-green-500" : "text-amber-500"}`}>
                        {result.isComplete ? "Complete" : "Incomplete"}
                      </span>
                    </div>
                  </div>

                  {result.incompleteDetails.length > 0 && (
                    <div className="mt-2">
                      <h4 className="text-sm font-medium mb-1">Issues:</h4>
                      <ul className="list-disc pl-5 text-sm space-y-1">
                        {result.incompleteDetails.map((detail: string, i: number) => (
                          <li key={i}>{detail}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Raw Validation Report</CardTitle>
            <CardDescription>Markdown format for documentation</CardDescription>
          </CardHeader>
          <CardContent>
            <pre className="bg-slate-100 dark:bg-slate-800 p-4 rounded-md overflow-auto whitespace-pre-wrap text-sm">
              {reportMarkdown}
            </pre>
          </CardContent>
        </Card>
      </div>
    </main>
  )
}
