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

const Home: React.FC = () => {
  const { role } = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();

console.log(role)

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
