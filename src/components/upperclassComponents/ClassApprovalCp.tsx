import React, { useState } from "react";
import {
  Box,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  Stack,
} from "@mui/material";
import Header from "../layoutComponents/Header";
import Footer from "../layoutComponents/Footer";
import Button from "@mui/material/Button";

const ClassApprovalCp: React.FC = () => {
  const [acceptOpen, setAcceptOpen] = useState(false);
  const [rejectOpen, setRejectOpen] = useState(false);

  const handleAcceptOpen = () => {
    setAcceptOpen(true);
  };

  const handleRejectOpen = () => {
    setRejectOpen(true);
  };

  const handleAcceptClose = () => {
    setAcceptOpen(false);
  };

  const handleRejectClose = () => {
    setRejectOpen(false);
  };

  return (
    <Box>
      <Header imageUrl="" title="Class Approval" />
      <Grid
        className="container"
        container
        sx={{
          padding: "5px",
          width: "97%",
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
        {/* left content */}
        <Grid
          item
          xs={9}
          className="content-left"
          sx={{
            padding: "5px",
          }}
        >
          <Grid
            container
            direction="column"
            sx={{
              backgroundColor: "white",
              borderRadius: "5px",
              margin: "auto",
              padding: "10px",
            }}
          >
            <Grid item>
              <Grid container direction="row">
                <Grid
                  item
                  xs={7}
                  sx={{
                    width: "50%",
                    paddingRight: "5px",
                    fontSize: "20px"
                  }}
                >
                  <Grid container spacing={2}>
                    {Object.entries(classManagement).map(([key, value]) => (
                      <Grid container item xs={12} key={key} spacing={2}>
                        <Grid item xs={6}>
                          <strong>{key}:</strong>
                        </Grid>
                        <Grid
                          item
                          xs={5}
                          // sx={{
                          //   textAlign: "right",
                          // }}
                        >
                          {value}
                        </Grid>
                      </Grid>
                    ))}
                  </Grid>
                </Grid>
                <Grid item xs={5}>
                  <Box
                    sx={{
                      backgroundColor: "#E6E6E6",
                      width: "100%",
                      height: "100%",
                      borderRadius: "5px",
                    }}
                  ></Box>
                </Grid>
              </Grid>
            </Grid>
            <br />
            <div>
              <Stack
                direction="row"
                spacing={2}
                sx={{ width: "100%", alignItems: "center" }}
              >
                <Button
                  variant="contained"
                  color="success"
                  onClick={handleAcceptOpen}
                >
                  Accept
                </Button>
                <Button
                  variant="outlined"
                  color="error"
                  onClick={handleRejectOpen}
                >
                  Cancel
                </Button>
              </Stack>
              <Dialog open={acceptOpen} onClose={handleAcceptClose}>
                <DialogTitle>Accept</DialogTitle>
                <DialogContent>
                  <p>Accept Dialog Content</p>
                </DialogContent>
                <DialogActions>
                  <Button
                    variant="contained"
                    onClick={handleAcceptClose}
                    autoFocus
                  >
                    Yes
                  </Button>
                  <Button onClick={handleAcceptClose}>No</Button>
                </DialogActions>
              </Dialog>
              <Dialog open={rejectOpen} onClose={handleRejectClose}>
                <DialogTitle>Reject</DialogTitle>
                <DialogContent>
                  <p>Reject Dialog Content</p>
                </DialogContent>
                <DialogActions>
                  <Button
                    variant="contained"
                    onClick={handleRejectClose}
                    autoFocus
                  >
                    Yes
                  </Button>
                  <Button onClick={handleRejectClose}>No</Button>
                </DialogActions>
              </Dialog>
            </div>
          </Grid>
        </Grid>

        {/* right content */}
        <Grid
          item
          xs={3}
          className="content-right"
          sx={{
            padding: "5px",
          }}
        >
          <Grid
            container
            rowSpacing={2}
            direction="column"
            sx={{
              backgroundColor: "white",
              borderRadius: "5px",
              height: "100%",
              margin: "auto",
              paddingBottom: "10px",
              paddingLeft: "10px",
            }}
          >
            <Grid item>
              <strong style={{ fontSize: "20px" }}>Program</strong>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Footer />
    </Box>
  );
};

export default ClassApprovalCp;

const classManagement = {
  Class: "PPG001",
  Duetime: "7am-9am (t4,t7)",
  Department: "Department A",
  Cycle: "Summer 2023",
  Program: "DS201",
  Student: 30,
};
