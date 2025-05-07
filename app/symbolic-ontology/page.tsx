import SymbolicOntology from "@/components/symbolic-ontology"
import { MainNav } from "@/components/main-nav"

export default function SymbolicOntologyPage() {
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
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Symbolic Ontology</h1>
          <p className="text-slate-500 dark:text-slate-400 max-w-3xl">
            Comprehensive guide to the symbolic language of the Fractal Field System
          </p>
        </div>

        <SymbolicOntology />
      </div>
    </main>
  )
}
