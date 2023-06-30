import React from "react";
import TraineeAttendanceCp from "../../components/traineeComponents/TraineeAttendanceCp";
import Menubar from "../../components/layoutComponents/Menubar";

const TraineeAttendanceCheck: React.FC = () => {
  return (
    <div className="container">
      <Menubar />
      <main className="rightlayout">
        <TraineeAttendanceCp />
      </main>
    </div>
  );
};

export default TraineeAttendanceCheck;
