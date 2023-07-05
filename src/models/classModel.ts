export interface Class {
  id:              string;
  name:            string;
  code:            string;
  generalSchedule: string;
  createdBy:       string;
  createdDate:     string;
  quantity:        number;
  trainer:         Trainer;
  program:         Program;
  cycle:           Cycle;
  startDate:       string;
  endDate:         string;
}

export interface Cycle {
  id:          string;
  name:        string;
  description: string;
  duration:    number;
}

export interface Program {
  id:          string;
  name:        string;
  description: string;
  code:        string;
  isActive:    boolean;
  department:  Department;
}

export interface Department {
  id:   string;
  name: string;
  code: string;
}

export interface Trainer {
  id:          string;
  name:        string;
  code:        string;
  phone:       string;
  birthdate:   Date;
  accountId:   string;
  createdDate: string;
  createdBy:   string;
  updatedDate: string;
  deleted:     boolean;
}
