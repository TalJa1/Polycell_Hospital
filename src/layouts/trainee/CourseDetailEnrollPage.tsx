import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import TraineeHeader from "../../components/layoutComponents/TraineeHeader";
import Footer from "../../components/layoutComponents/Footer";
import CourseDetailEnrollLeft from "../../components/courseDetaiEnrollOverview/CourseDetailEnrollLeft";
import CourseDetailEnrollRight from "../../components/courseDetaiEnrollOverview/CourseDetailEnrollRight";
import CourseDetailEnrollTabbar from "../../components/courseDetaiEnrollOverview/CourseDetailEnrollTabbar";

const CourseDetailEnrollPage: React.FC = () => {
  return (
    <div className="class-container">
      <TraineeHeader title="Pollycell" />
      <Box
        sx={{
          background: "rgb(255, 255, 255)",
          // display: "flex",
          // justifyContent: "center",
          // height: "100vh",
          position: "relative",
        }}
      >
        <div>
          <Box sx={boxStyle}>
            <div style={overlayStyle}></div>
            <Box
              sx={{
                position: "absolute",
                background: "rgb(24, 43, 73)",
                color: "white",
                padding: "30px",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                textAlign: "center",
              }}
            >
              <Typography variant="h4">COURSE DETAILS</Typography>
            </Box>
          </Box>
          <Box
            sx={{
              padding: "100px 0",
            }}
          >
            <Grid container spacing={5} sx={{ justifyContent: "center" }}>
              <Grid item xs={7}>
                <CourseDetailEnrollLeft />
              </Grid>
              <Grid item xs={3}>
                <CourseDetailEnrollRight />
              </Grid>
              <Grid item xs={10}>
                <CourseDetailEnrollTabbar />
              </Grid>
            </Grid>
          </Box>
        </div>
      </Box>
      <Footer />
    </div>
  );
};

export default CourseDetailEnrollPage;

const boxStyle: React.CSSProperties = {
  backgroundImage: `url(https://www.thetahmid.com/themes/edulyn-v1.0/assets/images/breadcrumb-bg.jpg)`,
  backgroundSize: "cover",
  backgroundPosition: "center center",
  backgroundRepeat: "no-repeat",
  padding: "60px 0px",
  position: "relative",
  height: "25vh",
  width: "100%",
};

const overlayStyle: React.CSSProperties = {
  position: "absolute",
  content: '""',
  background: "rgb(24, 43, 73)",
  opacity: 0.5,
  width: "100%",
  height: "100%",
  top: 0,
  left: 0,
};
