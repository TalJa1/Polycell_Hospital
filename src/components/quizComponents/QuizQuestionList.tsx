import { Box, Menu, MenuItem, Typography } from "@mui/material";
import React, { useState } from "react";

const QuizQuestionList: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleMoreVertClick = (event: React.MouseEvent<HTMLElement>) => {
    event.stopPropagation();
    setAnchorEl(event.currentTarget);
  };

  const handleMoreVertClose = (event: React.MouseEvent<HTMLElement>) => {
    event.stopPropagation();
    setAnchorEl(null);
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
            <MenuItem onClick={handleMoreVertClose}>a new question</MenuItem>
            <MenuItem onClick={handleMoreVertClose}>
              from question bank
            </MenuItem>
            <MenuItem onClick={handleMoreVertClose}>a random question</MenuItem>
          </Menu>
        </Box>
      </Box>
    </Box>
  );
};

export default QuizQuestionList;
