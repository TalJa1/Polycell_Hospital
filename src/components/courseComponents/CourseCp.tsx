import React, { useContext, useState } from "react";
import Header from "../layoutComponents/Header";
import Footer from "../layoutComponents/Footer";
import CourseTabBarCp from "./CourseTabBarCp";
import { Box, FormControlLabel, Switch, Typography } from "@mui/material";
import TraineeHeader from "../layoutComponents/TraineeHeader";
import CourseTabBar from "./CourseTabBar";
import CourseEditTopicAccordionCp from "./CourseEditTopicAccordionCp";
import CourseViewTopicAccordionCp from "./CourseViewTopicAccordionCp";
import { EditModeContext } from "../../provider/EditModeProvider";

const CourseCp: React.FC = () => {
  // const [editMode, setEditMode] = useState(false);

  // const handleEditModeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setEditMode(event.target.checked);
  // };

  const { editMode } = useContext(EditModeContext);

  return (
    <div className="class-container">
      <TraineeHeader title="Pollycell" />
      <Box
        sx={{
          backgroundColor: "white",
          display: "flex",
          justifyContent: "center",
          minHeight: "1000px",
          height: "fit-content",
          position: "relative",
        }}
      >
        
        <CourseTabBarCp editMode={editMode} />
      </Box>
      <Footer />
    </div>
  );
};

export default CourseCp;
