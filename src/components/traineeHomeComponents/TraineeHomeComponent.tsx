import React from "react";
import TraineeHomeCarouselCp from "./TraineeHomeCarouselCp";
import TraineeHomeListCourseCp from "./TraineeHomeListCourseCp";
import { Box } from "@mui/material";
import FilterCourseCp from "./FilterCourseCp";

const TraineeHomeComponent: React.FC = () => {
  return (
    <div>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            width: "70%",
          }}
        >
          <TraineeHomeCarouselCp />

          <FilterCourseCp />

          <TraineeHomeListCourseCp />
        </Box>
      </Box>
    </div>
  );
};

export default TraineeHomeComponent;
