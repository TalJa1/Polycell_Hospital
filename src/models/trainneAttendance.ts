export interface TraineeAttendance {
  programId:   string;
  programCode: string;
  programName: string;
  classId:     string;
  className:   string;
  classCode:   string;
  attendances: Attendance[];
}

export interface Attendance {
  id:        string;
  status:    string;
  room:      Room;
  date:      Date;
  startTime: Date;
  endTime:   Date;
  trainer:   Trainer;
}

export interface Room {
  id:          string;
  name:        string;
  maxCapacity: number;
}

export interface Trainer {
  id:          string;
  name:        string;
  code:        string;
  phone:       string;
  birthdate:   Date;
  accountId:   string;
  createdDate: Date;
  createdBy:   string;
  updatedDate: Date;
  updatedBy:   string;
  deleted:     boolean;
}