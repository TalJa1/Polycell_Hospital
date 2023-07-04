import { Box, Link, Typography } from "@mui/material";
import React from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const TraineeRecommendCourseList: React.FC = () => {
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center"

        }}
      >
        <Typography variant="h4">Recommended for you</Typography>
        <Link>
          <Box sx={{
            display: "flex",
            alignItems: "center"
          }}>
            View all <ArrowForwardIcon />
          </Box>
        </Link>
      </Box>
    </Box>
  );
};

export default TraineeRecommendCourseList;
