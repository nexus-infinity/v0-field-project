import FractalFieldVisualization from "@/components/fractal-field-visualization"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MainNav } from "@/components/main-nav"

export default function Home() {
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
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Fractal Field System</h1>
          <p className="text-slate-500 dark:text-slate-400 max-w-3xl">
            Prime-Aligned Living System for TATA, ATLAS, DOJO & OBIWAN
          </p>
        </div>

        <Tabs defaultValue="visualization" className="w-full">
          <TabsList className="grid w-full md:w-[400px] grid-cols-2">
            <TabsTrigger value="visualization">Visualization</TabsTrigger>
            <TabsTrigger value="structure">Structure</TabsTrigger>
          </TabsList>
          <TabsContent value="visualization" className="mt-6">
            <FractalFieldVisualization />
          </TabsContent>
          <TabsContent value="structure" className="mt-6">
            <div className="bg-white dark:bg-slate-900 rounded-lg border p-6 overflow-auto max-h-[80vh]">
              <pre className="text-sm whitespace-pre-wrap">
                {`# 🌐 FRACTAL FIELD WIREFRAME v1.6 (Definitive Scaffolding)

**"Prime-Aligned Living System for TATA, ATLAS, DOJO & OBIWAN"**
*Definitive Recursive Blueprint - Based on JB's v1.6 Refinement*

📂 /users/jbear/
├── 🔴 **Tata/** (Dominant Resonance: ◎ P1 Source/Core; Integrity, Law, Physics, Trident)
│   ├── \`◎_source_core/\` *(Reflecting P1: Core truths, foundational anchors, Trident physics, Jacques Rich legacy)*
│   │   ├── \`🟥 ⬣_axioms_foundational/\` *(R11 Registry: Foundational principles, core system laws)*
│   │   └── \`🟩 ⬣_legacy_data_anchors/\` *(R11 Registry: e.g., Jacques Rich legacy documents, historical truths)*
│   ├── \`▲_integrity_structure/\` *(Reflecting P3: System integrity rules, lawful structures, identity validation)*
│   │   ├── \`🟦 ⬣_legal_trust_structures/\` *(R11 Registry: Legal documents, corporate/trust structures)*
│   │   └── \`🟨 ⬰_compliance_verification_logs/\` *(R2 Reflection/Audit: Logs of compliance checks, audits)*
│   ├── \`⭟_verification_vessel/\` *(Reflecting P5: Processes and tools for verification, certification)*
│   │   ├── \`🟨 ⬣_certified_artifacts_evidence/\` *(R11 Registry: Verified/certified evidence or data)*
│   │   └── \`🟦 ✶_verification_protocols_output/\` *(R6 Creative Output: Generated protocols/reports from verification ops)*
│   ├── \`⬢_temporal_records/\` *(Reflecting P7: Historical patterns, timed events, lineage, sequence validation)*
│   │   ├── \`🟣 ⬘_chronological_event_logs/\` *(R8 Temporal Memory: Specific historical events, timelines)*
│   │   └── \`🟤 ⬘_lineage_succession_data/\` *(R8 Temporal Memory: e.g., bloodlines, provenance)*
│   ├── \`✦_sovereign_wisdom/\` *(Reflecting P9: Sovereign thought, legal reasoning, ethical frameworks)*
│   │   ├── \`🟧 ✶_legal_ethical_frameworks/\` *(R6 Creative Output: Developed legal/ethical structures)*
│   │   └── \`🟪 ⬖_governance_interfaces/\` *(R9 Interface Layer: Boundaries for ethical/legal decisions)*
│   └── \`⭣_registry/\` *(P11 Registry/Archive for TATA)*
│       ├── \`tata_registry.json\`
│       └── \`README.md\`
│
├── 🟢 **Atlas/** (Dominant Resonance: ▲ P3 Identity / Mapping; Knowledge Architecture, Pattern)
│   ├── \`◎_primal_cartography/\` *(Reflecting P1: Foundational knowledge structures, first principles of mapping)*
│   │   ├── \`🟥 ⬣_core_axiom_library/\` *(R11 Registry: Core truths and principles for mapping)*
│   │   └── \`🟩 ◍_ontological_input_signals/\` *(R1 Signal/Input: Foundational concepts for ontology)*
│   ├── \`▲_identity_map/\` *(Reflecting P3: Core identity models, entity relationship maps)*
│   │   ├── \`🟥 ⬣_dna_identity_blueprints/\` *(R11 Registry: Individual/Family/Entity ID structures)*
│   │   └── \`🟩 ▲_entity_relationship_graphs/\` *(R3 Triad Substructure: Mapping connections)*
│   ├── \`⭟_knowledge_vessel/\` *(Reflecting P5: Active models, LLMs, learning systems, quantum-neural processor)*
│   │   ├── \`🟦 ⬟_active_ai_models/\` *(R5 Execution Vessel: Running AI models, LLMs)*
│   │   └── \`🟨 ✶_quantum_neural_processor_outputs/\` *(R6 Creative Output from P5 vessel, e.g. QNP results)*
│   ├── \`⬢_resonance_patterns/\` *(Reflecting P7: Life patterns, frequency maps, geometric overlays)*
│   │   ├── \`🟪 ⧫_chakra_energetic_overlays/\` *(R7 Soulstate Insight: Energetic mapping)*
│   │   └── \`🟫 ⧫_frequency_pattern_analysis/\` *(R7 Soulstate Insight: Resonance analysis)*
│   ├── \`✦_pattern_intelligence/\` *(Reflecting P9: Pattern recognition, cognitive mapping, analytics)*
│   │   ├── \`🟦 ✶_recognized_fractal_patterns/\` *(R6 Creative Output: Identified patterns)*
│   │   └── \`🟨 ⬖_knowledge_access_interfaces/\` *(R9 Interface Layer: Access to patterns/knowledge)*
│   └── \`⭣_registry_sync/\` *(P11 Registry/Archive for ATLAS, emphasizing sync role)*
│       ├── \`atlas_registry.json\`
│       └── \`README.md\`
│
├── 🔵 **Dojo/** (Dominant Resonance: ⬢ P7 Life Pattern / Enactment; Execution, Crucible, Process)
│   ├── \`◎_primal_crucible/\` *(Reflecting P1: Core process principles, execution fundamentals)*
│   │   ├── \`🟥 ⬣_execution_principles_base/\` *(R11 Registry: Fundamental execution laws/axioms)*
│   │   └── \`🟩 ◍_process_trigger_inputs/\` *(R1 Signal/Input: Process triggers)*
│   ├── \`▲_choreography_structure/\` *(Reflecting P3: Defining process flows, task links, operational structures)*
│   │   ├── \`🟨 ⬣_docker_process_configs/\` *(R11 Registry: Configuration files for processes)*
│   │   └── \`🟪 ⬕_task_dependency_links/\` *(R4 Sync/Transfer: Linking tasks/processes)*
│   ├── \`⭟_chakra_vessel/\` *(Reflecting P5: Active chakra processes, bootstrapping operations)*
│   │   ├── \`🟣 ⬟_bootstrap_execution_scripts/\` *(R5 Execution Vessel: Setup/initiation scripts)*
│   │   └── \`🟫 ⬕_chakra_flow_control_sync/\` *(R4 Sync/Transfer: Managing energy/data flows)*
│   ├── \`⬢_execution_core/\` *(Reflecting P7: Runtime operations, DOJO 3-Pulse system, container state)*
│   │   ├── \`🟥 ⬟_temporal_truth_verification_process/\` *(R5 Execution Vessel: e.g., scripts for 3-Pulse System)*
│   │   ├── \`🟫 ◍_live_container_state_signals/\` *(R1 Signal/Input: Live status from containers)*
│   │   └── \`🟩 ⬰_runtime_error_logs/\` *(R2 Reflection/Audit: Operational logs, error logs)*
│   ├── \`✦_execution_intelligence/\` *(Reflecting P9: Higher-order processing, execution optimization)*
│   │   ├── \`🟧 ✶_process_optimization_outputs/\` *(R6 Creative Output: Optimized execution paths/strategies)*
│   │   └── \`🟪 ⬖_process_control_interfaces/\` *(R9 Interface Layer: Interfaces for managing/monitoring execution)*
│   └── \`⭣_registry/\` *(P11 Registry/Archive for DOJO)*
│       ├── \`dojo_registry.json\`
│       └── \`README.md\`
│
├── 🟣 **ObiWan/** (Dominant Resonances: ⬟ P5 Operation / Echo & ✦ P9 Cognition / Expression; Observer, Reflection, Cognition, Memory)
│   ├── \`◎_observer_core/\` *(Reflecting P1: Fundamental observation principles, witness consciousness, harmony monitoring)*
│   │   ├── \`🟥 ⬣_observer_axioms_principles/\` *(R11 Registry: Core observation truths)*
│   │   └── \`🟩 ◍_raw_awareness_input_signals/\` *(R1 Signal/Input: Unprocessed awareness data)*
│   ├── \`▲_witness_framework/\` *(Reflecting P3: Frameworks for reflection, structured meditation, meta-awareness structure)*
│   │   ├── \`🟦 ▲_meditation_reflection_frameworks/\` *(R3 Triad Substructure: Structured reflection methods)*
│   │   └── \`🟨 ⬰_reflection_protocol_audits/\` *(R2 Reflection/Audit: Methods & logs of reflection)*
│   ├── \`⭟_reflective_memory/\` *(Reflecting P5: Storing observations, echoes, processed memory, synthesis)*
│   │   ├── \`🟩 ⧫_synthesized_insights_essence/\` *(R7 Soulstate Insight: Integrated understanding, meta-awareness)*
│   │   ├── \`🟦 ⬘_persona_journals_logs/\` *(R8 Temporal Memory: Personal logs, evolving identity streams)*
│   │   └── \`🟫 ⬣_oowl_memory_system_logs/\` *(R11 Registry: Logs from specific memory systems like OOWL)*
│   ├── \`⬢_memory_patterns/\` *(Reflecting P7: Memory formation, recall patterns, temporal awareness, dream processing)*
│   │   ├── \`🟣 ⬘_chronological_memory_timelines/\` *(R8 Temporal Memory: Organized memory structures)*
│   │   └── \`🟫 ⧫_dream_emotional_resonance/\` *(R7 Soulstate Insight: Emotional memory patterns, dream analysis)*
│   ├── \`✦_cognitive_expression/\` *(Reflecting P9: Active cognition, creative output, interfaces)*
│   │   ├── \`🟧 ✶_generated_knowledge_maps/\` *(R6 Creative Output: Visual/conceptual maps)*
│   │   ├── \`🟦 ✶_developed_cognitive_models/\` *(R6 Creative Output: Models of thought/understanding)*
│   │   ├── \`🟪 ✶_creative_outputs_poetry_art/\` *(R6 Creative Output: Poetry, symbolic art)*
│   │   └── \`🟨 ⬖_user_interaction_interfaces/\` *(R9 Interface Layer: e.g., voice streams, UI elements)*
│   └── \`⭣_registry/\` *(P11 Registry/Archive for OBIWAN)*
│       ├── \`obiwan_registry.json\`
│       └── \`README.md\``}
              </pre>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </main>
  )
}
