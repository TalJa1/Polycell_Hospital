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
  cycleId: string;
  startDate: Date;
  endDate: Date;
}
