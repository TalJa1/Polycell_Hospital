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
import { Program } from "../../models/programAddModel";
import { RootState } from "../../reduxs/Root";
import {
  fetchPrograms,
  fetchProgramsError,
  fetchProgramsSuccess,
} from "../../actions/programAction";

const CoursePageCp: React.FC = () => {
  const programs: Program[] = useSelector(
    (state: RootState) => state.program.programs
  );
  const { id } = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();

  console.log("user id >> ", id);

  const fetchTraineeProgram = useCallback(async () => {
    try {
      dispatch(fetchPrograms());
      programApi
        .getProgramByTraineeId(id)
        .then((response) => {
          const programs = response.data;
          console.log("program id >> ", response.data);
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
  }, [dispatch, id]);

  useEffect(() => {
    console.log("Hello");
    fetchTraineeProgram();
  }, [fetchTraineeProgram]);

  return (
    <Box>
      <TraineeHeader title="Pollycell">
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
            <Typography variant="h4">My Course</Typography>
          </Box>
        </Box>
        <Grid
          container
          direction="row"
          sx={{
            height: "fit-content",
            backgroundColor: "white",
            padding: "100px 0",
            justifyContent: "center",
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
                  <Link
                    to={`/course-detail-page/${program.id}/${program.trainer?.id}`}
                  >
                    <Button size="small" color="primary">
                      Go to
                    </Button>
                  </Link>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </TraineeHeader>

      <Footer />
    </Box>
  );
};

export default CoursePageCp;

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
