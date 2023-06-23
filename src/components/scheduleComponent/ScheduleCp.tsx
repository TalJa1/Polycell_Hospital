import React from "react";
import TraineeHeader from "../layoutComponents/TraineeHeader";
import Footer from "../layoutComponents/Footer";
import { Box } from "@mui/material";
import { Calendar } from "antd";
import type { Dayjs } from "dayjs";
import type { CalendarMode } from "antd/es/calendar/generateCalendar";

const ScheduleCP: React.FC = () => {
  const onPanelChange = (value: Dayjs, mode: CalendarMode) => {
    console.log(value.format("YYYY-MM-DD"), mode);
  };
  return (
    <div className="class-container">
      <TraineeHeader title="Course" />
      <Box bgcolor="white" sx={{
        display: "flex",
        justifyContent: "center"
      }}>
        <Box sx={{
          
          width: "80%"
        }}>
          <Calendar onPanelChange={onPanelChange} />
        </Box>
      </Box>
      <Footer />
    </div>
  );
};

export default ScheduleCP;
