import { Box, Typography } from "@mui/material";
import React from "react";
import CourseDetailOverview from "./CourseDetailOverview";
import CourseDetailEnrollTabbar from "./CourseDetailEnrollTabbar";

const CourseDetailEnrollLeft: React.FC = () => {
  const item =
    "https://www.thetahmid.com/themes/edulyn-v1.0/assets/images/details-banner.jpg";

  return (
    <div>
      <Typography variant="h5" fontWeight="bold">
        Javascript Programming From Scretch For Beginers To Advanced With Top
        Rated Author (Andy Robert).
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
      </Box>
    </div>
  );
};

export default CourseDetailEnrollLeft;
