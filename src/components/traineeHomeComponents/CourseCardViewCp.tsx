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
import { useNavigate } from "react-router-dom";
import { Program } from "../../models/programAddModel";
import GroundImg from "../../assets/imgs/background.png";

const CourseCardViewCp: React.FC<CourseCardProps> = ({
  program
}) => {
  const navigate = useNavigate();

  return (
    <Card sx={{ display: "flex", marginBottom: "30px", width: "100%"}}>
      <CardMedia
        component="img"
        sx={{ width: 200 }}
        alt="Live from space album cover"
        image={GroundImg}
        
      />
      <Box sx={{ display: "flex", flexDirection: "column", padding: "10px 30px" }}>
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography component="div" variant="h5">
            {program.name}
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
            {program.description}
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
            onClick={() => navigate("/course-detail-view-enroll", { state: { program } })}
          >
            View details
          </Button>
        </Box>
      </Box>
    </Card>
  );
};

interface CourseCardProps {
  program: Program
}

export default CourseCardViewCp;
