"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MainNav } from "@/components/main-nav"

// Sample registry data
const registryData = {
  tata: {
    name: "TATA",
    description: "Source/Core; Integrity, Law, Physics, Trident",
    dominantResonance: "◎ P1",
    petals: [
      {
        name: "source_core",
        glyph: "◎",
        pNumber: 1,
        nodes: [
          {
            name: "axioms_foundational",
            glyph: "⬣",
            rNumber: 11,
            path: "TATA/◎_source_core/🟥 ⬣_axioms_foundational/",
            contentType: "principles",
            lastUpdated: "2023-05-01T12:00:00Z",
          },
          {
            name: "legacy_data_anchors",
            glyph: "⬣",
            rNumber: 11,
            path: "TATA/◎_source_core/🟩 ⬣_legacy_data_anchors/",
            contentType: "documents",
            lastUpdated: "2023-04-15T09:30:00Z",
          },
        ],
      },
      // More petals would be here
    ],
    relationships: [
      {
        targetField: "ATLAS",
        type: "knowledge_mapping",
        description: "TATA provides foundational truths that ATLAS maps",
      },
      {
        targetField: "DOJO",
        type: "execution_guidance",
        description: "TATA provides integrity rules that DOJO executes",
      },
    ],
  },
  // Other field registries would be here
}

export default function RegistryViewer() {
  const [activeField, setActiveField] = useState("tata")

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
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Registry Viewer</h1>
          <p className="text-slate-500 dark:text-slate-400 max-w-3xl">
            Explore the registry files for each field in the Fractal Field System
          </p>
        </div>

        <Tabs defaultValue="tata" onValueChange={setActiveField} className="w-full">
          <TabsList className="grid w-full md:w-[400px] grid-cols-4">
            <TabsTrigger value="tata">TATA</TabsTrigger>
            <TabsTrigger value="atlas">ATLAS</TabsTrigger>
            <TabsTrigger value="dojo">DOJO</TabsTrigger>
            <TabsTrigger value="obiwan">OBIWAN</TabsTrigger>
          </TabsList>

          <TabsContent value="tata" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span className="text-red-500 text-2xl">🔴</span>
                  {registryData.tata.name} Registry
                </CardTitle>
                <CardDescription>
                  {registryData.tata.description} - Dominant Resonance: {registryData.tata.dominantResonance}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Petals & Nodes</h3>
                    <pre className="bg-slate-100 dark:bg-slate-800 p-4 rounded-md overflow-auto">
                      {JSON.stringify(registryData.tata.petals, null, 2)}
                    </pre>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-2">Field Relationships</h3>
                    <pre className="bg-slate-100 dark:bg-slate-800 p-4 rounded-md overflow-auto">
                      {JSON.stringify(registryData.tata.relationships, null, 2)}
                    </pre>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="atlas" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span className="text-green-500 text-2xl">🟢</span>
                  ATLAS Registry
                </CardTitle>
                <CardDescription>Registry data for the ATLAS field is not fully loaded</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="p-4 bg-slate-100 dark:bg-slate-800 rounded-md">
                  <p className="text-slate-500 dark:text-slate-400 italic">
                    This would display the full ATLAS registry data when available
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="dojo" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span className="text-blue-500 text-2xl">🔵</span>
                  DOJO Registry
                </CardTitle>
                <CardDescription>Registry data for the DOJO field is not fully loaded</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="p-4 bg-slate-100 dark:bg-slate-800 rounded-md">
                  <p className="text-slate-500 dark:text-slate-400 italic">
                    This would display the full DOJO registry data when available
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="obiwan" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span className="text-purple-500 text-2xl">🟣</span>
                  OBIWAN Registry
                </CardTitle>
                <CardDescription>Registry data for the OBIWAN field is not fully loaded</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="p-4 bg-slate-100 dark:bg-slate-800 rounded-md">
                  <p className="text-slate-500 dark:text-slate-400 italic">
                    This would display the full OBIWAN registry data when available
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </main>
  )
}
