import React from "react";
import "../styles/Home.css"
import Menubar from "../components/Menubar";

const home: React.FC = () => {
  return (
    <div style={{ display: "flex", flexDirection: "row", height: '100vh' }}>
      <Menubar />
      <main className="rightlayout" style={{width : '100vw'}}>Hello</main>
    </div>
  );
};

export default home;
