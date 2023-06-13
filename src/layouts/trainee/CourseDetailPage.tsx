import React from "react";
import Menubar from "../../components/layoutComponents/Menubar";
import CourseDetailPageCp from "../../components/traineeComponents/CourseDetailPageCp";

const CourseDetailPage: React.FC = () => {
  return (
    <div className="container">
      <Menubar />
      <main className="rightlayout">
        <CourseDetailPageCp />
      </main>
    </div>
  );
};

export default CourseDetailPage;
