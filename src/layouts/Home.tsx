import React, { useContext } from "react";
import "../styles/Home.css";
import Menubar from "../components/layoutComponents/Menubar";

import Postdata from "../components/classComponents/ClassViewManage";
import TraineeHome from "./trainee/TraineeHome";
import TraineeHeader from "../components/layoutComponents/TraineeHeader";
import { Box } from "@mui/material";
import Footer from "../components/layoutComponents/Footer";
import { AppProviderContext } from "../provider/Provider";
import Header from "../components/layoutComponents/Header";
import TraineeHomeComponent from "../components/traineeHomeComponents/TraineeHomeComponent";
import HomeCp from "../components/classComponents/HomeCp";

const Home: React.FC = () => {
  const { role, setRole } = React.useContext(AppProviderContext);

  return (
    <div className="container">
      {role === "" ? <Menubar /> : <></>}
      {/* <Menubar /> */}
      <main className="rightlayout">
        <div className="class-container">
          {role === "" ? (
            // <Header title="Home" imageUrl="" />
            <></>
          ) : (
            <TraineeHeader title="Pollycell" />
          )}

          <Box
            sx={{
              backgroundColor: "white",
              // display: "flex",
              // justifyContent: "center",
              // height: "100vh",
              position: "relative",
            }}
          >
            <HomeCp/>
          </Box>
          <Footer />
        </div>
      </main>
    </div>
  );
};

export default Home;
