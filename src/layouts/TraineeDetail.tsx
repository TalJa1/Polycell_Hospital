import React from "react";

import Menubar from "../components/Menubar";
import TraineeDetailCp from "../components/TraineeDetailCp";

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


