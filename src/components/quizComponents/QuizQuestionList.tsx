import {
  Box,
  Dialog,
  DialogTitle,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import QuizQuestionDialogAdd from "./QuizQuestionDialogAdd";

const QuizQuestionList: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

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
        <QuizQuestionDialogAdd
          open={Boolean(selectedOption)}
          onClose={handleCloseDialog}
          dialogTitle="Add from question bank"
        />
      );
    } else if (selectedOption === "Random Question") {
      // Render dialog for "Random Question" option
      return (
        <QuizQuestionDialogAdd
          open={Boolean(selectedOption)}
          onClose={handleCloseDialog}
          dialogTitle="Add a random question"
        />
      );
    } else if (selectedOption === "a new question") {
      // Render dialog for "Random Question" option
      return (
        <QuizQuestionDialogAdd
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

      {renderDialog()}
    </Box>
  );
};

export default QuizQuestionList;
