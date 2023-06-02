import React from "react";
import "../styles/Home.css";
import Menubar from "../components/Menubar";
import Postdata from "../components/ClassManagement";

const home: React.FC = () => {
  return (
    <div className="container">
      <Menubar />
      <main className="rightlayout">
        <Postdata />
      </main>
    </div>
  );
};

export default home;
