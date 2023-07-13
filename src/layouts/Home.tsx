import React, { useContext } from "react";
import "../styles/Home.css";
import Menubar from "../components/layoutComponents/Menubar";

import Postdata from "../components/classComponents/ClassViewManage";
import TraineeHome from "./trainee/TraineeHome";
import TraineeHeader from "../components/layoutComponents/TraineeHeader";
import { Box } from "@mui/material";
import Footer from "../components/layoutComponents/Footer";
import HomeCp from "../components/classComponents/HomeCp";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../reduxs/Root";
import { SessionData } from "../utils/constant";

const Home: React.FC = () => {
  const [sessionData, setSessionData] = React.useState<SessionData | null>(
    localStorage.getItem("sessionData")
      ? JSON.parse(localStorage.getItem("sessionData") || "")
      : null
  );

  const { role } = sessionData!;

  return (
    <div className="container">
      {role !== "TRAINEE" && role !== "TRAINER" ? <Menubar /> : <></>}
      {/* <Menubar /> */}
      <main className="rightlayout">
        <div className="class-container">
          {role === "TRAINER" || role === "TRAINEE" ? (
            // <Header title="Home" imageUrl="" />
            <TraineeHeader title="Pollycell">
              <Box
                sx={{
                  backgroundColor: "white",
                  // display: "flex",
                  // justifyContent: "center",
                  // height: "100vh",
                  position: "relative",
                }}
              >
                <HomeCp />
              </Box>
            </TraineeHeader>
          ) : (
            <>
              <Box
                sx={{
                  backgroundColor: "white",
                  // display: "flex",
                  // justifyContent: "center",
                  // height: "100vh",
                  position: "relative",
                }}
              >
                <HomeCp />
              </Box>
            </>
          )}

          <Footer />
        </div>
      </main>
    </div>
  );
};

export default Home;
