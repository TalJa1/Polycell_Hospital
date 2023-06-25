import {
  Box,
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import EditIcon from "@mui/icons-material/Edit";


import React, { useState } from "react";

const CourseEditActivityCp: React.FC = () => {
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
    <Box
      sx={{
        border: "1px solid #E6E6E6",
        boxShadow: "none",
        backgroundColor: "white",
        marginBottom: "10px",
        borderRadius: "10px",
      }}
    >
      <Box
        sx={{
            padding: "20px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "flex",
          }}
        >
          <Box
            sx={{
              width: "50px",

              border: "1px solid #E6E6E6",
              backgroundColor: "#fff",
              marginRight: "10px",
              borderRadius: "5px",
            }}
          />

          <div>
            
            <Typography variant="subtitle1" component="div">
              Type
            </Typography>
            <Typography variant="subtitle1" color="#1976d2">
              Card Title
            </Typography>
            
          </div>
        </div>
        <div
          style={{
            display: "flex",
          }}
        >
          <Box
            sx={{
              height: "30px",
              border: "1px solid #E6E6E6",
              backgroundColor: "#fff",
              marginRight: "10px",
              display: "inline-flex",
              alignItems: "center",
              padding: "4px 8px",
              borderRadius: "5px",
            }}
          >
            <Typography variant="subtitle2" color="text.secondary">
              Mask as done
            </Typography>
          </Box>

          <div>
            <IconButton
              aria-label="more"
              onClick={handleMoreVertClick}
              sx={{ ml: "auto" }}
            >
              <MoreVertIcon />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMoreVertClose}
            >
              <MenuItem onClick={handleMoreVertClose}>Edit</MenuItem>
              <MenuItem onClick={handleMoreVertClose}>Hide</MenuItem>
              <MenuItem onClick={handleMoreVertClose}>Duplicate</MenuItem>
              <MenuItem onClick={handleMoreVertClose}>Delete</MenuItem>
            </Menu>
          </div>
        </div>
      </Box>
    </Box>
  );
};

export default CourseEditActivityCp;
