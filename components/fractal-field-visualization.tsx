"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { ChevronRight, ChevronDown, Info, X, Maximize2, AlertTriangle, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { validateFractalFieldStructure } from "@/utils/fractal-field-validator"
import type { Field, PrimePetal, RecursiveNode } from "@/types/fractal-field-types"

// Define our fractal field data structure
const fractalFieldData: Field[] = [
  {
    name: "Tata",
    color: "bg-red-500",
    emoji: "🔴",
    description: "Source/Core; Integrity, Law, Physics, Trident",
    dominantResonance: "◎ P1",
    petals: [
      {
        name: "source_core",
        glyph: "◎",
        description: "Core truths, foundational anchors, Trident physics, Jacques Rich legacy",
        pNumber: 1,
        children: [
          {
            name: "axioms_foundational",
            glyph: "⬣",
            color: "bg-red-500",
            description: "Foundational principles, core system laws",
            rNumber: 11,
            rName: "Registry",
          },
          {
            name: "legacy_data_anchors",
            glyph: "⬣",
            color: "bg-green-500",
            description: "Jacques Rich legacy documents, historical truths",
            rNumber: 11,
            rName: "Registry",
          },
        ],
      },
      {
        name: "integrity_structure",
        glyph: "▲",
        description: "System integrity rules, lawful structures, identity validation",
        pNumber: 3,
        children: [
          {
            name: "legal_trust_structures",
            glyph: "⬣",
            color: "bg-blue-500",
            description: "Legal documents, corporate/trust structures",
            rNumber: 11,
            rName: "Registry",
          },
          {
            name: "compliance_verification_logs",
            glyph: "⬰",
            color: "bg-yellow-500",
            description: "Logs of compliance checks, audits",
            rNumber: 2,
            rName: "Reflection/Audit",
          },
        ],
      },
      {
        name: "verification_vessel",
        glyph: "⭟",
        description: "Processes and tools for verification, certification",
        pNumber: 5,
        children: [
          {
            name: "certified_artifacts_evidence",
            glyph: "⬣",
            color: "bg-yellow-500",
            description: "Verified/certified evidence or data",
            rNumber: 11,
            rName: "Registry",
          },
          {
            name: "verification_protocols_output",
            glyph: "✶",
            color: "bg-blue-500",
            description: "Generated protocols/reports from verification ops",
            rNumber: 6,
            rName: "Creative Output",
          },
        ],
      },
      {
        name: "temporal_records",
        glyph: "⬢",
        description: "Historical patterns, timed events, lineage, sequence validation",
        pNumber: 7,
        children: [
          {
            name: "chronological_event_logs",
            glyph: "⬘",
            color: "bg-purple-500",
            description: "Specific historical events, timelines",
            rNumber: 8,
            rName: "Temporal Memory",
          },
          {
            name: "lineage_succession_data",
            glyph: "⬘",
            color: "bg-amber-800",
            description: "Bloodlines, provenance",
            rNumber: 8,
            rName: "Temporal Memory",
          },
        ],
      },
      {
        name: "sovereign_wisdom",
        glyph: "✦",
        description: "Sovereign thought, legal reasoning, ethical frameworks",
        pNumber: 9,
        children: [
          {
            name: "legal_ethical_frameworks",
            glyph: "✶",
            color: "bg-orange-500",
            description: "Developed legal/ethical structures",
            rNumber: 6,
            rName: "Creative Output",
          },
          {
            name: "governance_interfaces",
            glyph: "⬖",
            color: "bg-fuchsia-500",
            description: "Boundaries for ethical/legal decisions",
            rNumber: 9,
            rName: "Interface Layer",
          },
        ],
      },
      {
        name: "registry",
        glyph: "⭣",
        description: "Registry/Archive for TATA",
        pNumber: 11,
        children: [
          {
            name: "tata_registry.json",
            glyph: "📄",
            color: "bg-gray-500",
            description: "JSON registry file for TATA",
            rNumber: 0,
            rName: "File",
          },
          {
            name: "README.md",
            glyph: "📄",
            color: "bg-gray-500",
            description: "Documentation for TATA registry",
            rNumber: 0,
            rName: "File",
          },
        ],
      },
    ],
  },
  {
    name: "Atlas",
    color: "bg-green-500",
    emoji: "🟢",
    description: "Identity / Mapping; Knowledge Architecture, Pattern",
    dominantResonance: "▲ P3",
    petals: [
      {
        name: "primal_cartography",
        glyph: "◎",
        description: "Foundational knowledge structures, first principles of mapping",
        pNumber: 1,
        children: [
          {
            name: "core_axiom_library",
            glyph: "⬣",
            color: "bg-red-500",
            description: "Core truths and principles for mapping",
            rNumber: 11,
            rName: "Registry",
          },
          {
            name: "ontological_input_signals",
            glyph: "◍",
            color: "bg-green-500",
            description: "Foundational concepts for ontology",
            rNumber: 1,
            rName: "Signal/Input",
          },
        ],
      },
      {
        name: "identity_map",
        glyph: "▲",
        description: "Core identity models, entity relationship maps",
        pNumber: 3,
        children: [
          {
            name: "dna_identity_blueprints",
            glyph: "⬣",
            color: "bg-red-500",
            description: "Individual/Family/Entity ID structures",
            rNumber: 11,
            rName: "Registry",
          },
          {
            name: "entity_relationship_graphs",
            glyph: "▲",
            color: "bg-green-500",
            description: "Mapping connections",
            rNumber: 3,
            rName: "Triad Substructure",
          },
        ],
      },
      {
        name: "knowledge_vessel",
        glyph: "⭟",
        description: "Active models, LLMs, learning systems, quantum-neural processor",
        pNumber: 5,
        children: [
          {
            name: "active_ai_models",
            glyph: "⬟",
            color: "bg-blue-500",
            description: "Running AI models, LLMs",
            rNumber: 5,
            rName: "Execution Vessel",
          },
          {
            name: "quantum_neural_processor_outputs",
            glyph: "✶",
            color: "bg-yellow-500",
            description: "Creative Output from P5 vessel, e.g. QNP results",
            rNumber: 6,
            rName: "Creative Output",
          },
        ],
      },
      {
        name: "resonance_patterns",
        glyph: "⬢",
        description: "Life patterns, frequency maps, geometric overlays",
        pNumber: 7,
        children: [
          {
            name: "chakra_energetic_overlays",
            glyph: "⧫",
            color: "bg-purple-500",
            description: "Energetic mapping",
            rNumber: 7,
            rName: "Soulstate Insight",
          },
          {
            name: "frequency_pattern_analysis",
            glyph: "⧫",
            color: "bg-amber-800",
            description: "Resonance analysis",
            rNumber: 7,
            rName: "Soulstate Insight",
          },
        ],
      },
      {
        name: "pattern_intelligence",
        glyph: "✦",
        description: "Pattern recognition, cognitive mapping, analytics",
        pNumber: 9,
        children: [
          {
            name: "recognized_fractal_patterns",
            glyph: "✶",
            color: "bg-blue-500",
            description: "Identified patterns",
            rNumber: 6,
            rName: "Creative Output",
          },
          {
            name: "knowledge_access_interfaces",
            glyph: "⬖",
            color: "bg-yellow-500",
            description: "Access to patterns/knowledge",
            rNumber: 9,
            rName: "Interface Layer",
          },
        ],
      },
      {
        name: "registry_sync",
        glyph: "⭣",
        description: "Registry/Archive for ATLAS, emphasizing sync role",
        pNumber: 11,
        children: [
          {
            name: "atlas_registry.json",
            glyph: "📄",
            color: "bg-gray-500",
            description: "JSON registry file for ATLAS",
            rNumber: 0,
            rName: "File",
          },
          {
            name: "README.md",
            glyph: "📄",
            color: "bg-gray-500",
            description: "Documentation for ATLAS registry",
            rNumber: 0,
            rName: "File",
          },
        ],
      },
    ],
  },
  {
    name: "Dojo",
    color: "bg-blue-500",
    emoji: "🔵",
    description: "Life Pattern / Enactment; Execution, Crucible, Process",
    dominantResonance: "⬢ P7",
    petals: [
      {
        name: "primal_crucible",
        glyph: "◎",
        description: "Core process principles, execution fundamentals",
        pNumber: 1,
        children: [
          {
            name: "execution_principles_base",
            glyph: "⬣",
            color: "bg-red-500",
            description: "Fundamental execution laws/axioms",
            rNumber: 11,
            rName: "Registry",
          },
          {
            name: "process_trigger_inputs",
            glyph: "◍",
            color: "bg-green-500",
            description: "Process triggers",
            rNumber: 1,
            rName: "Signal/Input",
          },
        ],
      },
      {
        name: "choreography_structure",
        glyph: "▲",
        description: "Defining process flows, task links, operational structures",
        pNumber: 3,
        children: [
          {
            name: "docker_process_configs",
            glyph: "⬣",
            color: "bg-yellow-500",
            description: "Configuration files for processes",
            rNumber: 11,
            rName: "Registry",
          },
          {
            name: "task_dependency_links",
            glyph: "⬕",
            color: "bg-purple-500",
            description: "Linking tasks/processes",
            rNumber: 4,
            rName: "Sync/Transfer",
          },
        ],
      },
      {
        name: "chakra_vessel",
        glyph: "⭟",
        description: "Active chakra processes, bootstrapping operations",
        pNumber: 5,
        children: [
          {
            name: "bootstrap_execution_scripts",
            glyph: "⬟",
            color: "bg-purple-500",
            description: "Setup/initiation scripts",
            rNumber: 5,
            rName: "Execution Vessel",
          },
          {
            name: "chakra_flow_control_sync",
            glyph: "⬕",
            color: "bg-amber-800",
            description: "Managing energy/data flows",
            rNumber: 4,
            rName: "Sync/Transfer",
          },
        ],
      },
      {
        name: "execution_core",
        glyph: "⬢",
        description: "Runtime operations, DOJO 3-Pulse system, container state",
        pNumber: 7,
        children: [
          {
            name: "temporal_truth_verification_process",
            glyph: "⬟",
            color: "bg-red-500",
            description: "Scripts for 3-Pulse System",
            rNumber: 5,
            rName: "Execution Vessel",
          },
          {
            name: "live_container_state_signals",
            glyph: "◍",
            color: "bg-amber-800",
            description: "Live status from containers",
            rNumber: 1,
            rName: "Signal/Input",
          },
          {
            name: "runtime_error_logs",
            glyph: "⬰",
            color: "bg-green-500",
            description: "Operational logs, error logs",
            rNumber: 2,
            rName: "Reflection/Audit",
          },
        ],
      },
      {
        name: "execution_intelligence",
        glyph: "✦",
        description: "Higher-order processing, execution optimization",
        pNumber: 9,
        children: [
          {
            name: "process_optimization_outputs",
            glyph: "✶",
            color: "bg-orange-500",
            description: "Optimized execution paths/strategies",
            rNumber: 6,
            rName: "Creative Output",
          },
          {
            name: "process_control_interfaces",
            glyph: "⬖",
            color: "bg-purple-500",
            description: "Interfaces for managing/monitoring execution",
            rNumber: 9,
            rName: "Interface Layer",
          },
        ],
      },
      {
        name: "registry",
        glyph: "⭣",
        description: "Registry/Archive for DOJO",
        pNumber: 11,
        children: [
          {
            name: "dojo_registry.json",
            glyph: "📄",
            color: "bg-gray-500",
            description: "JSON registry file for DOJO",
            rNumber: 0,
            rName: "File",
          },
          {
            name: "README.md",
            glyph: "📄",
            color: "bg-gray-500",
            description: "Documentation for DOJO registry",
            rNumber: 0,
            rName: "File",
          },
        ],
      },
    ],
  },
  {
    name: "ObiWan",
    color: "bg-purple-500",
    emoji: "🟣",
    description: "Operation / Echo & Cognition / Expression; Observer, Reflection, Cognition, Memory",
    dominantResonance: "⬟ P5 & ✦ P9",
    petals: [
      {
        name: "observer_core",
        glyph: "◎",
        description: "Fundamental observation principles, witness consciousness, harmony monitoring",
        pNumber: 1,
        children: [
          {
            name: "observer_axioms_principles",
            glyph: "⬣",
            color: "bg-red-500",
            description: "Core observation truths",
            rNumber: 11,
            rName: "Registry",
          },
          {
            name: "raw_awareness_input_signals",
            glyph: "◍",
            color: "bg-green-500",
            description: "Unprocessed awareness data",
            rNumber: 1,
            rName: "Signal/Input",
          },
        ],
      },
      {
        name: "witness_framework",
        glyph: "▲",
        description: "Frameworks for reflection, structured meditation, meta-awareness structure",
        pNumber: 3,
        children: [
          {
            name: "meditation_reflection_frameworks",
            glyph: "▲",
            color: "bg-blue-500",
            description: "Structured reflection methods",
            rNumber: 3,
            rName: "Triad Substructure",
          },
          {
            name: "reflection_protocol_audits",
            glyph: "⬰",
            color: "bg-yellow-500",
            description: "Methods & logs of reflection",
            rNumber: 2,
            rName: "Reflection/Audit",
          },
        ],
      },
      {
        name: "reflective_memory",
        glyph: "⭟",
        description: "Storing observations, echoes, processed memory, synthesis",
        pNumber: 5,
        children: [
          {
            name: "synthesized_insights_essence",
            glyph: "⧫",
            color: "bg-green-500",
            description: "Integrated understanding, meta-awareness",
            rNumber: 7,
            rName: "Soulstate Insight",
          },
          {
            name: "persona_journals_logs",
            glyph: "⬘",
            color: "bg-blue-500",
            description: "Personal logs, evolving identity streams",
            rNumber: 8,
            rName: "Temporal Memory",
          },
          {
            name: "oowl_memory_system_logs",
            glyph: "⬣",
            color: "bg-amber-800",
            description: "Logs from specific memory systems like OOWL",
            rNumber: 11,
            rName: "Registry",
          },
        ],
      },
      {
        name: "memory_patterns",
        glyph: "⬢",
        description: "Memory formation, recall patterns, temporal awareness, dream processing",
        pNumber: 7,
        children: [
          {
            name: "chronological_memory_timelines",
            glyph: "⬘",
            color: "bg-purple-500",
            description: "Organized memory structures",
            rNumber: 8,
            rName: "Temporal Memory",
          },
          {
            name: "dream_emotional_resonance",
            glyph: "⧫",
            color: "bg-amber-800",
            description: "Emotional memory patterns, dream analysis",
            rNumber: 7,
            rName: "Soulstate Insight",
          },
        ],
      },
      {
        name: "cognitive_expression",
        glyph: "✦",
        description: "Active cognition, creative output, interfaces",
        pNumber: 9,
        children: [
          {
            name: "generated_knowledge_maps",
            glyph: "✶",
            color: "bg-orange-500",
            description: "Visual/conceptual maps",
            rNumber: 6,
            rName: "Creative Output",
          },
          {
            name: "developed_cognitive_models",
            glyph: "✶",
            color: "bg-blue-500",
            description: "Models of thought/understanding",
            rNumber: 6,
            rName: "Creative Output",
          },
          {
            name: "creative_outputs_poetry_art",
            glyph: "✶",
            color: "bg-purple-500",
            description: "Poetry, symbolic art",
            rNumber: 6,
            rName: "Creative Output",
          },
          {
            name: "user_interaction_interfaces",
            glyph: "⬖",
            color: "bg-yellow-500",
            description: "Voice streams, UI elements",
            rNumber: 9,
            rName: "Interface Layer",
          },
        ],
      },
      {
        name: "registry",
        glyph: "⭣",
        description: "Registry/Archive for OBIWAN",
        pNumber: 11,
        children: [
          {
            name: "obiwan_registry.json",
            glyph: "📄",
            color: "bg-gray-500",
            description: "JSON registry file for OBIWAN",
            rNumber: 0,
            rName: "File",
          },
          {
            name: "README.md",
            glyph: "📄",
            color: "bg-gray-500",
            description: "Documentation for OBIWAN registry",
            rNumber: 0,
            rName: "File",
          },
        ],
      },
    ],
  },
]

