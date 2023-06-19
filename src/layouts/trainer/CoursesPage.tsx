import React from "react";
import Menubar from "../../components/layoutComponents/Menubar";
import CourseCp from "../../components/courseComponents/CourseCp";
import { Footer, Header } from "antd/es/layout/layout";

const CoursesPage: React.FC = () => {
  return (
    <div className="container">
      <Menubar />
      <main className="rightlayout">
        <CourseCp />
      </main>
    </div>
  );
};

export default CoursesPage;
