import {
  Autocomplete,
  Box,
  Button,
  Card,
  CardContent,
  Checkbox,
  FormControlLabel,
  Grid,
  IconButton,
  InputLabel,
  TextField,
  Typography,
} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import dayjs, { Dayjs } from "dayjs";
import React, { useCallback, useEffect, useState } from "react";
import ClassAddFormPopup from "./ClassAddFormPopup";
import TodoGeneralTimeList from "./ClassAddTodoGeneralTimeList";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../reduxs/Root";
import {
  CreateClassFormData,
  Cycle,
  Program,
  Trainer,
} from "../../models/programAddModel";
import {
  fetchCreateClassDataRequest,
  fetchCreateClassDataSuccess,
} from "../../actions/programAction";
import programApi from "../../api/programApi";

const ClassAddForm: React.FC = () => {
  const createClassData: CreateClassFormData = useSelector(
    (state: RootState) => state.program.createClassData
  );
  const dispatch = useDispatch();

  const [selectedCourse, setSelectedCourse] = useState<Program | null>(null);
  const [selectedTrainer, setselectedTrainer] = useState<Trainer | null>(null);
  const [selectedCycle, setSelectedCyle] = useState<Cycle | null>(null);
  const [selectCard, setSelectedCard] = useState<any | null>(null);
  const [selectStartDate, setSelectedStartDate] = useState<Dayjs | null>(null);
  const [selectEndDate, setSelectedEndDate] = useState<Dayjs>();

  const handleCourseChange = (
    event: React.ChangeEvent<{}>,
    value: Program | null
  ) => {
    setSelectedCourse(value);
    setSelectedCard(value);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setSelectedCourse((prevCourse: Program | null) => ({
      ...(prevCourse as Program),
      [name]: value,
    }));
  };

  const handleTrainerChange = (
    event: React.ChangeEvent<{}>,
    value: Trainer | null
  ) => {
    setselectedTrainer(value);
    setSelectedCard(value);
  };

  const handleCycleChange = (
    event: React.ChangeEvent<{}>,
    value: Cycle | null
  ) => {
    setSelectedCyle(value);
    setSelectedCard(value);
    setSelectedStartDate(dayjs());
    setSelectedEndDate(dayjs().add(value?.duration as number, "month"));
  };

  const handleStartDateChange = (date: Dayjs | null) => {
    setSelectedStartDate(date);
    setSelectedEndDate(date?.add(selectedCycle?.duration as number, "month"));
  };

  const fetchCreateClassDataForm = useCallback(async () => {
    try {
      dispatch(fetchCreateClassDataRequest());
      programApi
        // .getProgramContent(programId!, trainerId!)
        .getCreateClassForm()
        .then((response) => {
          const createClassData = response.data;
          dispatch(fetchCreateClassDataSuccess(createClassData));
          // console.log(createClassData);
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (error) {
      console.log(error);
    }
  }, [dispatch]);

  useEffect(() => {
    fetchCreateClassDataForm();
  }, [fetchCreateClassDataForm]);

  function CardInformation() {
    if (selectCard != null) {
      switch (selectCard) {
        case selectedCourse: {
          return (
            <Grid item xs={3}>
              <Card
                sx={{
                  height: "100%",
                  maxHeight: 500,
                }}
              >
                <CardContent>
                  <Typography variant="h6">Program</Typography>
                  <TextField
                    name="code"
                    label="Code"
                    value={selectedCourse?.code}
                    onChange={handleInputChange}
                    fullWidth
                    InputProps={{
                      readOnly: true,
                    }}
                    sx={{ marginBottom: "1rem" }}
                  />
                  <TextField
                    name="name"
                    label="Name"
                    value={selectedCourse?.name}
                    onChange={handleInputChange}
                    fullWidth
                    InputProps={{
                      readOnly: true,
                    }}
                    sx={{ marginBottom: "1rem" }}
                  />
                  <TextField
                    name="Department Code"
                    label="Department Code"
                    value={selectedCourse?.department?.code}
                    onChange={handleInputChange}
                    fullWidth
                    InputProps={{
                      readOnly: true,
                    }}
                    sx={{ marginBottom: "1rem" }}
                  />
                  <TextField
                    name="department"
                    label="Department"
                    value={selectedCourse?.department?.name}
                    onChange={handleInputChange}
                    fullWidth
                    InputProps={{
                      readOnly: true,
                    }}
                    sx={{ marginBottom: "1rem" }}
                  />
                  <TextField
                    name="description"
                    label="Description"
                    value={selectedCourse?.description}
                    onChange={handleInputChange}
                    fullWidth
                    multiline
                    rows={4}
                    InputProps={{
                      readOnly: true,
                    }}
                    sx={{ marginBottom: "1rem" }}
                  />
                </CardContent>
              </Card>
            </Grid>
          );
        }
        case selectedTrainer: {
          return (
            <Grid item xs={3}>
              <Card
                sx={{
                  height: "100%",
                  maxHeight: 500,
                }}
              >
                <CardContent>
                  <Typography variant="h6">Trainer</Typography>
                  <TextField
                    name="code"
                    label="Code"
                    value={selectedTrainer?.code}
                    fullWidth
                    InputProps={{
                      readOnly: true,
                    }}
                    sx={{ marginBottom: "1rem" }}
                  />
                  <TextField
                    name="name"
                    label="Name"
                    value={selectedTrainer?.name}
                    fullWidth
                    InputProps={{
                      readOnly: true,
                    }}
                    sx={{ marginBottom: "1rem" }}
                  />
                  <TextField
                    name="birthdate"
                    label="BirthDate"
                    value={selectedTrainer?.birthdate}
                    fullWidth
                    InputProps={{
                      readOnly: true,
                    }}
                    sx={{ marginBottom: "1rem" }}
                  />
                  <TextField
                    name="phone"
                    label="Phone"
                    value={selectedTrainer?.phone}
                    onChange={handleInputChange}
                    fullWidth
                    InputProps={{
                      readOnly: true,
                    }}
                    sx={{ marginBottom: "1rem" }}
                  />
                </CardContent>
              </Card>
            </Grid>
          );
        }
        case selectedCycle: {
          return (
            <Grid item xs={3}>
              <Card
                sx={{
                  height: "100%",
                  maxHeight: 500,
                }}
              >
                <CardContent>
                  <Typography variant="h6">Cycle</Typography>
                  <TextField
                    name="name"
                    label="Name"
                    value={selectedCycle?.name}
                    onChange={handleInputChange}
                    fullWidth
                    InputProps={{
                      readOnly: true,
                    }}
                    sx={{ marginBottom: "1rem" }}
                  />
                  <TextField
                    name="duration"
                    label="Duration"
                    value={selectedCycle?.duration}
                    onChange={handleInputChange}
                    fullWidth
                    InputProps={{
                      readOnly: true,
                    }}
                    sx={{ marginBottom: "1rem" }}
                  />

                  <TextField
                    name="description"
                    label="Description"
                    value={selectedCycle?.description}
                    onChange={handleInputChange}
                    fullWidth
                    multiline
                    rows={4}
                    InputProps={{
                      readOnly: true,
                    }}
                    sx={{ marginBottom: "1rem" }}
                  />
                </CardContent>
              </Card>
            </Grid>
          );
        }
        default:
          return <></>;
      }
    }
    return <></>;
  }

  return (
    <Box sx={{ padding: 5 }}>
      <Grid container columnSpacing={2}>
        <Grid
          item
          xs={9}
          sx={{ backgroundColor: "white", borderRadius: "5px" }}
        >
          <Grid
            container
            spacing={3}
            sx={{
              padding: "32px",
            }}
          >
            <Grid item xs={12} sm={2}>
              <InputLabel>Program*</InputLabel>
            </Grid>
            <Grid item xs={12} sm={selectedCourse != null ? 5 : 9}>
              <Autocomplete
                options={createClassData.programs}
                getOptionLabel={(option) => option.name}
                renderInput={(params) => <TextField {...params} />}
                value={selectedCourse}
                onChange={handleCourseChange}
                fullWidth
              />
            </Grid>
            {selectedCourse != null ? (
              <Grid item xs={12} sm={5}>
                {selectedCourse && <p>Code name: {selectedCourse.code}</p>}
              </Grid>
            ) : (
              <div></div>
            )}

            {/* Department */}
            <Grid item xs={12} sm={2}>
              <InputLabel>Department</InputLabel>
            </Grid>

            <Grid item xs={12} sm={selectedCourse != null ? 5 : 9}>
              <TextField
                // id="filled-read-only-input"
                value={
                  selectedCourse != null ? selectedCourse.department?.name : ""
                }
                InputProps={{
                  readOnly: true,
                }}
                fullWidth
              />
            </Grid>
            {selectedCourse != null ? (
              <Grid item xs={12} sm={5}>
                {selectedCourse && <p>Code name: {selectedCourse.department?.code}</p>}
              </Grid>
            ) : (
              <div></div>
            )}

            {/* Department */}
            <Grid item xs={12} sm={2}>
              <InputLabel>Class name</InputLabel>
            </Grid>
            <Grid item xs={12} sm={9}>
              {/* <Autocomplete
                        readOnly={true}
                      options={top100Films}
                      renderInput={(params) => (
                        <TextField {...params} label="Department" fullWidth />
                      )}
                      fullWidth
                    /> */}
              <TextField
                // id="filled-read-only-input"

                fullWidth
              />
            </Grid>

            {/* Trainer */}
            <Grid item xs={12} sm={2}>
              <InputLabel>Trainer</InputLabel>
            </Grid>
            <Grid item xs={12} sm={selectedTrainer != null ? 5 : 9}>
              <Autocomplete
                options={createClassData.trainers}
                getOptionLabel={(option) => option.name}
                renderInput={(params) => <TextField {...params} />}
                value={selectedTrainer}
                onChange={handleTrainerChange}
                fullWidth
              />
            </Grid>
            {selectedTrainer != null ? (
              <Grid item xs={12} sm={5}>
                {selectedTrainer && <p>Code name: {selectedTrainer.code}</p>}
              </Grid>
            ) : (
              <div></div>
            )}

            {/* Cycle */}
            <Grid item xs={12} sm={2}>
              <InputLabel>Cycle</InputLabel>
            </Grid>
            <Grid item xs={12} sm={selectedCycle != null ? 5 : 9}>
              <Autocomplete
                options={createClassData.cycles}
                getOptionLabel={(option) => option.name}
                renderInput={(params) => <TextField {...params} />}
                value={selectedCycle}
                onChange={handleCycleChange}
                fullWidth
              />
            </Grid>
            {selectedCycle != null ? (
              <Grid item xs={12} sm={5}>
                {selectedCycle && (
                  <p>Duration: {selectedCycle.duration} tháng</p>
                )}
              </Grid>
            ) : (
              <div></div>
            )}

            {/* QUANTITY */}
            <Grid item xs={12} sm={2}>
              <InputLabel>Quantity</InputLabel>
            </Grid>
            <Grid item xs={12} sm={10}>
              <Grid container>
                <Grid item sm={12}>
                  <Grid container>
                    <Grid item sm={3}>
                      <TextField
                        id="quantity"
                        name="quantity"
                        label="Min"
                        // fullWidth
                        size="medium"
                        autoComplete="off"
                        variant="outlined"
                        sx={{ float: "right" }}
                        inputProps={{
                          style: { textAlign: "right" },
                        }}
                        value={
                          selectedCourse != null
                            ? selectedCourse.minQuantity
                            : ""
                        }
                      />
                    </Grid>

                    <Grid item xs={12} sm={2}></Grid>
                    <Grid item sm={3}>
                      <TextField
                        id="quantity"
                        name="quantity"
                        label="Max"
                        // fullWidth
                        size="medium"
                        autoComplete="off"
                        variant="outlined"
                        sx={{ float: "right" }}
                        inputProps={{
                          style: { textAlign: "right" },
                        }}
                        value={
                          selectedCourse != null
                            ? selectedCourse.maxQuantity
                            : ""
                        }
                      />
                    </Grid>

                    <Grid item sm={4}>
                      {/* <IconButton
                      color="secondary"
                      aria-label="add an alarm"
                      onClick={handleClickOpen}
                    >
                      <VisibilityIcon
                        sx={{
                          paddingLeft: "5px",
                          display: "flex",
                          justifyContent: "start",
                          alignItems: "center",
                          height: "100%",
                        }}
                      />
                    </IconButton> */}
                    </Grid>
                  </Grid>
                </Grid>

                {/* <Grid item sm={1}>
                  to
                </Grid> */}

                {/* <Grid item sm={4}>
                  <Grid container>
                    
                  </Grid>
                </Grid> */}
              </Grid>
            </Grid>

            {/* Due time */}
            <Grid item xs={12} sm={2}>
              <InputLabel

              // sx={{
              //   display: "flex",
              //   justifyContent: "center",
              //   fontWeight: 700,
              // }}
              >
                Enrol method
              </InputLabel>
            </Grid>
            <Grid item xs={12} sm={10}>
              <ClassAddFormPopup />
            </Grid>

            {/* Start date */}
            <Grid item xs={12} sm={2}>
              <InputLabel>Start date</InputLabel>
            </Grid>
            <Grid item xs={12} sm={10}>
              <Grid container>
                <Grid item sm={5}>
                  <DatePicker
                    sx={{
                      width: "100%",
                    }}
                    value={selectStartDate || null}
                    onChange={handleStartDateChange}
                  />
                </Grid>
                <Grid item sm={1}>
                  <InputLabel
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      fontWeight: 700,
                      //   float: "right",
                    }}
                  >
                    to
                  </InputLabel>
                </Grid>

                <Grid item sm={5}>
                  <DatePicker
                    sx={{
                      width: "100%",
                    }}
                    value={selectEndDate}
                    readOnly
                  />
                </Grid>
              </Grid>
            </Grid>

            {/* Due time */}
            <Grid item xs={12} sm={2}>
              <InputLabel>General time</InputLabel>
            </Grid>
            <Grid item xs={12} sm={10}>
              <TodoGeneralTimeList />
            </Grid>

            {/* Button */}
            <Grid
              item
              xs={12}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#000",
                }}
              >
                Create
              </Button>
              {/* <ClassAddFormPopup /> */}
            </Grid>
          </Grid>
        </Grid>
        <CardInformation />
        {/* {
        selectedCourse && (
          <Grid item xs={3}>
            <Card
              sx={{
                height: "100%",
                maxHeight: 500,
              }}
            >
              <CardContent>
                <Typography variant="h6">{selectedCourse.name}</Typography>
                <TextField
                  name="code"
                  label="Code"
                  value={selectedCourse.code}
                  onChange={handleInputChange}
                  fullWidth
                  InputProps={{
                    readOnly: true,
                  }}
                  sx={{ marginBottom: "1rem" }}
                />
                <TextField
                  name="Department Code"
                  label="Department Code"
                  value={selectedCourse.department?.code}
                  onChange={handleInputChange}
                  fullWidth
                  InputProps={{
                    readOnly: true,
                  }}
                  sx={{ marginBottom: "1rem" }}
                />
                <TextField
                  name="department"
                  label="Department"
                  value={selectedCourse.department?.name}
                  onChange={handleInputChange}
                  fullWidth
                  InputProps={{
                    readOnly: true,
                  }}
                  sx={{ marginBottom: "1rem" }}
                />
                <TextField
                  name="description"
                  label="Description"
                  value={selectedCourse.description}
                  onChange={handleInputChange}
                  fullWidth
                  multiline
                  rows={4}
                  InputProps={{
                    readOnly: true,
                  }}
                  sx={{ marginBottom: "1rem" }}
                />
              </CardContent>
            </Card>
          </Grid>
        )
        } */}
      </Grid>
    </Box>
  );
};

// interface Trainer {
//   label: string;
// }

// const trainer: Trainer[] = [
//   { label: "Pham Van A" },
//   { label: "Nguyen Van B" },
//   { label: "Tran Thi C" },
// ];

const top100Films = [
  { label: "The Shawshank Redemption", year: 1994 },
  { label: "The Godfather", year: 1972 },
  { label: "The Godfather: Part II", year: 1974 },
  { label: "The Dark Knight", year: 2008 },
  { label: "12 Angry Men", year: 1957 },
  { label: "Schindler's List", year: 1993 },
  { label: "Pulp Fiction", year: 1994 },
  {
    label: "The Lord of the Rings: The Return of the King",
    year: 2003,
  },
];

export default ClassAddForm;
