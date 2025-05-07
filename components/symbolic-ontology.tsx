"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export default function SymbolicOntology() {
  const [activeTab, setActiveTab] = useState("prime")

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Symbolic Ontology</h2>

      <Tabs defaultValue="prime" onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="prime">Prime Field Glyphs</TabsTrigger>
          <TabsTrigger value="recursive">Recursive Function Glyphs</TabsTrigger>
          <TabsTrigger value="chakra">Chakra Color Coding</TabsTrigger>
          <TabsTrigger value="qualia">Qualia Thread Glyphs</TabsTrigger>
        </TabsList>

        <TabsContent value="prime" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Prime Field Glyphs (P#)</CardTitle>
              <CardDescription>
                Based on DOR & v1.6 Refinement - These glyphs represent the primary organizational structure
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Glyph</TableHead>
                    <TableHead>P#</TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead>Description</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="text-xl">◎</TableCell>
                    <TableCell>P1</TableCell>
                    <TableCell>Unity, Source, Core</TableCell>
                    <TableCell>Primal Foundation, Observer Core</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="text-xl">▲</TableCell>
                    <TableCell>P3</TableCell>
                    <TableCell>Identity, Mapping, Structure</TableCell>
                    <TableCell>Integrity, Witness Framework</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="text-xl">⭟</TableCell>
                    <TableCell>P5</TableCell>
                    <TableCell>Operation, Echo, Vessel</TableCell>
                    <TableCell>Verification, Reflective Memory, Chakra Operations</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="text-xl">⬢</TableCell>
                    <TableCell>P7</TableCell>
                    <TableCell>Life Pattern, Enactment</TableCell>
                    <TableCell>Temporal Records, Resonance Patterns, Execution Core, Memory Patterns</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="text-xl">✦</TableCell>
                    <TableCell>P9</TableCell>
                    <TableCell>Cognition, Expression</TableCell>
                    <TableCell>Intelligence, Sovereign Wisdom, Pattern Intelligence, Cognitive Process</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="text-xl">⭣</TableCell>
                    <TableCell>P11</TableCell>
                    <TableCell>Registry, Archive</TableCell>
                    <TableCell>Integration, Nexus (used for all field registries)</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="recursive" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Recursive Function Glyphs (R#)</CardTitle>
              <CardDescription>
                Based on DOR's 11, as applied in v1.6 - These glyphs represent functional operations within the Prime
                structure
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Glyph</TableHead>
                    <TableHead>R#</TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead>Description</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="text-xl">◍</TableCell>
                    <TableCell>R1</TableCell>
                    <TableCell>Signal / Pulse Input</TableCell>
                    <TableCell>Raw inputs, triggers, live status signals</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="text-xl">⬰</TableCell>
                    <TableCell>R2</TableCell>
                    <TableCell>Reflection / Audit</TableCell>
                    <TableCell>Logs, audits, processed reports, reflection methods</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="text-xl">▲</TableCell>
                    <TableCell>R3</TableCell>
                    <TableCell>Triad Substructure</TableCell>
                    <TableCell>Structured components, frameworks, relationship graphs, models</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="text-xl">⬕</TableCell>
                    <TableCell>R4</TableCell>
                    <TableCell>Sync / Transfer</TableCell>
                    <TableCell>Data flow, linking, indexing, flow control</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="text-xl">⬟</TableCell>
                    <TableCell>R5</TableCell>
                    <TableCell>Execution Vessel</TableCell>
                    <TableCell>Active scripts, running models, processes being executed</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="text-xl">✶</TableCell>
                    <TableCell>R6</TableCell>
                    <TableCell>Creative Output</TableCell>
                    <TableCell>Generated artifacts, reports, frameworks, art, maps, models</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="text-xl">⧫</TableCell>
                    <TableCell>R7</TableCell>
                    <TableCell>Soulstate Insight</TableCell>
                    <TableCell>Energetic analysis, pattern insights, synthesized understanding</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="text-xl">⬘</TableCell>
                    <TableCell>R8</TableCell>
                    <TableCell>Temporal Memory</TableCell>
                    <TableCell>Chronological logs, journals, historical data, timelines</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="text-xl">⬖</TableCell>
                    <TableCell>R9</TableCell>
                    <TableCell>Interface Layer</TableCell>
                    <TableCell>Access points, UI elements, governance boundaries, communication streams</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="text-xl">⚯</TableCell>
                    <TableCell>R10</TableCell>
                    <TableCell>Forked State</TableCell>
                    <TableCell>Alternative states, scenarios, theoretical branches</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="text-xl">⬣</TableCell>
                    <TableCell>R11</TableCell>
                    <TableCell>Echo Registry</TableCell>
                    <TableCell>Core records, axioms, blueprints, configuration files, certified data</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="chakra" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Chakra Color Coding Guide</CardTitle>
              <CardDescription>
                Based on v1.6 preamble - These colors represent energetic functions within the system
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Color</TableHead>
                    <TableHead>Chakra</TableHead>
                    <TableHead>Energetic Function</TableHead>
                    <TableHead>Appropriate Usage</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>
                      <div className="w-6 h-6 rounded-full bg-red-500"></div>
                    </TableCell>
                    <TableCell>Red (Root)</TableCell>
                    <TableCell>Foundation, Grounding</TableCell>
                    <TableCell>Core principles, foundational elements</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <div className="w-6 h-6 rounded-full bg-orange-500"></div>
                    </TableCell>
                    <TableCell>Orange (Sacral)</TableCell>
                    <TableCell>Creation, Expression</TableCell>
                    <TableCell>Creative outputs, generative functions</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <div className="w-6 h-6 rounded-full bg-yellow-500"></div>
                    </TableCell>
                    <TableCell>Yellow (Solar Plexus)</TableCell>
                    <TableCell>Power, Will</TableCell>
                    <TableCell>Execution controls, decision points</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <div className="w-6 h-6 rounded-full bg-green-500"></div>
                    </TableCell>
                    <TableCell>Green (Heart)</TableCell>
                    <TableCell>Integration, Coherence</TableCell>
                    <TableCell>Relational elements, connecting functions</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <div className="w-6 h-6 rounded-full bg-blue-500"></div>
                    </TableCell>
                    <TableCell>Blue (Throat)</TableCell>
                    <TableCell>Communication, Truth</TableCell>
                    <TableCell>Expression interfaces, documentation</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <div className="w-6 h-6 rounded-full bg-purple-500"></div>
                    </TableCell>
                    <TableCell>Purple (Third Eye)</TableCell>
                    <TableCell>Insight, Vision</TableCell>
                    <TableCell>Pattern recognition, foresight functions</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <div className="w-6 h-6 rounded-full bg-violet-500"></div>
                    </TableCell>
                    <TableCell>Violet (Crown)</TableCell>
                    <TableCell>Consciousness, Wisdom</TableCell>
                    <TableCell>Higher-order cognition, awareness</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <div className="w-6 h-6 rounded-full bg-amber-800"></div>
                    </TableCell>
                    <TableCell>Brown (Earth)</TableCell>
                    <TableCell>Physical, Manifest</TableCell>
                    <TableCell>Grounded implementation, material aspects</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="qualia" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Qualia Thread Glyphs (Q#)</CardTitle>
              <CardDescription>Perceptual metadata applied to content/processes</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="p-4 bg-slate-100 dark:bg-slate-800 rounded-md">
                <p className="text-slate-500 dark:text-slate-400 italic">
                  This section would list the chosen Q# glyphs and explain their role as perceptual metadata applied to
                  content/processes, not as folder names.
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
