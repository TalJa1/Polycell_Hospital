import React from "react";
import Menubar from "../../components/Menubar";
import ClassApprovalCp from "../../components/ClassApprovalCp";

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
