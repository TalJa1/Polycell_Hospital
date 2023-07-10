import React from "react";
import Menubar from "../../components/layoutComponents/Menubar";
import CourseCp from "../../components/courseComponents/CourseCp";
import TraineeHeader from "../../components/layoutComponents/TraineeHeader";
import { Box } from "@mui/material";
import Footer from "../../components/layoutComponents/Footer";

const CoursesPage: React.FC = () => {
  return (
    
    <div className="container">
      {/* <Menubar /> */}
      <main className="rightlayout">
        <CourseCp />
      </main>
    </div>
  );
};

export default CoursesPage;
