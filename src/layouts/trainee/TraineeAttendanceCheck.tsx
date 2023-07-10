import React from "react";
import TraineeAttendanceCp from "../../components/traineeComponents/TraineeAttendanceCp";
import Menubar from "../../components/layoutComponents/Menubar";
import TraineeHeader from "../../components/layoutComponents/TraineeHeader";
import { Box } from "@mui/material";
import Footer from "../../components/layoutComponents/Footer";

const TraineeAttendanceCheck: React.FC = () => {
  return (
    <div className="class-container">
      <TraineeHeader title="Pollycell" />
      <Box
        sx={{
          backgroundColor: "white",
          // display: "flex",
          // justifyContent: "center",
          // height: "100vh",
          position: "relative",
        }}
      >
        <TraineeAttendanceCp />
      </Box>
      <Footer />
    </div>
    // <div className="container">
    //   {/* <Menubar /> */}
    //   <main className="rightlayout">
    //     <TraineeAttendanceCp />
    //   </main>
    // </div>
  );
};

export default TraineeAttendanceCheck;
