import React from "react";
import Menubar from "../../components/layoutComponents/Menubar";
import ClassAcceptCp from "../../components/upperclassComponents/ClassAcceptCp";


const ClassAcceptance: React.FC = () => {
  return (
    <div className="container">
      <Menubar />
      <main className="rightlayout">
        <ClassAcceptCp />
      </main>
    </div>
  );
};

export default ClassAcceptance;

