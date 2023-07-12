import { Box, Typography } from "@mui/material";
import React from "react";
import { useLocation } from "react-router-dom";
import { Program } from "../../models/programAddModel";
import { Class } from "../../models/classManagementModel";



const CourseDetailOverviewCp: React.FC = () => {
  const location = useLocation();
  const classData: Class = location.state?.classData;

  return (
    <Box className="course-desc">
      <Typography variant="h5" fontWeight="bold">
        Course Description
      </Typography>
      <Box
        sx={{
          borderBottom: "2px solid rgb(17, 182, 122)",
          width: "50px",
          marginBottom: "20px",
        }}
      />
      <Typography color="ActiveBorder">
        {classData.program.description}
      </Typography>
    </Box>
  );
};

export default CourseDetailOverviewCp;
