import React from "react";
import Header from "../layoutComponents/Header";
import Footer from "../layoutComponents/Footer";
import CourseTabBarCp from "./CourseTabBarCp";
import { Box } from "@mui/material";
import TraineeHeader from "../layoutComponents/TraineeHeader";

const CourseCp: React.FC = () => {
  return (
    <div className="class-container">
      <TraineeHeader title="Course" />
      <Box
        sx={{
          backgroundColor: "white",
          display: "flex",
          justifyContent: "center",
          maxHeight: '100%',
          height: "1000px"
        }}
      >
        <CourseTabBarCp />
      </Box>
      <Footer />
    </div>
  );
};

export default CourseCp;
