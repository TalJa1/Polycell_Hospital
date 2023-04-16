import React from "react";
import "../styles/Home.css";
import Menubar from "../components/Menubar";
import Postdata from "../components/Postdata";

const home: React.FC = () => {
  return (
    <div style={{ display: "flex", flexDirection: "row", height: "100vh" }}>
      <Menubar />
      <main className="rightlayout" style={{ width: "100vw" }}>
        <Postdata />
      </main>
    </div>
  );
};

export default home;
