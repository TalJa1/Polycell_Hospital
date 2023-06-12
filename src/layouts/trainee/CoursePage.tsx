import React from "react";
import Menubar from "../../components/Menubar";
import CoursePageCp from "../../components/CoursePageCp";

const CoursePage: React.FC = () => {
  return (
    <div className="container">
      <Menubar />
      <main className="rightlayout">
        <CoursePageCp />
      </main>
    </div>
  );
};

export default CoursePage;
