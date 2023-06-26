import { Box } from "@mui/material";
import React from "react";
import TraineeHeader from "../layoutComponents/TraineeHeader";
import FormActivityUrl from "./FormActivityUrl";
import CourseTabBar from "../courseComponents/CourseTabBar";
import Footer from "../layoutComponents/Footer";
import { useParams } from "react-router-dom";

const FormActivityCp: React.FC = () => {
    const { type } = useParams();

  return (
    <div className="class-container">
      <TraineeHeader title="Course" />
      <Box
        sx={{
          backgroundColor: "white",
          display: "flex",
          justifyContent: "center",
          maxHeight: "100%",
          position: "relative",
        }}
      >
        {/* <CourseTabBarCp editMode={editMode} /> */}
        <Box sx={{ width: "70%" }}>
          <CourseTabBar />
          {type === "URL" ? <FormActivityUrl /> : <></>}
        </Box>
      </Box>
      <Footer />
    </div>
  );
};

export default FormActivityCp;