// Component for displaying a recursive node
const RecursiveNodeComponent = ({ node }: { node: RecursiveNode }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [showInfo, setShowInfo] = useState(false)

  return (
    <div className="ml-6 border-l pl-4 py-1">
      <div className="flex items-center gap-2">
        <div className={`${node.color} text-white w-6 h-6 flex items-center justify-center rounded-full text-xs`}>
          {node.glyph}
        </div>
        <span className="font-medium">{node.name}</span>

        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="ghost" size="icon" className="h-6 w-6" onClick={() => setShowInfo(!showInfo)}>
                <Info className="h-4 w-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>
                R{node.rNumber}: {node.rName}
              </p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>

        {node.children && (
          <Button variant="ghost" size="icon" className="h-6 w-6" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <ChevronDown className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
          </Button>
        )}
      </div>

      {showInfo && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="ml-8 mt-2 p-3 bg-slate-100 dark:bg-slate-800 rounded-md text-sm"
        >
          <div className="flex justify-between items-start">
            <div>
              <div>
                <strong>Description:</strong> {node.description}
              </div>
              <div>
                <strong>R{node.rNumber}:</strong> {node.rName}
              </div>
            </div>
            <Button variant="ghost" size="icon" className="h-6 w-6" onClick={() => setShowInfo(false)}>
              <X className="h-4 w-4" />
            </Button>
          </div>
        </motion.div>
      )}

      {isOpen && node.children && (
        <div className="ml-2">
          {node.children.map((child, index) => (
            <RecursiveNodeComponent key={index} node={child} />
          ))}
        </div>
      )}
    </div>
  )
}

