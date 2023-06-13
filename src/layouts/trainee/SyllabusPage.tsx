import React from "react";
import Menubar from "../../components/layoutComponents/Menubar";
import SyllabusPageCp from "../../components/traineeComponents/SyllabusPageCp";

const SyllabusPage: React.FC = () => {
  return (
    <div className="container">
      <Menubar />
      <main className="rightlayout">
        <SyllabusPageCp />
      </main>
    </div>
  );
};

export default SyllabusPage;
