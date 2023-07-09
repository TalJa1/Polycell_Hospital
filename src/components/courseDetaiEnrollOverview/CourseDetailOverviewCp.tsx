import { Box, Typography } from "@mui/material";
import React from "react";
import { useLocation } from "react-router-dom";
import { Program } from "../../models/programAddModel";



const CourseDetailOverviewCp: React.FC = () => {
  const location = useLocation();
  const program: Program = location.state?.program;

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
        {program.description}
      </Typography>
    </Box>
  );
};

export default CourseDetailOverviewCp;
