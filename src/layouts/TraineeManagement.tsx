import React from "react";
import Menubar from "../components/layoutComponents/Menubar";
import TraineeManagementTable from "../components/StudentManagementTable";

const TraineeManagement: React.FC = () => {
  return (
    <div className="container">
      <Menubar />
      <main className="rightlayout">
        <TraineeManagementTable />
      </main>
    </div>

  );
};

export default TraineeManagement;
