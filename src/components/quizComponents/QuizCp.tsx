import React from "react";
import TraineeHeader from "../layoutComponents/TraineeHeader";
import { Box } from "@mui/material";
import Footer from "../layoutComponents/Footer";
import QuizTabBarCp from "./QuizTabBarCp";

const QuizCp: React.FC = () => {
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
          <QuizTabBarCp />
        </Box>
      </TraineeHeader>

      <Footer />
    </div>
  );
};

export default QuizCp;
