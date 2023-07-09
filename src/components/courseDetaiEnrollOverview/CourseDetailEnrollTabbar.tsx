import React, { useState } from "react";
import { Box, Tab, Tabs, Typography } from "@mui/material";
import styled from "@emotion/styled";
import CourseDetailOverviewCp from "./CourseDetailOverviewCp";
import CourseDetailSyllabusCp from "./CourseDetailSyllabusCp";
import { useLocation } from "react-router-dom";
import { Program } from "../../models/programAddModel";

const CourseDetailEnrollTabbar: React.FC = () => {

  const [selectedTab, setSelectedTab] = useState(0);

  const handleTabChange = (event: React.SyntheticEvent, newTab: number) => {
    setSelectedTab(newTab);
  };

  return (
    <Box>
      <StyledTabs
        value={selectedTab}
        onChange={handleTabChange}
        textColor="inherit"
      >
        <Tab
          label="Overview"
          sx={{
            background:
              selectedTab === 0
                ? "linear-gradient(90deg, rgb(17, 182, 122) 0%, rgb(0, 148, 68) 100%)"
                : "transparent",
            color: selectedTab === 0 ? "white" : "inherit",
          }}
        />
        <Tab
          label="Syllabus"
          sx={{
            background:
              selectedTab === 1
                ? "linear-gradient(90deg, rgb(17, 182, 122) 0%, rgb(0, 148, 68) 100%)"
                : "transparent",
            color: selectedTab === 1 ? "white" : "inherit",
          }}
        />
        <Tab
          label="Instructor"
          sx={{
            background:
              selectedTab === 2
                ? "linear-gradient(90deg, rgb(17, 182, 122) 0%, rgb(0, 148, 68) 100%)"
                : "transparent",
            color: selectedTab === 2 ? "white" : "inherit",
          }}
        />
      </StyledTabs>

      {selectedTab === 0 && <CourseDetailOverviewCp />}
      {selectedTab === 1 && <CourseDetailSyllabusCp />}
    </Box>
  );
};

const StyledTabs = styled(Tabs)(({ theme }) => ({
  "& .MuiTabs-indicator": {
    display: "none", // Hide the default indicator
  },
  boxShadow: "rgba(0, 0, 0, 0.1) 0px 8px 25px", // Add a box shadow to the tab bar
  display: "inline-flex",
  margin: "30px 0",
}));

export default CourseDetailEnrollTabbar;
