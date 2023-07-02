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
import { Divider } from "@mui/material";

const CourseCard: React.FC<CourseCardProps> = ({
  name,
  image,
  description,
}) => {
  return (
    <Card sx={{ width: "25%", boxShadow: "lg" }}>
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
        <Typography level="h4">{name}</Typography>
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
      <Chip component="span" size="sm" variant="soft" color="success">

        20/06/2023 - 20/8/2024
      </Chip>
      <Button
        variant="solid"
        size="lg"
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
        Join
      </Button>
    </Card>
  );
};

interface CourseCardProps {
  name: string;
  image: string;
  description: string;
}

export default CourseCard;
