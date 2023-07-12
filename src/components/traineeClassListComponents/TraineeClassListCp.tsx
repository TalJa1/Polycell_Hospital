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
import React, { useCallback, useEffect, useState } from "react";
import { RootState } from "../../reduxs/Root";
import { useDispatch, useSelector } from "react-redux";
import classApi from "../../api/classApi";
import { fetchClassForTrainee } from "../../actions/classAction";
import TraineClassEnrollDetailCardCp from "./TraineClassEnrollDetailCardCp";
import { Class } from "../../models/classManagementModel";
import programApi from "../../api/programApi";
import { fetchProgramsSuccess } from "../../actions/programAction";
import { Program } from "../../models/programAddModel";

const TraineeClassListToEnrollCp: React.FC = () => {
  const daysOfWeek: string[] = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  const { list } = useSelector((state: RootState) => state.class);
  const programs: Program[] = useSelector(
    (state: RootState) => state.program.programs
  );
  const dispatch = useDispatch();

  const params = useState<any>();

  const fetchClass = useCallback(async () => {
    try {
      const param = {
        page: 0,
        size: 999,
        filterAnd: `status|eq|PENDING`,
      };
      const response = await classApi.getClassesByProgramId(param);

      console.log(response.data.items);

      dispatch(fetchClassForTrainee(response.data));
    } catch (error) {
      console.log(error);
    }
  }, [dispatch]);

  const fetchProgram = useCallback(async () => {
    try {
      const response = await programApi.getProgram();

      dispatch(fetchProgramsSuccess(response.data));
    } catch (error) {
      console.log(error);
    }
  }, [dispatch]);

  useEffect(() => {
    fetchClass();
  }, [fetchClass]);
  
  useEffect(() => {
    fetchProgram();
  }, [fetchProgram]);

  console.log(programs);

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
          <Typography variant="h4">Classes</Typography>
        </Box>
      </Box>
      <Box
        sx={{
          padding: "100px 0",
        }}
      >
        <Grid container spacing={5} sx={{ justifyContent: "center" }}>
          <Grid item xs={2}>
            <Box
              sx={{
                border: "1px solid rgb(238, 238, 238)",
                padding: "16px 20px",
                marginBottom: "40px",
              }}
            >
              <Typography variant="h5">Search Classes</Typography>

              <Box
                sx={{
                  borderBottom: "2px solid rgb(17, 182, 122)",
                  width: "50px",
                  marginBottom: "20px",
                }}
              />

              <TextField placeholder="Search" size="small" fullWidth />
            </Box>
            <Box
              sx={{
                border: "1px solid rgb(238, 238, 238)",
                padding: "16px 20px",
                marginBottom: "40px",
              }}
            >
              <Typography variant="h5">Program</Typography>

              <Box
                sx={{
                  borderBottom: "2px solid rgb(17, 182, 122)",
                  width: "50px",
                  marginBottom: "20px",
                }}
              />

              <FormGroup>
                {programs.map((program, index) => (
                  <Box key={index}>
                    <FormControlLabel
                      sx={{
                        borderTop: "1px dashed rgb(221, 221, 221)",
                        padding: "10px 0px",
                        color: "rgb(150, 150, 150)",
                      }}
                      control={<Checkbox size="small" />}
                      label={program.name}
                    />
                  </Box>
                ))}
              </FormGroup>
            </Box>
            <Box
              sx={{
                border: "1px solid rgb(238, 238, 238)",
                padding: "16px 20px",
              }}
            >
              <Typography variant="h5">Days Study</Typography>

              <Box
                sx={{
                  borderBottom: "2px solid rgb(17, 182, 122)",
                  width: "50px",
                  marginBottom: "20px",
                }}
              />

              <FormGroup>
                {daysOfWeek.map((day, index) => (
                  <Box key={index}>
                    <FormControlLabel
                      sx={{
                        borderTop: "1px dashed rgb(221, 221, 221)",
                        padding: "10px 0px",
                        color: "rgb(150, 150, 150)",
                        width: "100%",
                      }}
                      control={<Checkbox size="small" />}
                      label={day}
                    />
                  </Box>
                ))}
              </FormGroup>
            </Box>
          </Grid>
          <Grid item xs={8}>
            <Box>
              {list.map((classData: Class, index: number) => (
                <TraineClassEnrollDetailCardCp
                  key={index}
                  classData={classData}
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

export default TraineeClassListToEnrollCp;

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
