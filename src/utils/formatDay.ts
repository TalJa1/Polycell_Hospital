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

export function formatTimeSlot(input: string): string {
  const regex = /Start\{(\d{2}:\d{2}),(\w+)\};Stop\{(\d{2}:\d{2}),(\w+)\}/g;
  const matches = input.match(regex);

  if (!matches) {
    throw new Error('Invalid input format');
  }

  const formattedTimeSlots: string[] = [];

  matches.forEach((match) => {
    const [, startTime, day, stopTime] = match.match(/Start\{(\d{2}:\d{2}),(\w+)\};Stop\{(\d{2}:\d{2}),(\w+)\}/)!;
    
    const formattedStartTime = formatTime(startTime);
    const formattedStopTime = formatTime(stopTime);

    const timeSlot = `${day}(${formattedStartTime} - ${formattedStopTime})`;
    formattedTimeSlots.push(timeSlot);
  });

  return formattedTimeSlots.join("\n");
}




function formatTime(time: string): string {
  const [hours, minutes] = time.split(':');
  const formattedHours = parseInt(hours, 10) < 10 ? `0${parseInt(hours, 10)}` : hours;
  const formattedMinutes = parseInt(minutes, 10) < 10 ? `0${parseInt(minutes, 10)}` : minutes;
  return `${formattedHours}:${formattedMinutes}`;
}