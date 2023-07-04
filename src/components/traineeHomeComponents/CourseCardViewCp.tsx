import React from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import CardOverflow from "@mui/joy/CardOverflow";
import Chip from "@mui/joy/Chip";
import Link from "@mui/joy/Link";
import Typography from "@mui/joy/Typography";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import { Box, Divider } from "@mui/material";

const CourseCardViewCp: React.FC<CourseCardProps> = ({
  name,
  image,
  description,
}) => {
  return (
    <Card sx={{ width: "100%", boxShadow: "lg", marginBottom: "40px" }}>
      <CardOverflow>
        <AspectRatio sx={{ minWidth: 200 }}>
          <img
            src={image}
            srcSet={`${image}?auto=format&fit=crop&w=286&dpr=2 2x`}
            loading="lazy"
            alt=""
          />
        </AspectRatio>
      </CardOverflow>
      <CardContent>
        <Typography level="h5">{name}</Typography>
        <Typography>{description}</Typography>

        {/* <Typography
            fontSize="sm"
            fontWeight="xl"
            sx={{ mt: 1 }}
            endDecorator={
              <Chip component="span" size="sm" variant="soft" color="success">
                Lowest price
              </Chip>
            }
          >
            Start
          </Typography> */}
      </CardContent>
      <Divider />
      <Box
        sx={{
          display: "flex",
          gap: "12px",
          // justifyContent: "space-between"
        }}
      >
        <Chip component="span" size="sm" variant="soft" color="warning">
          30 slot
        </Chip>
      </Box>
      <Divider />

      <Button
        variant="solid"
        size="md"
        sx={{
          bgcolor: "transparent",
          border: "solid 2px ActiveBorder",
          color: "ActiveBorder",
          width: "30%",
          "&:hover": {
            color: "white",
            bgcolor: "ActiveBorder",
            // Replace "NewColor" with the desired color on hover
          },
        }}
      >
        View detail
      </Button>
    </Card>
  );
};

interface CourseCardProps {
  name: string;
  image: string;
  description: string;
}

export default CourseCardViewCp;
