import React from "react";
import "../styles/Home.css";
import Menubar from "../components/Menubar";
import Postdata from "../components/ClassViewMange";

const ClassManagement: React.FC = () => {
  return (
    <div className="container">
      <Menubar />
      <main className="rightlayout">
        <Postdata />
      </main>
    </div>
  );
};

export default ClassManagement;
