import React from "react";


import TraineeDetailCp from "../components/TraineeDetailCp";
import Menubar from "../components/layoutComponents/Menubar";

const TraineeDetail: React.FC = () => {
  return (
    <div className="container">
      <Menubar />
      <main className="rightlayout">
        <TraineeDetailCp/>
      </main>
    </div>
  );
};

export default TraineeDetail;


