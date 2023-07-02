import React from "react";
import CourseCard from "./CourseCard";
import { Box } from "@mui/material";

const TraineeHomeListCourseCp: React.FC = () => {
  const courseData = [
    {
      name: "Course 1",
      image: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
      description: "This is the description for Course 1.",
    },
    {
      name: "Course 2",
      image: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
      description: "This is the description for Course 2.",
    },
    {
      name: "Course 3",
      image: "https://images.unsplash.com/photo-1597645587822-e99fa5d45d25",
      description: "This is the description for Course 3.",
    },
    {
      name: "Course 4",
      image: "https://images.unsplash.com/photo-1567306301408-9b74779a11af",
      description: "This is the description for Course 4.",
    },
    {
      name: "Course 5",
      image: "https://images.unsplash.com/photo-1471357674240-e1a485acb3e1",
      description: "This is the description for Course 4.",
    },
    {
      name: "Course 6",
      image: "https://images.unsplash.com/photo-1589118949245-7d38baf380d6",
      description: "This is the description for Course 4.",
    },
    // Add more courses as needed
  ];

  return (
    <>
      <Box
        sx={{
          padding: "20px 0 ",
          display: "flex",
          flexWrap: "wrap",
          gap: "60px",
          justifyContent: "space-between",
        }}
      >
        {courseData.map((course, index) => (
          <CourseCard
            key={index}
            name={course.name}
            image={course.image}
            description={course.description}
          />
        ))}
      </Box>
    </>
  );
};

export default TraineeHomeListCourseCp;
