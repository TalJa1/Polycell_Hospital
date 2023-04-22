import React from "react";
import "../styles/Home.css";
import Menubar from "../components/Menubar";
import Postdata from "../components/Postdata";

const home: React.FC = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        maxHeight: "100%",
      }}
    >
      <Menubar />
      <main
        className="rightlayout"
        style={{
          width: "100vw",
          height: "100vh",
          maxHeight: "100%",
          paddingLeft: "1%",
          paddingTop: "1%",
          // paddingBottom: "1%",
        }}
      >
        <Postdata />
      </main>
    </div>
  );
};

export default home;
