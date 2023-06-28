import { Box, Checkbox, FormControlLabel } from "@mui/material";
import React from "react";
import QuizQuestionList from "./QuizQuestionList";

const QuizQuestionManagement: React.FC = () => {
  return (
    <Box
      sx={{
        padding: "20px",
        bgcolor: "#F7F7F7",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Box>Icon</Box>
        <Box >
          <FormControlLabel control={<Checkbox />} label="Shuffle"  />
        </Box>
      </Box>
      <QuizQuestionList/>
    </Box>
  );
};

export default QuizQuestionManagement;
