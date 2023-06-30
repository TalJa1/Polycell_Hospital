import { Schedule } from "./scheduleModel"

export interface Attendance {
    id: string
    status: string
    schedule: Schedule
  }