import { Box, Divider, Grid, Typography } from "@mui/material";
import React from "react";
import Header from "../layoutComponents/Header";
import Footer from "../layoutComponents/Footer";
import traineeApi from "../../api/traineeApi";
import { useDispatch, useSelector } from "react-redux";
import { fetchAttendanceTraineeSuccess } from "../../actions/attendanceAction";
import { TraineeAttendance } from "../../models/trainneAttendance";
import { RootState } from "../../reduxs/Root";

const TraineeAttendanceCp: React.FC = () => {
  const [clickedIndex, setClickedIndex] = React.useState<number>(0);
  const dispatch = useDispatch();
  const getTraineeAttendance: TraineeAttendance[] = useSelector(
    (state: RootState) => state.attendance.listAttendance
  );
  const [groupName, setGroupName] = React.useState<string>("");

  const fetchTraineeAttendance = React.useCallback(async () => {
    try {
      const response = await traineeApi.getTraineeAttendance(
        {},
        "673e3d95-bdac-426f-ab4b-4acb0a85554b"
      );
      // console.log("Response status >> ", response.status);
      // console.log("Response >> ", response.data);
      const action = fetchAttendanceTraineeSuccess(response.data);
      dispatch(action);
    } catch (error) {
      console.log("Error >> ", error);
    }
  }, [dispatch]);

  React.useEffect(() => {
    fetchTraineeAttendance();
  }, [fetchTraineeAttendance]);

  const handleClick = (courseIndex: any) => {
    console.log("clicked index >> ", clickedIndex);
    setClickedIndex(courseIndex);
  };

  const convertObject = (data: TraineeAttendance[]) => {
    const getdata = data[clickedIndex];
    return getdata.className;
  };

  return (
    <Box>
      {/* <Header imageUrl="" title="Trainee Attendance" /> */}
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
          <Typography variant="h4">Attendance</Typography>
        </Box>
      </Box>
      <Box
        sx={{
          backgroundColor: "white",
          margin: "1rem",
          minHeight: "700px",
        }}
      >
        <Grid container direction="row">
          <Grid item container xs={1} direction="column">
            <Grid
              sx={{
                backgroundColor: "#6082B6",
                border: "0.5px solid white",
                color: "white",
              }}
            >
              Campus
            </Grid>
            <Grid sx={{ fontWeight: "bold" }}>FHos</Grid>
          </Grid>
          <Grid item xs={3}>
            <Grid
              sx={{
                backgroundColor: "#6082B6",
                border: "0.5px solid white",
                color: "white",
              }}
            >
              Course
            </Grid>
            {clickedIndex !== null &&
              getTraineeAttendance.map((course, index) => (
                <Grid
                  key={index}
                  sx={{
                    fontWeight: clickedIndex === index ? "bold" : "normal",
                    cursor: "pointer",
                  }}
                  onClick={() => handleClick(index)}
                >
                  {`${course.programCode}`} - {`${course.programName}`}
                </Grid>
              ))}
          </Grid>
          <Grid item xs={8}>
            <Grid container direction="row">
              <Grid
                item
                xs={1}
                sx={{
                  backgroundColor: "#6082B6",
                  border: "0.5px solid white",
                  color: "white",
                }}
              >
                No
              </Grid>
              <Grid
                item
                xs={2}
                sx={{
                  backgroundColor: "#6082B6",
                  border: "0.5px solid white",
                  color: "white",
                }}
              >
                Date
              </Grid>
              <Grid
                item
                xs={2}
                sx={{
                  backgroundColor: "#6082B6",
                  border: "0.5px solid white",
                  color: "white",
                }}
              >
                Slot
              </Grid>
              <Grid
                item
                xs={2}
                sx={{
                  backgroundColor: "#6082B6",
                  border: "0.5px solid white",
                  color: "white",
                }}
              >
                Room
              </Grid>
              <Grid
                item
                xs={1}
                sx={{
                  backgroundColor: "#6082B6",
                  border: "0.5px solid white",
                  color: "white",
                }}
              >
                Trainer
              </Grid>
              <Grid
                item
                xs={2}
                sx={{
                  backgroundColor: "#6082B6",
                  border: "0.5px solid white",
                  color: "white",
                }}
              >
                Group
              </Grid>
              <Grid
                item
                xs={2}
                sx={{
                  backgroundColor: "#6082B6",
                  border: "0.5px solid white",
                  color: "white",
                  textAlign: "center",
                }}
              >
                Status
              </Grid>
            </Grid>
            {getTraineeAttendance.length > 0 && clickedIndex !== null && (
              <Grid>
                {getTraineeAttendance[clickedIndex].attendances.map(
                  (attendance, index) => (
                    <Box key={index} sx={{ padding: "5px" }}>
                      <Grid container direction="row">
                        <Grid item xs={1}>
                          {index + 1}
                        </Grid>
                        <Grid item xs={2}>
                          {attendance.date.toString()}
                        </Grid>
                        <Grid item xs={2}>
                          {attendance.startTime.toString().substring(0, 5)}-
                          {attendance.endTime.toString().substring(0, 5)}
                        </Grid>
                        <Grid item xs={2}>
                          {attendance.room.name}
                        </Grid>
                        {attendance.trainer === null ? (
                          <Grid item xs={1}>
                            empty
                          </Grid>
                        ) : (
                          <Grid item xs={1}>
                            {attendance.trainer.code}
                          </Grid>
                        )}
                        <Grid item xs={2}>
                          {/* {attendance.room.name} */}
                          {convertObject(getTraineeAttendance)}
                        </Grid>
                        {attendance.status === "PRESENT" ? (
                          <Grid
                            item
                            xs={2}
                            sx={{ color: "green", textAlign: "center" }}
                          >
                            {attendance.status}
                          </Grid>
                        ) : attendance.status === "ABSENT" ? (
                          <Grid
                            item
                            xs={2}
                            sx={{ color: "red", textAlign: "center" }}
                          >
                            {attendance.status}
                          </Grid>
                        ) : (
                          <Grid
                            item
                            xs={2}
                            sx={{ color: "blueviolet", textAlign: "center" }}
                          >
                            {attendance.status}
                          </Grid>
                        )}
                      </Grid>
                      <Divider />
                    </Box>
                  )
                )}
              </Grid>
            )}
          </Grid>
        </Grid>
      </Box>
      <Footer />
    </Box>
  );
};

export default TraineeAttendanceCp;

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
