import { GeneralSchedule } from "./constant";

export const formatGeneralSchedule = (schedules: GeneralSchedule[]): string => {
  return schedules
    .map((schedule) => {
      const { time, dayOfWeek } = schedule;
      const startTime = time && time[0]?.format("HH:mm");
      const stopTime = time && time[1]?.format("HH:mm");
      return `Start{${startTime || ""},${dayOfWeek}};Stop{${stopTime || ""},${dayOfWeek}}`;
    })
    .join(";");
};
