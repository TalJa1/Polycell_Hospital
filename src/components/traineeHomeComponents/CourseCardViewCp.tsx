import React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import { Button } from "@mui/joy";

const CourseCardViewCp: React.FC<CourseCardProps> = ({
  name,
  image,
  description,
}) => {
  const theme = useTheme();

  return (
    <Card sx={{ display: "flex", marginBottom: "30px" }}>
      <CardMedia
        component="img"
        sx={{ width: 200 }}
        image={image}
        alt="Live from space album cover"
      />
      <Box sx={{ display: "flex", flexDirection: "column", padding: "10px 30px" }}>
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography component="div" variant="h5">
            {name}
          </Typography>
          <Box
                  sx={{
                    borderBottom: "2px solid rgb(17, 182, 122)",
                    width: "50px",
                    marginBottom: "10px",
                  }}
                />
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            {description}
          </Typography>
          
        </CardContent>
        <Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}>
          <Button
            variant="solid"
            size="md"
            sx={{
              bgcolor: "transparent",
              border: "solid 2px ActiveBorder",
              color: "ActiveBorder",
              "&:hover": {
                color: "white",
                bgcolor: "ActiveBorder",
                // Replace "NewColor" with the desired color on hover
              },
            }}
          >
            View details
          </Button>
        </Box>
      </Box>
    </Card>
  );
};

interface CourseCardProps {
  name: string;
  image: string;
  description: string;
}

export default CourseCardViewCp;
