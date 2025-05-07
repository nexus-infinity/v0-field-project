"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

export function MainNav() {
  const pathname = usePathname()

  return (
    <nav className="flex items-center space-x-4 lg:space-x-6">
      <Link
        href="/"
        className={cn(
          "text-sm font-medium transition-colors hover:text-primary",
          pathname === "/" ? "text-primary" : "text-muted-foreground",
        )}
      >
        Visualization
      </Link>
      <Link
        href="/symbolic-ontology"
        className={cn(
          "text-sm font-medium transition-colors hover:text-primary",
          pathname === "/symbolic-ontology" ? "text-primary" : "text-muted-foreground",
        )}
      >
        Symbolic Ontology
      </Link>
      <Link
        href="/registry-viewer"
        className={cn(
          "text-sm font-medium transition-colors hover:text-primary",
          pathname === "/registry-viewer" ? "text-primary" : "text-muted-foreground",
        )}
      >
        Registry Viewer
      </Link>
      <Link
        href="/validation-report"
        className={cn(
          "text-sm font-medium transition-colors hover:text-primary",
          pathname === "/validation-report" ? "text-primary" : "text-muted-foreground",
        )}
      >
        Validation Report
      </Link>
    </nav>
  )
}
