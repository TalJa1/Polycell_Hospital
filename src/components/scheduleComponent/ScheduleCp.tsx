import React, { useContext } from "react";
import TraineeHeader from "../layoutComponents/TraineeHeader";
import Footer from "../layoutComponents/Footer";
import { Box } from "@mui/material";
import { Calendar } from "antd";
import type { Dayjs } from "dayjs";
import type { CalendarMode } from "antd/es/calendar/generateCalendar";
import ScheduleListData from "./ScheduleListData";
import ScheduleTraineeListData from "./ScheduleTraineeListData";

import { RootState } from "../../reduxs/Root";
import { useSelector } from "react-redux";
import { SessionData } from "../../utils/constant";

const ScheduleCP: React.FC = () => {
  const onPanelChange = (value: Dayjs, mode: CalendarMode) => {
    console.log(value.format("YYYY-MM-DD"), mode);
  };
  // const { role } = useSelector((state: RootState) => state.user);

  const [sessionData, setSessionData] = React.useState<SessionData | null>(
    localStorage.getItem("sessionData")
      ? JSON.parse(localStorage.getItem("sessionData") || "")
      : null
  );

  const { role } = sessionData!;

  return (
    <div className="class-container">
      <TraineeHeader title="Pollycell">
        <Box
          bgcolor="white"
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              width: "80%",
            }}
          >
            {/* <Calendar onPanelChange={onPanelChange}  /> */}
            {role === "TRAINEE" ? (
              <ScheduleTraineeListData />
            ) : (
              <ScheduleListData />
            )}
          </Box>
        </Box>
      </TraineeHeader>

      <Footer />
    </div>
  );
};

export default ScheduleCP;
