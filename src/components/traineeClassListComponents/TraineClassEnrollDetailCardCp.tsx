import React from "react";

import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import GroundImg from "../../assets/imgs/background.png";
import { Button } from "@mui/joy";
import { Class } from "../../models/classManagementModel";
import { useNavigate } from "react-router-dom";




const TraineClassEnrollDetailCardCp: React.FC<ClassEnrollCardProps> = ({
    classData
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
            {classData.name}
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
            {classData.program.name}
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
            onClick={() => navigate("/course-detail-view-enroll", { state: { classData } })}
          >
            View details
          </Button>
        </Box>
      </Box>
    </Card>
  );
};

export default TraineClassEnrollDetailCardCp;

interface ClassEnrollCardProps {
    classData: Class
  }