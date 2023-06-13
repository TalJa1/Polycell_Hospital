export interface CustomHookAddProgram {
    programs: Program[];
    cycles:   Cycle[];
}

export interface Cycle {
    id:          string;
    description: string;
    duration:    number;
}

export interface Program {
    id:                  string;
    description:         string;
    code:                string;
    department:          Department;
    programPerClassList: ProgramPerClassList[];
}

export interface Department {
    id:   string;
    name: string;
    code: string;
}

export interface ProgramPerClassList {
    programId:        string;
    programStartDate: string;
    programEndDate:   string;
    minQuantity:      number;
    maxQuantity:      number;
    classId:          string;
}