// Component for displaying a prime petal
const PrimePetalComponent = ({ petal }: { petal: PrimePetal }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [showInfo, setShowInfo] = useState(false)

  return (
    <div className="mb-4">
      <div className="flex items-center gap-2">
        <Button variant="ghost" size="icon" className="h-6 w-6" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <ChevronDown className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
        </Button>
        <div className="bg-slate-200 dark:bg-slate-700 w-8 h-8 flex items-center justify-center rounded-full text-lg">
          {petal.glyph}
        </div>
        <span className="font-semibold">{petal.name}</span>

        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="ghost" size="icon" className="h-6 w-6" onClick={() => setShowInfo(!showInfo)}>
                <Info className="h-4 w-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>P{petal.pNumber}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>

      {showInfo && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="ml-8 mt-2 p-3 bg-slate-100 dark:bg-slate-800 rounded-md text-sm"
        >
          <div className="flex justify-between items-start">
            <div>
              <div>
                <strong>Description:</strong> {petal.description}
              </div>
              <div>
                <strong>P{petal.pNumber}</strong>
              </div>
            </div>
            <Button variant="ghost" size="icon" className="h-6 w-6" onClick={() => setShowInfo(false)}>
              <X className="h-4 w-4" />
            </Button>
          </div>
        </motion.div>
      )}

      {isOpen && (
        <div>
          {petal.children.map((node, index) => (
            <RecursiveNodeComponent key={index} node={node} />
          ))}
        </div>
      )}
    </div>
  )
}

