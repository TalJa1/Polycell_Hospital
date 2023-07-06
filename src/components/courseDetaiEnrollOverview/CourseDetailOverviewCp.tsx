import { Box, Typography } from "@mui/material";
import React from "react";



const CourseDetailOverviewCp: React.FC = () => {
  

  return (
    <Box className="course-desc">
      <Typography variant="h5" fontWeight="bold">
        Course Description
      </Typography>
      <Box
        sx={{
          borderBottom: "2px solid rgb(17, 182, 122)",
          width: "50px",
          marginBottom: "20px",
        }}
      />
      <Typography color="ActiveBorder">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere nesciunt
        harum facilis odit inventore molestias qui asperiores recusandae
        architecto mollitia provident ipsa unde, praesentium impedit enim
        voluptate ducimus, saepe autem. Lorem ipsum dolor sit, amet consectetur
        adipisicing elit.
        <br />
        <br />
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda
        optio sequi suscipit et modi! Corporis obcaecati rerum et, explicabo
        inventore, aliquid, odit modi harum libero culpa distinctio. Nemo,
        aliquid dignissimos. Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Optio earum accusantium quam eius dignissimos quaerat voluptatem
        excepturi aliquid dolor ducimus. Illo porro maiores fuga dignissimos
        temporibus odio nulla nobis nemo. Lorem ipsum dolor sit amet consectetur
        adipisicing elit.
      </Typography>
    </Box>
  );
};

export default CourseDetailOverviewCp;
