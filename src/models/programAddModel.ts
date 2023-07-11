export interface CreateClassFormData {
  programs: Program[];
  trainers: Trainer[];
  cycles: Cycle[];
}

export interface Program {
  id: string;
  name: string;
  description: string;
  code: string;
  minQuantity: number;
  maxQuantity: number;
  isActive: boolean;
  department: Department | null;
  trainer: Trainer | null;
  ExternalResources: ExternalResource[];
}

export interface Department {
  id: string;
  name: string;
  code: string;
}

export interface Trainer {
  id: string;
  name: string;
  code: string;
  phone: string;
  birthdate: string;
  accountId: string;
  createdDate: string;
  createdBy: string;
  updatedDate: string;
  updatedBy: any;
  deleted: boolean;
}

export interface Cycle {
  id: string;
  name: string;
  description: string;
  duration: number;
}

export interface Topic {
  id: string
  name: string
  description: string
  slots: Slot[]
  createdDate: string
  modifiedDate: string
}

export interface Slot {
  id: string
  position: number
  type: string
  isHidden: boolean
  externalResource: ExternalResource
  quiz: Quiz
}

export interface ExternalResource {
  id: string
  name: string
  description: string
  externalUrl: string
  createdDate: string
  modifiedDate: string
}

export interface Quiz {
  id: string
  name: string
  closeTime: string
  gradingMethod: string
  createdDate: string
  modifiedDate: string
}

export interface Activity {
  id: string;
  name: string;
  description: string;
  materialLink: string;
  assignments: Assignment[];
}

export interface Assignment {
  id: string;
  name: string;
  startDate: string;
  dueDate: string;
  status: string;
}
