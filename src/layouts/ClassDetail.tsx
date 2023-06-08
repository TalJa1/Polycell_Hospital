import React from "react";
import Menubar from "../components/Menubar";
import "../styles/Home.css";
import ClassDetailCp from "../components/ClassDetailCp";

const ClassDetail: React.FC = () => {
  return (
    <div className="container">
      <Menubar />
      <main className="rightlayout">
        <ClassDetailCp />
      </main>
    </div>
  );
};

export default ClassDetail;
