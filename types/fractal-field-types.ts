// Define the structure of our fractal field data
export interface RecursiveNode {
  name: string
  glyph: string
  color: string
  description: string
  rNumber: number
  rName: string
  children?: RecursiveNode[]
}

export interface PrimePetal {
  name: string
  glyph: string
  description: string
  pNumber: number
  children: RecursiveNode[]
}

export interface Field {
  name: string
  color: string
  emoji: string
  description: string
  dominantResonance: string
  petals: PrimePetal[]
}
