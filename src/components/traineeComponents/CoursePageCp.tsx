import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import TraineeHeader from "../layoutComponents/TraineeHeader";
import Footer from "../layoutComponents/Footer";
import GroundImg from "../../assets/imgs/background.png";
import { Link } from "react-router-dom";

const CoursePageCp: React.FC = () => {
  return (
    <Box>
      <TraineeHeader title="My course" />
      <Grid
        container
        direction="row"
        sx={{
          height: "fit-content",
          backgroundColor: "white",
        }}
      >
        {myCourse.map((course, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              key={index}
              sx={{
                maxWidth: 345,
                margin: "auto",
                marginBottom: "5px",
                marginTop: "5px",
              }}
            >
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image={GroundImg}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {course.courseName}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {course.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Link to={`/course-detail-page/${course.course}`}>
                  <Button size="small" color="primary">
                    Go to
                  </Button>
                </Link>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Footer />
    </Box>
  );
};

export default CoursePageCp;

const myCourse = [
  {
    courseName: "Medical Terminology Specialization",
    course: "MTS221",
    description:
      "Develop your skills in medical terminology. Identify word parts (prefixes, suffixes, and roots) and abbreviations commonly used in the medical field, read and understand health records, and identify terms associated with all 10 major organ systems.",
  },
  {
    courseName: "Medical Terminology Specialization",
    course: "MTS221",
    description:
      "Develop your skills in medical terminology. Identify word parts (prefixes, suffixes, and roots) and abbreviations commonly used in the medical field, read and understand health records, and identify terms associated with all 10 major organ systems.",
  },
  {
    courseName: "Medical Terminology Specialization",
    course: "MTS221",
    description:
      "Develop your skills in medical terminology. Identify word parts (prefixes, suffixes, and roots) and abbreviations commonly used in the medical field, read and understand health records, and identify terms associated with all 10 major organ systems.",
  },
  {
    courseName: "Medical Terminology Specialization",
    course: "MTS221",
    description:
      "Develop your skills in medical terminology. Identify word parts (prefixes, suffixes, and roots) and abbreviations commonly used in the medical field, read and understand health records, and identify terms associated with all 10 major organ systems.",
  },
];
