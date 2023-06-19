import { Cycle, Program } from "./programAddModel";

export interface Class {
  id: string;
  name: string;
  code: string;
  generalSchedule: string;
  createdBy: string;
  createdDate: Date;
  status: string;
  programCode: string;
  minQuantity: number;
  maxQuantity: number;
  programId: string;
  departmentId: string;
  trainerId: string;
  cycleId: string;
  startDate: Date;
  endDate: Date;
  program: Program
  cycle: Cycle
}
