import { Box, Link, Typography } from "@mui/material";
import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import styled from "@emotion/styled";

interface CourseButtonAddActivityProps {
  handleAddActivity: () => void;
}

const CourseButtonAddActivityBox = styled(Box)({
  border: "1px solid #1976d2",
  boxShadow: "none",
  backgroundColor: "white",
  marginBottom: "10px",
  borderRadius: "10px",
  "&:hover": {
    backgroundColor: "#cfe2f2",
    cursor: "pointer",
  },
});

const CourseButtonAddActivityCp: React.FC<CourseButtonAddActivityProps> = ({
  handleAddActivity,
}) => {
  return (
    <CourseButtonAddActivityBox
      onClick={handleAddActivity}
      sx={{
        border: "1px solid #1976d2",
        boxShadow: "none",
        backgroundColor: "white",
        marginBottom: "10px",
        borderRadius: "10px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          padding: "20px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              width: "40px",
              height: "40px",
              border: "1px solid #1976d2",
              backgroundColor: "transparent",
              marginRight: "10px",
              borderRadius: "5px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <AddIcon
              sx={{
                color: "#1976d2",
              }}
            />
          </Box>

          <div>
            <Link underline="hover" color="#1976d2">
            Add an activity or resource
            </Link>
            <Typography variant="subtitle1" >
             
            </Typography>
          </div>
        </div>
      </Box>
    </CourseButtonAddActivityBox>
  );
};

export default CourseButtonAddActivityCp;
