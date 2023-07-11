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
    department: Department | null
    trainer: Trainer | null
    topics: Topic[]
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
  

  export interface Slot {
    id:               string;
    position:         number;
    type:             string;
    isHidden:         boolean;
    externalResource: Topic;
    quiz:             Quiz;
}

export interface Topic {
    id:           string;
    name:         string;
    description:  string;
    slots?:       Slot[];
    createdDate:  Date;
    modifiedDate: Date;
    externalUrl?: string;
}

export interface Quiz {
    id:            string;
    name:          string;
    closeTime:     Date;
    gradingMethod: string;
    createdDate:   Date;
    modifiedDate:  Date;
}
  
  export interface Activity {
    id: string
    name: string
    description: string
    materialLink: string
    assignments: Assignment[]
  }
  
  export interface Assignment {
    id: string
    name: string
    startDate: string
    dueDate: string
    status: string
  }