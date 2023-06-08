import { Box, Grid } from "@mui/material";
import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const ClassDetailCp: React.FC = () => {
  return (
    <Box>
      <Header title="Class CCL21 details" imageUrl="" />
      <Box
        sx={{
          padding: "5px",
          width: "97%",
          marginTop: "5px",
          marginLeft: "auto",
          marginRight: "auto",
          backgroundColor: "#FFFFFF",
          marginBottom: "10px",
          minHeight: "100vh",
          maxHeight: "fit-content",
          borderRadius: "5px",
        }}
      >
        <Grid
          container
          sx={{
            padding: "5px",
            width: "98%",
            marginTop: "5px",
            marginLeft: "auto",
            marginRight: "auto",
            backgroundColor: "#E6E6E6",
            marginBottom: "10px",
            minHeight: "100vh",
            maxHeight: "fit-content",
            borderRadius: "5px",
          }}
        >
          <Grid item xs={8}>
            <Grid
              container
              direction="row"
              sx={{
                margin: "5px",
                minHeight: "200px",
                maxHeight: "fit-content",
                width: "100%",
              }}
            >
              <Grid item xs={3}>
                <Grid container direction="column" rowGap={2}>
                  <strong>Course</strong>
                  <strong>Trainer</strong>
                  <strong>Department</strong>
                  <strong>Quantity</strong>
                  <strong>Max Quantity</strong>
                  <strong>Start Date</strong>
                  <strong>End Date</strong>
                  <strong>Due Time From</strong>
                  <strong>Due Time To</strong>
                  <strong>Status</strong>
                  <strong>Class Dates</strong>
                </Grid>
              </Grid>
              <Grid item xs={9}>
                <Grid container direction="column" rowSpacing={2}>
                  <Grid item>
                    {classDetail.course[0]} - {classDetail.course[1]}
                  </Grid>
                  <Grid item>
                    {classDetail.trainer[0]} - {classDetail.trainer[1]}
                  </Grid>
                  <Grid item>{classDetail.department}</Grid>
                  <Grid item>{classDetail.quantity}</Grid>
                  <Grid item>{classDetail.quantityMax}</Grid>
                  <Grid item>{classDetail.startdate}</Grid>
                  <Grid item>{classDetail.endate}</Grid>
                  <Grid item>{classDetail.duetimefrom}</Grid>
                  <Grid item>{classDetail.duetimeto}</Grid>
                  <Grid item>{classDetail.status}</Grid>
                  <Grid item>{classDetail.classdate.join(", ")}</Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={4}>
            <Box
              sx={{
                margin: "5px",
                backgroundColor: "white",
                borderRadius: "5px",
                minHeight: "400px",
                maxHeight: "fit-content",
              }}
            ></Box>
          </Grid>
        </Grid>
      </Box>
      <Footer />
    </Box>
  );
};

export default ClassDetailCp;

const classDetail = {
  course: ["PPG201", "Medical Terminology"],
  trainer: ["NVT1", "Nguyen Van Thanh"],
  department: "Department A",
  quantity: 30,
  quantityMax: 35,
  startdate: "01/01/2023",
  endate: "01/06/2023",
  duetimefrom: "07:00AM",
  duetimeto: "09:00AM",
  status: "pending",
  classdate: ["Mo", "We"],
};