// Component for displaying a field
const FieldComponent = ({ field }: { field: Field }) => {
  const [isExpanded, setIsExpanded] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [showInfo, setShowInfo] = useState(false)

  return (
    <Card className={`mb-6 ${isExpanded ? "w-full" : "w-full md:w-[calc(50%-0.75rem)]"}`}>
      <CardHeader className={`${field.color} text-white rounded-t-lg`}>
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="text-2xl">{field.emoji}</span>
            <CardTitle>{field.name}</CardTitle>
          </div>
          <div className="flex gap-1">
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 text-white hover:bg-white/20"
              onClick={() => setShowInfo(!showInfo)}
            >
              <Info className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 text-white hover:bg-white/20"
              onClick={() => setIsExpanded(!isExpanded)}
            >
              <Maximize2 className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 text-white hover:bg-white/20"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <ChevronDown className="h-5 w-5" /> : <ChevronRight className="h-5 w-5" />}
            </Button>
          </div>
        </div>
        {showInfo && (
          <CardDescription className="text-white/90 mt-2">
            <strong>Dominant Resonance:</strong> {field.dominantResonance}
            <br />
            <strong>Description:</strong> {field.description}
          </CardDescription>
        )}
      </CardHeader>
      {isOpen && (
        <CardContent className="pt-4">
          {field.petals.map((petal, index) => (
            <PrimePetalComponent key={index} petal={petal} />
          ))}
        </CardContent>
      )}
    </Card>
  )
}

