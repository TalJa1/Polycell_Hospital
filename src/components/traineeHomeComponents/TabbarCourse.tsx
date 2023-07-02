import { Box, Tab, Tabs, Typography } from "@mui/material";
import React from "react";
import FilterCourseCp from "./FilterCourseCp";
import TraineeHomeListCourseCp from "./TraineeHomeListCourseCp";
import { Radio } from "antd";

const TabbarCourse: React.FC = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>

      
      <Box>
        <TraineeHomeListCourseCp />
      </Box>
    </Box>
  );
};

export default TabbarCourse;
