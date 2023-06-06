import React from "react";
import "../styles/Home.css";
import Menubar from "../components/Menubar";

import Postdata from "../components/ClassViewManage";


const home: React.FC = () => {
  return (
    <div className="container">
      <Menubar />
      <main className="rightlayout">

        <h1>Home page</h1>
      </main>
    </div>
  );
};

export default home;
