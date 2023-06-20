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
import React, { useCallback, useEffect } from "react";
import TraineeHeader from "../layoutComponents/TraineeHeader";
import Footer from "../layoutComponents/Footer";
import GroundImg from "../../assets/imgs/background.png";
import { Link } from "react-router-dom";
import programApi from "../../api/programApi";
import { useDispatch, useSelector } from "react-redux";
import { Program, Topic } from "../../models/programAddModel";
import { RootState } from "../../reduxs/Root";
import { fetchPrograms, fetchProgramsError, fetchProgramsSuccess } from "../../actions/programAction";


const CoursePageCp: React.FC = () => {

  const programs: Program[] = useSelector(
    (state: RootState) => state.program.programs
  );
  const dispatch = useDispatch();

  const fetchTraineeProgram = useCallback(async () => {
    try {
      dispatch(fetchPrograms());
      programApi
        .getAllByTraineeId({})
        .then((response) => {
          const programs = response.data;
          dispatch(fetchProgramsSuccess(programs));
          console.log(response);
        })
        .catch((error) => {
          dispatch(fetchProgramsError(error.message));
        });

      // console.log(topics);
    } catch (error) {
      console.log(error);
    }
  }, [dispatch]);

  useEffect(() => {
    console.log("Hello");
    fetchTraineeProgram();
  }, [fetchTraineeProgram]);

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
        {programs.map((program, index) => (
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
                    {program.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {program.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Link to={`/course-detail-page/${program.id}/${program.trainer?.id}`}>
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
