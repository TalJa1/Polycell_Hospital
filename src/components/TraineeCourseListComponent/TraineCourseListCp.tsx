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
import React, { useCallback, useEffect } from "react";
import CourseCard from "../traineeHomeComponents/CourseCard";
import CourseCardViewCp from "../traineeHomeComponents/CourseCardViewCp";
import { Program } from "../../models/programAddModel";
import { RootState } from "../../reduxs/Root";
import { useDispatch, useSelector } from "react-redux";
import programApi from "../../api/programApi";
import { fetchProgramsSuccess } from "../../actions/programAction";

const TraineCourseListCp: React.FC = () => {

  const programs: Program[] = useSelector(
    (state: RootState) => state.program.programs
  );
  const dispatch = useDispatch();

  const fetchProgram = useCallback(async () => {
    try {

      const response = await programApi.getProgram();

      dispatch(fetchProgramsSuccess(response.data));

    } catch (error) {
      console.log(error);
    }
  }, [dispatch]);

  useEffect(() => {
    fetchProgram();
  }, [fetchProgram]);

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
          padding: "100px 0",
        }}
      >
        <Grid container spacing={5} sx={{ justifyContent: 'center' }}>
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
            <Box>
              {programs.map((program, index) => (
                <CourseCardViewCp
                  key={index}
                  program={program}
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
              <Pagination count={1} size="large" />
            </Box>
          </Grid>
        </Grid>
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