// Structural Validation Component
const StructuralValidation = () => {
  const [validationResult, setValidationResult] = useState<any>(null)
  const [showValidation, setShowValidation] = useState(false)

  useEffect(() => {
    // Run validation on component mount
    const result = validateFractalFieldStructure(fractalFieldData)
    setValidationResult(result)
  }, [])

  return (
    <div className="mb-6">
      <Button variant="outline" onClick={() => setShowValidation(!showValidation)} className="mb-4">
        {validationResult?.isValid ? (
          <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
        ) : (
          <AlertTriangle className="h-4 w-4 mr-2 text-amber-500" />
        )}
        {showValidation ? "Hide" : "Show"} Structure Validation
      </Button>

      {showValidation && validationResult && (
        <Alert variant={validationResult.isValid ? "default" : "destructive"}>
          <AlertTitle className="flex items-center">
            {validationResult.isValid ? (
              <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
            ) : (
              <AlertTriangle className="h-4 w-4 mr-2" />
            )}
            Fractal Field Structure Validation
          </AlertTitle>
          <AlertDescription>
            <p className="mb-2">{validationResult.summary}</p>

            {!validationResult.isValid && (
              <div className="mt-2 space-y-2">
                {validationResult.fieldResults.map(
                  (result: any, index: number) =>
                    !result.isComplete && (
                      <div key={index} className="pl-4 border-l-2 border-red-300">
                        <p className="font-medium">{result.fieldName}</p>
                        <ul className="list-disc pl-5 text-sm">
                          {result.incompleteDetails.map((detail: string, i: number) => (
                            <li key={i}>{detail}</li>
                          ))}
                        </ul>
                      </div>
                    ),
                )}
              </div>
            )}
          </AlertDescription>
        </Alert>
      )}
    </div>
  )
}

// Main component for the fractal field visualization
export default function FractalFieldVisualization() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Fractal Field Structure</h2>
        <div className="flex gap-2">
          <Button variant={viewMode === "grid" ? "default" : "outline"} onClick={() => setViewMode("grid")} size="sm">
            Grid View
          </Button>
          <Button variant={viewMode === "list" ? "default" : "outline"} onClick={() => setViewMode("list")} size="sm">
            List View
          </Button>
        </div>
      </div>

      <StructuralValidation />

      <div className={`${viewMode === "grid" ? "flex flex-wrap gap-6" : "space-y-4"}`}>
        {fractalFieldData.map((field, index) => (
          <FieldComponent key={index} field={field} />
        ))}
      </div>
    </div>
  )
}
