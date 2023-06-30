import {
  Box,
  Card,
  CardContent,
  Checkbox,
  Dialog,
  DialogTitle,
  FormControlLabel,
  Grid,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import QuizQuestionDialogAddRandom from "./QuizQuestionDialogAddRandom";
import QuizQuestionDialogAddFromBank from "./QuizQuestionDialogAddFromBank";

const QuizQuestionList: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [questions, setQuestions] = useState([
    { id: 1, question: "1 + 1 = ?", selected: false },
    { id: 2, question: "2 + 2 = ?", selected: false },
    { id: 3, question: "3 + 3 = ?", selected: false },
  ]);

  const handleMoreVertClick = (event: React.MouseEvent<HTMLElement>) => {
    event.stopPropagation();
    setAnchorEl(event.currentTarget);
  };

  const handleMoreVertClose = (event: React.MouseEvent<HTMLElement>) => {
    event.stopPropagation();
    setAnchorEl(null);
  };

  const handleMenuItemClick = (option: string) => {
    setSelectedOption(option);
    setAnchorEl(null);
  };

  const handleCloseDialog = () => {
    setSelectedOption(null);
  };

  const renderDialog = () => {
    if (selectedOption === "From Question Bank") {
      // Render dialog for "From Question Bank" option
      return (
        <QuizQuestionDialogAddFromBank
          open={Boolean(selectedOption)}
          onClose={handleCloseDialog}
          dialogTitle="Add from question bank"
        />
      );
    } else if (selectedOption === "Random Question") {
      // Render dialog for "Random Question" option
      return (
        <QuizQuestionDialogAddRandom
          open={Boolean(selectedOption)}
          onClose={handleCloseDialog}
          dialogTitle="Add a random question"
        />
      );
    } else if (selectedOption === "a new question") {
      // Render dialog for "Random Question" option
      return (
        <QuizQuestionDialogAddRandom
          open={Boolean(selectedOption)}
          onClose={handleCloseDialog}
          dialogTitle="Choose a question type to add"
        />
      );
    } else {
      return null; // Render nothing if no option is selected
    }
  };

  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Typography>Page 1</Typography>
        <Box>
          <Box onClick={handleMoreVertClick}>Add</Box>

          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMoreVertClose}
          >
            <MenuItem onClick={() => handleMenuItemClick("a new question")}>
              a new question
            </MenuItem>
            <MenuItem onClick={() => handleMenuItemClick("From Question Bank")}>
              from question bank
            </MenuItem>
            <MenuItem onClick={() => handleMenuItemClick("Random Question")}>
              a random question
            </MenuItem>
          </Menu>
        </Box>
      </Box>
      {questions.map((question) => (
        <Card sx={{
          marginBottom: "10px"
        }}>
          <CardContent
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Typography variant="subtitle1">{question.question}</Typography>
          </CardContent>
        </Card>
      ))}

      {renderDialog()}
    </Box>
  );
};

export default QuizQuestionList;
