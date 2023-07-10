import { Box, Typography } from "@mui/material";
import React from "react";
import CourseDetailOverview from "./CourseDetailOverview";
import CourseDetailEnrollTabbar from "./CourseDetailEnrollTabbar";
import { useLocation } from "react-router-dom";
import { Program } from "../../models/programAddModel";

const CourseDetailEnrollLeft: React.FC = () => {
  const item =
    "https://www.thetahmid.com/themes/edulyn-v1.0/assets/images/details-banner.jpg";

  const location = useLocation();
  const program: Program = location.state?.program;

  console.log(program);

  return (
    <div>
      <Typography variant="h5" fontWeight="bold">
        {program.name}
      </Typography>
      <Box>
        <CourseDetailOverview />
        <Box
          sx={{
            width: "100%",
            height: "400px",
            backgroundImage: `url(${item})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        ></Box>
        <CourseDetailEnrollTabbar />
      </Box>
    </div>
  );
};

export default CourseDetailEnrollLeft;
