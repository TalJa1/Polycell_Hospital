import { Box, Button, Grid } from "@mui/material";
import React from "react";
import Header from "../layoutComponents/Header";
import Footer from "../layoutComponents/Footer";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { Link } from "react-router-dom";

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
          <Grid item xs={7}>
            <Grid
              container
              direction="row"
              sx={{
                minHeight: "400px",
                maxHeight: "fit-content",
              }}
            >
              <Grid
                container
                direction="column"
                rowGap={2}
                sx={{
                  fontSize: "23px",
                  margin: "5px",
                  padding: "5px",
                  borderRadius: "5px",
                  minHeight: "400px",
                  maxHeight: "fit-content",
                  "@media (max-width: 1000px)": {
                    fontSize: "17px",
                  },
                }}
              >
                <Grid item container direction="row">
                  <Grid item xs={3}>
                    <strong>Course:</strong>
                  </Grid>
                  <Grid
                    item
                    xs={5}
                    sx={{
                      textAlign: "center",
                      backgroundColor: "white",
                    }}
                  >
                    {classDetail.course[1]}
                  </Grid>
                  <Grid
                    item
                    xs={4}
                    sx={{
                      textAlign: "center",
                    }}
                  >
                    Code: {classDetail.course[0]}
                  </Grid>
                </Grid>
                {/* <Grid item container direction="row">
                  <Grid item xs={3}>
                    <strong>Trainer:</strong>
                  </Grid>
                  <Grid
                    item
                    xs={5}
                    sx={{
                      textAlign: "center",
                      backgroundColor: "white",
                    }}
                  >
                    {classDetail.trainer[1]}
                  </Grid>
                  <Grid
                    item
                    xs={4}
                    sx={{
                      textAlign: "center",
                    }}
                  >
                    Code: {classDetail.trainer[0]}
                  </Grid>
                </Grid> */}
                <Grid item container direction="row">
                  <Grid item xs={3}>
                    <strong>Location:</strong>
                  </Grid>
                  <Grid
                    item
                    xs={9}
                    sx={{
                      textAlign: "center",
                    }}
                  >
                    {classDetail.department}
                  </Grid>
                </Grid>
                <Grid item container direction="row">
                  <Grid item xs={3}>
                    <strong>Quantity:</strong>
                  </Grid>
                  <Grid
                    item
                    xs={3}
                    sx={{
                      textAlign: "center",
                      backgroundColor: "white",
                    }}
                  >
                    {classDetail.quantity}/
                    <strong>{classDetail.quantityMax}</strong>
                  </Grid>
                  <Grid item xs={6}>
                    <Link to="/class-trainee">
                      <VisibilityIcon
                        sx={{
                          paddingLeft: "5px",
                          display: "flex",
                          justifyContent: "start",
                          alignItems: "center",
                          height: "100%",
                        }}
                      />
                    </Link>
                  </Grid>
                </Grid>
                <Grid item container direction="row">
                  <Grid item xs={3}>
                    <strong>Start Date:</strong>
                  </Grid>
                  <Grid
                    item
                    xs={3}
                    sx={{
                      textAlign: "center",
                      backgroundColor: "white",
                    }}
                  >
                    {classDetail.startdate}
                  </Grid>
                  <Grid
                    item
                    xs={3}
                    sx={{
                      textAlign: "center",
                    }}
                  >
                    <strong>End at</strong>
                  </Grid>
                  <Grid
                    item
                    xs={3}
                    sx={{
                      textAlign: "center",
                      backgroundColor: "white",
                    }}
                  >
                    {classDetail.endate}
                  </Grid>
                </Grid>

                <Grid item container direction="row">
                  <Grid item xs={3}>
                    <strong>Begin at:</strong>
                  </Grid>
                  <Grid
                    item
                    xs={3}
                    sx={{
                      textAlign: "center",
                      backgroundColor: "white",
                    }}
                  >
                    {classDetail.duetimefrom}
                  </Grid>
                  <Grid
                    item
                    xs={3}
                    sx={{
                      textAlign: "center",
                    }}
                  >
                    <strong>End at</strong>
                  </Grid>
                  <Grid
                    item
                    xs={3}
                    sx={{
                      textAlign: "center",
                      backgroundColor: "white",
                    }}
                  >
                    {classDetail.duetimeto}
                  </Grid>
                </Grid>

                <Grid item container direction="row">
                  <Grid item xs={3}>
                    <strong>Status:</strong>
                  </Grid>
                  <Grid
                    item
                    xs={4}
                    sx={{
                      textAlign: "center",
                      backgroundColor: "white",
                    }}
                  >
                    {classDetail.status}
                  </Grid>
                  <Grid item xs={5}></Grid>
                </Grid>
                <Grid item container direction="row">
                  <Grid item xs={3}>
                    <strong>Slots:</strong>
                  </Grid>
                  <Grid
                    item
                    xs={4}
                    sx={{
                      textAlign: "center",
                      backgroundColor: "white",
                    }}
                  >
                    {classDetail.classdate.join(", ")}
                  </Grid>
                  <Grid item xs={5}></Grid>
                </Grid>
                <Grid
                  item
                  container
                  direction="row"
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Button variant="contained">Edit</Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={5}>
            <Box
              sx={{
                margin: "5px",
                minHeight: "400px",
                maxHeight: "fit-content",
                "@media (max-width: 1000px)": {
                  fontSize: "10px",
                },
              }}
            >
              <Box
                sx={{
                  margin: "5px",
                  backgroundColor: "white",
                  borderRadius: "5px",
                  minHeight: "400px",
                  maxHeight: "fit-content",
                }}
              >
                <strong style={{ padding: "5px", fontSize: "24px" }}>
                  PPG201
                </strong>
              </Box>
            </Box>
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
