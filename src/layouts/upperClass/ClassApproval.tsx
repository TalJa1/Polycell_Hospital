import React from "react";
import Menubar from "../../components/layoutComponents/Menubar";
import ClassApprovalCp from "../../components/upperclassComponents/ClassApprovalCp";

const ClassApproval: React.FC = () => {
  return (
    <div className="container">
      <Menubar />
      <main className="rightlayout">
        <ClassApprovalCp />
      </main>
    </div>
  );
};

export default ClassApproval;
