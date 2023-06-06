import React from "react";
import { Box, Grid } from "@mui/material";
import Header from "./Header";
import Footer from "./Footer";

const ClassApprovalCp: React.FC = () => {
  return (
    <Box>
      <Header imageUrl="" title="Class Approval" />
      <Grid
        container
        spacing={2}
        sx={{
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
        <Grid
          item
          xs={9}
          sx={{
            backgroundColor: "white",
            borderRadius: "5px",
          }}
        >
          <Box></Box>
        </Grid>
        <Grid
          item
          xs={3}
          sx={{
            backgroundColor: "white",
            borderRadius: "5px",
          }}
        >
          <strong style={{ fontSize: "20px" }}>Program</strong>
        </Grid>
      </Grid>
      <Footer />
    </Box>
  );
};

export default ClassApprovalCp;
