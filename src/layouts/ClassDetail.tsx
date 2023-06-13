import React from "react";
import Menubar from "../components/layoutComponents/Menubar";
import ClassDetailCp from "../components/classComponents/ClassDetailCp";

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
