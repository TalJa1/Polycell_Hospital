export interface Syllabus {
    id: string
    name: string
    description: string
    passCriteria: string
    totalSessions: number
    assessmentSchemes: AssessmentScheme[]
    materials: Material[]
    modules: Module[]
  }
  
  export interface AssessmentScheme {
    id: number
    category: string
    weight: number
  }
  
  export interface Material {
    id: string
    name: string
    link: string
    description: string
  }
  
  export interface Module {
    id: string
    description: string
    moduleNo: number
    link: any
    sessions: Session[]
  }
  
  export interface Session {
    id: string
    sessionNo: number
    units: Unit[]
  }
  
  export interface Unit {
    id: number
    name: string
    description?: string
    duration: number
    unitNo: number
  }
  