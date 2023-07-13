import { Box } from "@mui/material";
import React from "react";
import TraineeHeader from "../layoutComponents/TraineeHeader";
import FormActivityUrl from "./FormActivityUrl";
import CourseTabBar from "../courseComponents/CourseTabBar";
import Footer from "../layoutComponents/Footer";
import { useParams } from "react-router-dom";
import FormActivityFile from "./FormActivityFile";
import FormActivityQuiz from "./FormActivityQuiz";

const FormActivityCp: React.FC = () => {
  const { type } = useParams();

  const renderFormActivityComponent = () => {
    switch (type) {
      case "URL":
        return <FormActivityUrl />;
      case "FILE":
        return <FormActivityFile />;
      case "QUIZ":
        return <FormActivityQuiz />;
      default:
        return null;
    }
  };

  return (
    <div className="class-container">
      <TraineeHeader title="Course">
        <Box
          sx={{
            backgroundColor: "white",
            display: "flex",
            justifyContent: "center",
            maxHeight: "100%",
            position: "relative",
          }}
        >
          {/* <CourseTabBarCp editMode={editMode} /> */}
          <Box sx={{ width: "70%" }}>
            <CourseTabBar />
            {renderFormActivityComponent()}
          </Box>
        </Box>
      </TraineeHeader>

      <Footer />
    </div>
  );
};

export default FormActivityCp;
