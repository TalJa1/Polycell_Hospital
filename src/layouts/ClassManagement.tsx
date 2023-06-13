import React from "react";
import "../styles/Home.css";
import Menubar from "../components/layoutComponents/Menubar";
import Postdata from "../components/classComponents/ClassViewManage";

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
