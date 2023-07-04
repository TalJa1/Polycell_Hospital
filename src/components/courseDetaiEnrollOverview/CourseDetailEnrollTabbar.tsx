import React, { useState } from "react";
import { Box, Tab, Tabs, Typography } from "@mui/material";
import styled from "@emotion/styled";

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

      {selectedTab === 0 && (
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
            nesciunt harum facilis odit inventore molestias qui asperiores
            recusandae architecto mollitia provident ipsa unde, praesentium
            impedit enim voluptate ducimus, saepe autem. Lorem ipsum dolor sit,
            amet consectetur adipisicing elit.
            <br />
            <br />
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda
            optio sequi suscipit et modi! Corporis obcaecati rerum et, explicabo
            inventore, aliquid, odit modi harum libero culpa distinctio. Nemo,
            aliquid dignissimos. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Optio earum accusantium quam eius dignissimos
            quaerat voluptatem excepturi aliquid dolor ducimus. Illo porro
            maiores fuga dignissimos temporibus odio nulla nobis nemo. Lorem
            ipsum dolor sit amet consectetur adipisicing elit.
          </Typography>
        </Box>
      )}
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
