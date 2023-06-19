import React, { useState } from "react";
import Header from "../layoutComponents/Header";
import Footer from "../layoutComponents/Footer";
import CourseTabBarCp from "./CourseTabBarCp";
import { Box, FormControlLabel, Switch } from "@mui/material";
import TraineeHeader from "../layoutComponents/TraineeHeader";

const CourseCp: React.FC = () => {
  const [editMode, setEditMode] = useState(false);

  const handleEditModeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEditMode(event.target.checked);
  };

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
        <CourseTabBarCp editMode={editMode} />
        <FormControlLabel
          sx={{
            position: "absolute",
            right: "0",
          }}
          control={<Switch checked={editMode} onChange={handleEditModeChange} />}
          label="Edit mode"
        />
      </Box>
      <Footer />
    </div>
  );
};

export default CourseCp;
