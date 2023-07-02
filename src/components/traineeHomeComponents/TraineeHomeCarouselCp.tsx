import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Button, Box } from "@mui/material";

const TraineeHomeCarouselCp: React.FC = () => {
  const itemData = [
    {
      img: "https://img.freepik.com/free-vector/online-medical-assistance-illustration_74855-5611.jpg?w=2000&t=st=1688291227~exp=1688291827~hmac=17da7fcbbdbe5798b2ca2a749582e9bcd4b94518ee5f25fed84a29d5c9b60e9a",
      title: "Breakfast",
    },
    {
      img: "https://img.freepik.com/free-vector/flat-design-online-doctor-landing-page_23-2149120259.jpg?w=2000&t=st=1688291255~exp=1688291855~hmac=eb4ac0e4c605c8b226a8b5c3871d29934e1d7aba7916c3800fcfb2b8901cef99",
      title: "Burger",
    },
    {
      img: "https://img.freepik.com/free-vector/flat-medical-landing-page_23-2149046321.jpg?w=2000&t=st=1688291271~exp=1688291871~hmac=8172a4da402461faaa5d3454e3b5b9cd87025767945e147af0d410f99da0ed6a",
      title: "Camera",
    },
    // ... rest of the itemData array
  ];

  return (
    <Carousel navButtonsAlwaysVisible>
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
    height: "500px",
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
