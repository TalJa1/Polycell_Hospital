import React from "react";
import TraineeHeader from "../../components/layoutComponents/TraineeHeader";
import { Box } from "@mui/material";
import Footer from "../../components/layoutComponents/Footer";
import TraineeClassListToEnrollCp from "../../components/traineeClassListComponents/TraineeClassListCp";
import TraineCourseListCp from "../../components/TraineeCourseListComponent/TraineCourseListCp";

const CourseListPage: React.FC = () => {
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
        {/* <TraineCourseListCp /> */}
        <TraineeClassListToEnrollCp/>
      </Box>
      <Footer />
    </div>
  );
};

export default CourseListPage;
