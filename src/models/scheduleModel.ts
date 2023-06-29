import { Class } from "./classManagementModel";

export interface Schedule {
  id: string;
  date: string;
  startTime: string;
  endTime: string;
  room: Room;
  clazz: Class;
}

export interface Room {
  id: string;
  name: string;
  maxCapacity: number;
}
