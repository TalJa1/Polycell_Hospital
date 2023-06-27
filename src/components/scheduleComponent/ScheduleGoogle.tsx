import React from "react";
import ApiCalendar from "react-google-calendar-api";

const config = {
  clientId: "664034675426-sn98ben9gt2le1ehhkq1gl03sl3gbo4g.apps.googleusercontent.com",
  apiKey: "AIzaSyCk941oxwhlEkjVJUmaRo__8hoT-SV2KQ8",
  scope: "https://www.googleapis.com/auth/calendar",
  discoveryDocs: [
    "https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest",
  ],
};

const apiCalendar = new ApiCalendar(config);

const ScheduleGoogle: React.FC = () => {
  const handleItemClick = (event: any, name: string) => {
    if (name === "sign-in") {
      apiCalendar.handleAuthClick();
    } else if (name === "sign-out") {
      apiCalendar.handleSignoutClick();
    }
  };

  return (
    <>
      <button onClick={(e) => handleItemClick(e, "sign-in")}>sign-in</button>
      <button onClick={(e) => handleItemClick(e, "sign-out")}>sign-out</button>
    </>
  );
};

export default ScheduleGoogle;
