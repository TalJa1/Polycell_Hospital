import { Box, Button, Grid, Typography, styled } from "@mui/material";
import React, { useState } from "react";
import CourseDetailOverview from "./CourseDetailOverview";
import CourseDetailEnrollTabbar from "./CourseDetailEnrollTabbar";
import { useLocation } from "react-router-dom";
import { Program } from "../../models/programAddModel";
import ChooseClassEnroll from "./ChooseClassEnroll";
import { Class } from "../../models/classManagementModel";

const CourseDetailEnrollLeft: React.FC = () => {
  const item =
    "https://www.thetahmid.com/themes/edulyn-v1.0/assets/images/details-banner.jpg";

  const location = useLocation();
  const classData: Class = location.state?.classData;

  console.log(classData);

  const [dialogOpen, setDialogOpen] = useState(false);

  const handleOpenDialog = () => {
    setDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
  };

  return (
    <div>
      <Grid container spacing={5} sx={{
        display: "flex",
        alignItems: "center"
      }}>
        <Grid item xs={12}>
          <Typography variant="h5" fontWeight="bold">
            {classData.name}
          </Typography>
        </Grid>
        {/* <Grid item xs={4}>
          <GradientButton
            sx={{
              width: "100%",
              padding: "20px 0",
              backgroundColor:
                "linear-gradient(90deg, rgb(17, 182, 122) 0%, rgb(0, 148, 68) 100%)",
            }}
            onClick={handleOpenDialog}
          >
            Choose class enroll
          </GradientButton>
        </Grid> */}
      </Grid>

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
      {/* <ChooseClassEnroll
        dialogOpen={dialogOpen}
        handleCloseDialog={handleCloseDialog}
      /> */}
    </div>
  );
};

export default CourseDetailEnrollLeft;

const GradientButton = styled(Button)`
  background: linear-gradient(
    90deg,
    rgb(17, 182, 122) 0%,
    rgb(0, 148, 68) 100%
  );
  color: white;
`;
