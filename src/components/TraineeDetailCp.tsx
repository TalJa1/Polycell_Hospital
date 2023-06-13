import React from "react";

import { Link } from "react-router-dom";

import { Box, Button, Grid } from "@mui/material";
import Header from "./layoutComponents/Header";
import Footer from "./layoutComponents/Footer";

const TraineeDetailCp: React.FC = () => {
  return (
    <Box>
      <Header title="Trainee Detail" imageUrl="" />
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
                    <strong>Full name:</strong>
                  </Grid>
                  <Grid
                    item
                    xs={5}
                    sx={{
                      textAlign: "center",
                      backgroundColor: "white",
                    }}
                  >
                    {traineeDetail.fullname}
                  </Grid>
                  <Grid
                    item
                    xs={4}
                    sx={{
                      textAlign: "center",
                    }}
                  >
                    Code: {traineeDetail.code}
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
                    {traineeDetail.trainer[1]}
                  </Grid>
                  <Grid
                    item
                    xs={4}
                    sx={{
                      textAlign: "center",
                    }}
                  >
                    Code: {traineeDetail.trainer[0]}
                  </Grid>
                </Grid> */}
                <Grid item container direction="row">
                  <Grid item xs={3}>
                    <strong>Phone:</strong>
                  </Grid>
                  <Grid
                    item
                    xs={5}
                    sx={{
                      textAlign: "center",
                      backgroundColor: "white",
                    }}
                  >
                                        {traineeDetail.phone}

                  </Grid>
                  
                </Grid>

                <Grid item container direction="row">
                  <Grid item xs={3}>
                    <strong>Birthday:</strong>
                  </Grid>
                  <Grid
                    item
                    xs={5}
                    sx={{
                      textAlign: "center",
                      backgroundColor: "white",
                    }}
                  >
                    {traineeDetail.birthday}
                  </Grid>
                </Grid>

                <Grid item container direction="row">
                  <Grid item xs={3}>
                    <strong>Email:</strong>
                  </Grid>
                  <Grid
                    item
                    xs={9}
                    sx={{
                      textAlign: "center",
                      backgroundColor: "white",
                    }}
                  >
                    {traineeDetail.email}
                  </Grid>
                  <Grid item xs={5}></Grid>
                </Grid>
                <Grid item container direction="row">
                  <Grid item xs={3}>
                    <strong>Address:</strong>
                  </Grid>
                  <Grid
                    item
                    xs={9}
                    sx={{
                      textAlign: "center",
                      backgroundColor: "white",
                    }}
                  >
                    {traineeDetail.address}
                  </Grid>
                  <Grid item xs={5}></Grid>
                </Grid>

                <Grid item container direction="row">
                  <Grid item xs={3}>
                    <strong>Status:</strong>
                  </Grid>
                  <Grid
                    item
                    xs={5}
                    sx={{
                      textAlign: "center",
                      backgroundColor: "white",
                    }}
                  >
                    {traineeDetail.status}
                  </Grid>
                  <Grid item xs={5}></Grid>
                </Grid>

                <Grid
                  item
                  container
                  direction="row"
                  sx={{
                    display: "flex",
                    justifyContent: "space-evenly",
                  }}
                >
                  <Button variant="contained">Import</Button>
                  <Button variant="contained">Export</Button>

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
                {/* <strong style={{ padding: "5px", fontSize: "24px" }}>
                  PPG201
                </strong> */}
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Footer />
    </Box>
  );
};

export default TraineeDetailCp;

const traineeDetail = {
  fullname: "Pham Van A",
  code: "SE1615",
  phone: "0908775112",
  birthday: "09/04/2002",
  email: "phamhuy09042002@gmail.com",
  address: "20 Pham Van Dong, TP. Thu Duc",
  status: "pending",
};
