import React from "react";
import Menubar from "../components/Menubar";

const home: React.FC = () => {
  return (
    <div style={{ display: "flex", flexDirection: "row", height: '100%' }}>
      <Menubar />
      <main style={{width : '100vw'}}>Hello</main>
    </div>
  );
};

export default home;
