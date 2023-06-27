import { Box, Button, Typography } from "@mui/material";
import React from "react";

const QuizMainCp: React.FC = () => {
  return (
    <div>
      <Button variant="contained">Add question</Button>
      <Box sx={{
        height: "10px"
      }}/>
      <Typography variant="subtitle1">Grading method: Highest grade</Typography>
      <Box>
      <Button variant="contained">Back to the course</Button>

      </Box>
    </div>
  );
};

export default QuizMainCp;
