/* eslint-disable jsx-a11y/anchor-is-valid */
import { Box, Divider, Grid } from "@mui/material";
import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import img1 from "../../assets/imgs/wp6938471.jpg";
import logo from "../../assets/imgs/logo51.png";
import BarChartIcon from "@mui/icons-material/BarChart";

const HomeCp: React.FC = () => {
  return (
    <Box>
      <Grid
        container
        direction="row"
        sx={{
          height: "100px",
          backgroundColor: "#eeeeee",
        }}
      >
        <Grid
          item
          container
          direction="row"
          xs={4}
          sx={{
            textAlign: "center",
            alignItems: "center",
          }}
        >
          <Grid item xs={4} sx={{ textAlign: "right" }}>
            <FacebookIcon />
          </Grid>
          <Grid item xs={4}>
            <TwitterIcon />
          </Grid>
          <Grid item xs={4} sx={{ textAlign: "left" }}>
            <InstagramIcon />
          </Grid>
        </Grid>
        <Grid
          item
          container
          direction="row"
          xs={4}
          sx={{
            textAlign: "center",
            alignItems: "center",
          }}
        >
          <Grid item xs={1}>
            <EmailIcon />
          </Grid>
          <Grid item xs={11}>
            <span>
              <a href="#"> contactus@docpulse.com</a> |
            </span>
            <span>
              <a href="#"> support@docpulse.com</a> |
            </span>
            <span>
              <a href="#"> Support Portal</a>
            </span>
          </Grid>
        </Grid>
        <Grid
          item
          container
          direction="row"
          xs={4}
          sx={{ textAlign: "center", alignItems: "center" }}
        >
          <Grid item container xs={6} direction="column">
            <Grid item>Support</Grid>
            <Grid
              item
              container
              direction="row"
              xs={12}
              sx={{ width: "inherit" }}
            >
              <Grid item xs={2}>
                <LocalPhoneIcon />
              </Grid>
              <Grid item xs={10}>
                08046837034
              </Grid>
            </Grid>
          </Grid>
          <Grid item container xs={6} direction="column">
            <Grid item>Sale</Grid>
            <Grid
              item
              container
              direction="row"
              xs={12}
              sx={{ width: "inherit" }}
            >
              <Grid item xs={2}>
                <LocalPhoneIcon />
              </Grid>
              <Grid item xs={10}>
                08000137034
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: "400px",
          background: `url(${img1}) no-repeat center center/cover`,
        }}
      >
        {/* Layer on top of the background image */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0)",
          }}
        >
          <Grid container sx={{ paddingTop: "20px", paddingLeft: "1rem" }}>
            <Grid item container xs={5} direction="column">
              <Grid item sx={{ fontSize: "1.5rem" }}>
                Online Software For Your Clinic/Hospital
              </Grid>
              <br />
              <Grid item>
                DocPulse Clinic/Hospital Information Management System (HIMS)
                software helps deliver superior healthcare delivery for doctors,
                clinics and hospitals.
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Grid container direction="column">
        <Grid item sx={{ textAlign: "center" }}>
          <img src={logo} alt="logo" />
        </Grid>
        <Grid item sx={{ textAlign: "center" }}>
          HIPAA cloud hosted, trusted, provider focused platform
        </Grid>
        <Grid
          item
          container
          direction="row"
          sx={{ textAlign: "center", padding: "2rem" }}
        >
          <Grid item container direction="column" xs={4}>
            <Grid sx={{ fontSize: "2rem", fontWeight: "bold", color: "green" }}>
              3.000+
            </Grid>
            <Grid>Doctors and growing!</Grid>
          </Grid>
          <Grid item container direction="column" xs={4}>
            <Grid sx={{ fontSize: "2rem", fontWeight: "bold", color: "green" }}>
              200+
            </Grid>
            <Grid>Clients (India, ME, Africa)</Grid>
          </Grid>
          <Grid item container direction="column" xs={4}>
            <Grid sx={{ fontSize: "2rem", fontWeight: "bold", color: "green" }}>
              5M+
            </Grid>
            <Grid>Appointments/Records Handled Annually</Grid>
          </Grid>
        </Grid>
      </Grid>
      <Divider sx={{ width: "95%", height: "1px" }} />
      <Grid container direction="column" sx={{ padding: "10px" }}>
        <Grid item container direction="column" sx={{ textAlign: "center" }}>
          <Grid sx={{ fontSize: "1.5rem" }}>
            Telemedicine Platform for Doctors/Hospitals/Clinics
          </Grid>
          <Grid sx={{ fontSize: "1rem", color: "red" }}>
            Let Covid19 not affect your practice!
          </Grid>
        </Grid>
        <Grid item container direction="row">
          <Grid item container xs={4} direction="column">
            <Grid item>
              <BarChartIcon />
            </Grid>
          </Grid>
          <Grid item container xs={4} direction="column"></Grid>
          <Grid item container xs={4} direction="column"></Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default HomeCp;
