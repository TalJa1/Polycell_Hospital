import { Class } from "./classManagementModel";

export interface Schedule {
  id: string;
  date: string;
  startTime: string;
  endTime: string;
  room: Room;
  class: Class;
}

export interface Room {
  id: string;
  name: string;
  maxCapacity: number;
}
