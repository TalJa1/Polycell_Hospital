import {
  Box,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Grid,
  Pagination,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import CourseCard from "../traineeHomeComponents/CourseCard";
import CourseCardViewCp from "../traineeHomeComponents/CourseCardViewCp";

const TraineCourseListCp: React.FC = () => {
  const courseData = [
    {
      name: "Course 1",
      image: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur accusamus hic ea in autem debitis minima.",
    },
    {
      name: "Course 2",
      image: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur accusamus hic ea in autem debitis minima.",
    },
    {
      name: "Course 3",
      image: "https://images.unsplash.com/photo-1597645587822-e99fa5d45d25",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur accusamus hic ea in autem debitis minima.",
    },
    {
      name: "Course 4",
      image: "https://images.unsplash.com/photo-1567306301408-9b74779a11af",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur accusamus hic ea in autem debitis minima.",
    },
    {
      name: "Course 5",
      image: "https://images.unsplash.com/photo-1471357674240-e1a485acb3e1",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur accusamus hic ea in autem debitis minima.",
    },
    {
      name: "Course 6",
      image: "https://images.unsplash.com/photo-1589118949245-7d38baf380d6",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur accusamus hic ea in autem debitis minima.",
    },
    // Add more courses as needed
  ];

  return (
    <div>
      <Box sx={boxStyle}>
        <div style={overlayStyle}></div>
        <Box
          sx={{
            position: "absolute",
            background: "rgb(24, 43, 73)",
            color: "white",
            padding: "30px",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            textAlign: "center",
          }}
        >
          <Typography variant="h4">Courses</Typography>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            width: "70%",
            paddingTop: "100px",
            paddingBottom: "100px",
          }}
        >
          <Grid container gap={5}>
            <Grid item xs={3}>
              <Box
                sx={{
                  border: "1px solid rgb(238, 238, 238)",
                  padding: "16px 20px",
                  marginBottom: "40px",
                }}
              >
                <Typography variant="h5">Search Courses</Typography>

                <Box
                  sx={{
                    borderBottom: "2px solid rgb(17, 182, 122)",
                    width: "50px",
                    marginBottom: "20px",
                  }}
                />

                <TextField placeholder="Search" size="small" />
              </Box>
              <Box
                sx={{
                  border: "1px solid rgb(238, 238, 238)",
                  padding: "16px 20px",
                }}
              >
                <Typography variant="h5">Courses Category</Typography>

                <Box
                  sx={{
                    borderBottom: "2px solid rgb(17, 182, 122)",
                    width: "50px",
                    marginBottom: "20px",
                  }}
                />

                <FormGroup>
                  <FormControlLabel
                    sx={{
                      borderTop: "1px dashed rgb(221, 221, 221)",
                      padding: "10px 0px",
                    }}
                    control={<Checkbox />}
                    label="Category 1"
                  />
                  <FormControlLabel
                    sx={{
                      borderTop: "1px dashed rgb(221, 221, 221)",
                      padding: "10px 0px",
                    }}
                    control={<Checkbox />}
                    label="Category 1"
                  />
                  <FormControlLabel
                    sx={{
                      borderTop: "1px dashed rgb(221, 221, 221)",
                      padding: "10px 0px",
                    }}
                    control={<Checkbox />}
                    label="Category 1"
                  />
                  <FormControlLabel
                    sx={{
                      borderTop: "1px dashed rgb(221, 221, 221)",
                      padding: "10px 0px",
                    }}
                    control={<Checkbox />}
                    label="Category 1"
                  />
                </FormGroup>
              </Box>
            </Grid>
            <Grid item xs={7}>
              <Box sx={{}}>
                {courseData.map((course, index) => (
                  <CourseCardViewCp
                    key={index}
                    name={course.name}
                    image={course.image}
                    description={course.description}
                  />
                ))}
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "20px",
                }}
              >
                <Pagination count={10} size="large" />
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </div>
  );
};

export default TraineCourseListCp;

const boxStyle: React.CSSProperties = {
  backgroundImage: `url(https://www.thetahmid.com/themes/edulyn-v1.0/assets/images/breadcrumb-bg.jpg)`,
  backgroundSize: "cover",
  backgroundPosition: "center center",
  backgroundRepeat: "no-repeat",
  padding: "60px 0px",
  position: "relative",
  height: "25vh",
  width: "100%",
};

const overlayStyle: React.CSSProperties = {
  position: "absolute",
  content: '""',
  background: "rgb(24, 43, 73)",
  opacity: 0.5,
  width: "100%",
  height: "100%",
  top: 0,
  left: 0,
};
