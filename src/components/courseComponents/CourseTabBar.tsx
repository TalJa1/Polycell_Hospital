import { AppBar, Box, Toolbar, Typography } from "@mui/material";

import React from "react";

const CourseTabBar: React.FC = () => {
  return (
    <Box >
      <AppBar position="static">
        <Toolbar>

          <Typography sx={{ flexGrow: 1 }}>
            Course
          </Typography>
          <Typography sx={{ flexGrow: 1 }}>
            Participant
          </Typography>
          <Typography sx={{ flexGrow: 1 }}>
            Grades
          </Typography>
          
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default CourseTabBar;
