import React from "react";
import "../styles/Home.css";
import Menubar from "../components/layoutComponents/Menubar";

import Postdata from "../components/classComponents/ClassViewManage";
import TraineeHome from "./trainee/TraineeHome";


const home: React.FC = () => {
  return (
    <div className="container">
      {/* <Menubar /> */}
      <main className="rightlayout">
        <TraineeHome/>
      </main>
    </div>
  );
};

export default home;
