import React from "react";
import Menubar from "../components/Menubar";
import { Grid } from "@mui/material";

const home = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={4}>
        <Menubar />
      </Grid>
      <Grid item xs={8}></Grid>
    </Grid>
  );
};

export default home;
