import {
  Box,
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";

import React from "react";

const CourseActivityCp: React.FC = () => {
  return (
    <Card
      sx={{
        border: "1px solid black",
        boxShadow: "none",
        backgroundColor: "white",
      }}
    >
      {/* <CardMedia
        component="img"
        height="200"
        image="image-url.jpg"
        alt="Image"
      /> */}
      <CardContent
        sx={{
          display: "flex",
          justifyContent: "space-between",
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
            //   height: "50px",
              border: "1px solid black",
              backgroundColor: "#fff",
            }}
          />
          <div>
            <Typography variant="h6" component="div">
              Card Name
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
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

              border: "1px solid black",
              backgroundColor: "#fff",
            }}
          >
            <Typography variant="subtitle1" color="text.secondary">
              Mask as done
            </Typography>
          </Box>

          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </CardContent>
    </Card>
  );
};

export default CourseActivityCp;
