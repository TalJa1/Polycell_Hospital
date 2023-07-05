import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Typography,
} from "@mui/material";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import React from "react";
import styled from "@emotion/styled";

const CourseDetailEnrollRight: React.FC = () => {
  return (
    <div>
      <Box
        sx={{
          border: "1px solid rgb(238, 238, 238)",
          padding: "16px 20px ",
        }}
      >
        <Typography variant="h5">Courses Details</Typography>

        <Box
          sx={{
            borderBottom: "2px solid rgb(17, 182, 122)",
            width: "50px",
            marginBottom: "20px",
          }}
        />

        <Box>
          <Box
            sx={{
              borderTop: "1px dashed rgb(221, 221, 221)",
              padding: "10px 0px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Box
              sx={{
                display: "flex",
              }}
            >
              <CalendarMonthIcon />
              <Typography>Start date:</Typography>
            </Box>
            <Box>Aug 21, 2020</Box>
          </Box>
          <Box
            sx={{
              borderTop: "1px dashed rgb(221, 221, 221)",
              padding: "10px 0px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Box
              sx={{
                display: "flex",
              }}
            >
              <AccessTimeIcon />
              <Typography>Duration:</Typography>
            </Box>
            <Box>18 months</Box>
          </Box>
        </Box>
        <GradientButton
          sx={{
            width: "100%",
            // margin: "50px 0",
            backgroundColor:
              "linear-gradient(90deg, rgb(17, 182, 122) 0%, rgb(0, 148, 68) 100%)",
          }}
        >
          Enroll
        </GradientButton>
      </Box>
    </div>
  );
};

export default CourseDetailEnrollRight;

const GradientButton = styled(Button)`
  background: linear-gradient(
    90deg,
    rgb(17, 182, 122) 0%,
    rgb(0, 148, 68) 100%
  );
  color: white;
`;
