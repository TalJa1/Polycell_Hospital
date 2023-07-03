import React from "react";
import "../styles/Home.css";
import Menubar from "../components/layoutComponents/Menubar";

import Postdata from "../components/classComponents/ClassViewManage";
import TraineeHome from "./trainee/TraineeHome";
import TraineeHeader from "../components/layoutComponents/TraineeHeader";
import { Box } from "@mui/material";
import Footer from "../components/layoutComponents/Footer";


const home: React.FC = () => {
  return (
    <div className="container">
      {/* <Menubar /> */}
      <main className="rightlayout">
      <div className="class-container">
      <TraineeHeader title="Pollycell" />
      <Box
        sx={{
          backgroundColor: "white",
          // display: "flex",
          // justifyContent: "center",
          // height: "100vh",
          position: "relative",
        }}
      >
        {/* <TraineeHomeComponent/> */}
      </Box>
      <Footer />
    </div>
      </main>
    </div>
  );
};

export default home;
