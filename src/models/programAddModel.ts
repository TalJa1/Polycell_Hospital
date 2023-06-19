export interface CreateClassFormData {
    programs: Program[]
    trainers: Trainer[]
    cycles: Cycle[]
  }
  
  export interface Program {
    id: string
    name: string
    description: string
    code: string
    minQuantity: number
    maxQuantity: number
    isActive: boolean
    department: Department
  }
  
  export interface Department {
    id: string
    name: string
    code: string
  }
  
  export interface Trainer {
    id: string
    name: string
    code: string
    phone: string
    birthdate: string
    accountId: string
    createdDate: string
    createdBy: string
    updatedDate: string
    updatedBy: any
    deleted: boolean
  }
  
  export interface Cycle {
    id: string
    name: string
    description: string
    duration: number
  }
  