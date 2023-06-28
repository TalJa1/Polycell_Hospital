import {
  Box,
  Button,
  Grid,
  TextField,
  Typography,
  styled,
} from "@mui/material";
import React from "react";
import QuizQuestionManagement from "./QuizQuestionManagement";
import QuizQuestionList from "./QuizQuestionList";

const QuizQuestionsCp: React.FC = () => {
  return (
    <div>
      <Typography variant="h5">Questions</Typography>
      <Box
        sx={{
          marginBottom: "20px",
          marginTop: "20px",

          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box>Questions: question quantity | This quiz is open</Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            Maximum grade
            <Box
              sx={{
                marginLeft: "10px",
                marginRight: "10px",
              }}
            >
              <TextField
                defaultValue="10.00"
                sx={{ width: "80px" }}
                size="small" // Adjust width and height as desired
              />
            </Box>
          </Box>
          <Box>
            <Button variant="contained">Save</Button>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box>
          <ButtonRepagin variant="contained">Repaginate</ButtonRepagin>
          <ButtonSelectAll variant="contained">
            {" "}
            Select multiple items
          </ButtonSelectAll>
        </Box>
        <Box>Total mark: 10.00</Box>
      </Box>
      <Box>
        <QuizQuestionManagement />
      </Box>
    </div>
  );
};

export default QuizQuestionsCp;

const ButtonRepagin = styled(Button)({
  borderRadius: "5px 0 0 5px",
  marginRight: "2px",
});

const ButtonSelectAll = styled(Button)({
  borderRadius: "0 5px 5px 0",
});
