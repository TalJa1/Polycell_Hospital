import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Button, Box } from "@mui/material";

const TraineeHomeCarouselCp: React.FC = () => {
  const itemData = [
    {
      img: "https://www.thetahmid.com/themes/edulyn-v1.0/assets/images/slider-1.jpg",
      title: "Breakfast",
    },
    {
      img: "https://www.thetahmid.com/themes/edulyn-v1.0/assets/images/slider-2.jpg",
      title: "Burger",
    },
    // ... rest of the itemData array
  ];

  return (
    <Carousel navButtonsAlwaysVisible indicators={false}>
      {itemData.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </Carousel>
  );
};

interface ItemProps {
  item: {
    img: string;
    title: string;
  };
}

const Item: React.FC<ItemProps> = (props) => {
  const boxStyle: React.CSSProperties = {
    height: "90vh",
    backgroundImage: `url(${props.item.img})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };
  return (
    <Paper>
      <Box sx={boxStyle}></Box>
    </Paper>
  );
};

export default TraineeHomeCarouselCp;
