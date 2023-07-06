import {
  Autocomplete,
  Box,
  Button,
  Card,
  CardContent,
  Checkbox,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Divider,
  FormControlLabel,
  Grid,
  IconButton,
  InputLabel,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import dayjs, { Dayjs } from "dayjs";
import React, {
  ChangeEventHandler,
  ReactNode,
  createContext,
  useCallback,
  useEffect,
  useState,
} from "react";
import ClassAddFormPopup from "./ClassAddFormPopup";
import TodoGeneralTimeList from "./ClassAddTodoGeneralTimeList";
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
import { ErrorItem, GeneralSchedule } from "../../utils/constant";
import { formatGeneralSchedule } from "../../utils/formatDay";
import { GridRowSelectionModel } from "@mui/x-data-grid";
import { useForm, SubmitHandler } from "react-hook-form";
import classApi from "../../api/classApi";
import { useNavigate } from "react-router-dom";
import { Overlap } from "../../models/classManagementModel";
import { create } from "domain";

const ClassAddForm: React.FC = () => {
  const createClassData: CreateClassFormData = useSelector(
    (state: RootState) => state.program.createClassData
  );
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const {
    register,
    control,
    trigger,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();
  const minQuantity = watch("minQuantity");
  const maxQuantity = watch("maxQuantity");

  const [selectedCourse, setSelectedCourse] = useState<Program | null>(null);
  const [selectedTrainer, setselectedTrainer] = useState<Trainer | null>(null);
  const [selectedCycle, setSelectedCyle] = useState<Cycle | null>(null);
  const [selectCard, setSelectedCard] = useState<any | null>(null);
  const [selectStartDate, setSelectedStartDate] = useState<Dayjs | null>();
  const [selectEndDate, setSelectedEndDate] = useState<Dayjs>();
  const [selectQuantity, setSelectedQuantity] = useState<string>("");
  const [seletcMaxQuantity, setMaxQuantity] = useState<string>("");
  const [seletcMinQuantity, setMinQuantity] = useState<string>("");
  const [generalSchedules, setGeneralSchedules] = useState<GeneralSchedule[]>(
    []
  );
  const [selectClassName, setSelectClassName] = useState<string>("");
  const [selectRoom, setSelectRoom] = useState<string>("");

  const [selectTraineeList, setSelectTraineeList] =
    useState<GridRowSelectionModel>([]);
  const [warning, setWarning] = useState<string>("");
  const [open, setOpen] = useState(false);

  const [listOverlap, setListOverlap] = useState<Overlap[]>([]);
  const [openWarningOverlap, setOpenWarningOverlap] = useState(false);
  const [overlapErrors, setOverlapErrors] = useState<ErrorItem[]>([]);

  const handleOpenDialogOverlap = () => {
    setOpenWarningOverlap(true);
  };

  const handleCloseDialogOverlap = () => {
    setOpenWarningOverlap(false);
  };

  const handleClassName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectClassName(event.target.value);
  };

  const handleRoom = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectRoom(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleCourseChange = (
    event: React.ChangeEvent<{}>,
    value: Program | null
  ) => {
    setSelectedCourse(value);
    setSelectedCard(value);
    // setSelectedQuantity(value?.maxQuantity.toString() || "");
  };

  const handleQuantityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedQuantity(event.target.value);
  };

  const handleMinQuantityChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setMinQuantity(event.target.value);
  };

  const handleMaxQuantityChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setMaxQuantity(event.target.value);
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

  const handleCheckForm = async () => {
    const isValid = await trigger();
    if (isValid) {
      if (selectTraineeList.length >= parseInt(selectQuantity)) {
        setWarning("The number of students exceeds the allowable limit");
      } else if (selectTraineeList.length < selectedCourse?.minQuantity!) {
        setWarning("The number of students is not enough");
      } else {
        setWarning("");
      }
      setOpen(true);
    } else {
      // Form is not valid, handle the validation errors
      console.log("Form validation failed");
    }
  };

  //
  const handlePostData = async () => {
    const params = {
      name: selectClassName,
      generalSchedule: formatGeneralSchedule(generalSchedules),
      departmentId: selectedCourse?.department?.id,
      trainerId: selectedTrainer?.id,
      programId: selectedCourse?.id,
      // roomId: "b49d2b9c-d8a1-473d-bafe-2207f62a034b",
      cycleId: selectedCycle?.id,
      quantity: selectTraineeList.length,
      minQuantity: seletcMinQuantity,
      maxQuantity: seletcMaxQuantity,
      startDate: selectStartDate?.format("YYYY-MM-DD"),
      endDate: selectEndDate?.format("YYYY-MM-DD"),
      traineeIds: selectTraineeList,
    };
    try {
      console.log(params);
      const response = await classApi.create(params);
      const { data, status } = response;
      console.log(data);

      if (status === 201) {
        if (data.overlappedSchedules === null) {
          // console.log("Post request successful:", response.data);
          navigate("/class-management");
        } else {
          setListOverlap(data.overlappedSchedules);
          createError(data.overlappedSchedules);
          handleClose();
          handleOpenDialogOverlap();
        }
      }
    } catch (error) {
      console.error("Error posting data:", error);
    }
  };

  const createError = (overlappedSchedules: any[]) => {
    const { trainers } = createClassData;

    var listError: ErrorItem[] = [];

    overlappedSchedules.forEach((e) => {
      // if (trainers.find((t) => t.id === e.id) !== null) {
      //   const errorItem: ErrorItem = {
      //     email:
      //       trainers.find((t) => t.id === e.id)!.name +
      //       " (" +
      //       trainers.find((t) => t.id === e.id)!.code +
      //       ")",
      //     overlappedDayTimes: [...e.overlappedDayTimes],
      //   };
      //   listError.push(errorItem);
      //   setOverlapErrors([...listError]);
      // }
      const errorItem: ErrorItem = {
        id: e.id,
        email: e.name + " (" + e.code + ")",
        overlappedDayTimes: [...e.overlappedDayTimes],
      };
      listError.push(errorItem);
      setOverlapErrors([...listError]);
    });
  };

  console.log(overlapErrors);

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
                    value={dayjs(selectedTrainer?.birthdate).format(
                      "DD-MM-YYYY"
                    )}
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
      <form>
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
                  renderInput={(params) => (
                    <TextField
                      {...register("program", { required: true })}
                      error={errors.program ? true : false}
                      helperText={errors.program && "This field is required"}
                      {...params}
                    />
                  )}
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
                    selectedCourse != null
                      ? selectedCourse.department?.name
                      : ""
                  }
                  InputProps={{
                    readOnly: true,
                  }}
                  fullWidth
                />
              </Grid>
              {selectedCourse != null ? (
                <Grid item xs={12} sm={5}>
                  {selectedCourse && (
                    <p>Code name: {selectedCourse.department?.code}</p>
                  )}
                </Grid>
              ) : (
                <div></div>
              )}

              {/* Class name */}
              <Grid item xs={12} sm={2}>
                <InputLabel>Class name*</InputLabel>
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
                  {...register("className", { required: true })}
                  error={errors.className ? true : false}
                  helperText={errors.className && "This field is required"}
                  value={selectClassName}
                  onChange={handleClassName}
                  fullWidth
                />
              </Grid>
              {/* Room */}
              {/* <Grid item xs={12} sm={2}>
                <InputLabel>Room*</InputLabel>
              </Grid>
              <Grid item xs={12} sm={9}>
              
                <TextField
                  {...register("room", { required: true })}
                  error={errors.room ? true : false}
                  helperText={errors.room && "This field is required"}
                  value={selectRoom}
                  onChange={handleRoom}
                  fullWidth
                />
              </Grid> */}

              {/* Trainer */}
              <Grid item xs={12} sm={2}>
                <InputLabel>Trainer*</InputLabel>
              </Grid>
              <Grid item xs={12} sm={selectedTrainer != null ? 5 : 9}>
                <Autocomplete
                  options={createClassData.trainers}
                  getOptionLabel={(option) => option.name}
                  renderInput={(params) => (
                    <TextField
                      {...register("trainer", { required: true })}
                      error={errors.trainer ? true : false}
                      helperText={errors.trainer && "This field is required"}
                      {...params}
                    />
                  )}
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
                <InputLabel>Cycle*</InputLabel>
              </Grid>
              <Grid item xs={12} sm={selectedCycle != null ? 5 : 9}>
                <Autocomplete
                  options={createClassData.cycles}
                  getOptionLabel={(option) => option.name}
                  renderInput={(params) => (
                    <TextField
                      {...register("cycle", { required: true })}
                      error={errors.cycle ? true : false}
                      helperText={errors.cycle && "This field is required"}
                      {...params}
                    />
                  )}
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
                          id="minQuantity"
                          label="Min"
                          size="medium"
                          autoComplete="off"
                          variant="outlined"
                          sx={{ float: "right" }}
                          inputProps={{
                            style: { textAlign: "right" },
                          }}
                          {...register("minQuantity", {
                            required: "This field is required",
                            valueAsNumber: true,
                            validate: {
                              greaterThanZero: (value) => value > 0,
                              lessThanMaxQuantity: (value) =>
                                value < watch("maxQuantity"),
                            },
                          })}
                          error={!!errors.minQuantity}
                          helperText={
                            errors.minQuantity &&
                            (errors.minQuantity.message as ReactNode)
                          }
                          value={seletcMinQuantity}
                          onChange={handleMinQuantityChange}
                        />
                      </Grid>

                      <Grid item xs={12} sm={2}></Grid>
                      <Grid item sm={3}>
                        <TextField
                          id="maxQuantity"
                          label="Max"
                          size="medium"
                          autoComplete="off"
                          variant="outlined"
                          sx={{ float: "right" }}
                          inputProps={{
                            style: { textAlign: "right" },
                          }}
                          {...register("maxQuantity", {
                            required: "This field is required",
                            valueAsNumber: true,
                            validate: {
                              greaterThanZero: (value) => value > 0,
                              greaterThanMinQuantity: (value) =>
                                value > watch("minQuantity"),
                            },
                          })}
                          error={!!errors.maxQuantity}
                          helperText={
                            errors.maxQuantity &&
                            (errors.maxQuantity.message as ReactNode)
                          }
                          value={seletcMaxQuantity}
                          onChange={handleMaxQuantityChange}
                        />
                      </Grid>

                      <Grid item sm={4}></Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              {/* List trainee */}
              <Grid item xs={12} sm={2}>
                <InputLabel>Enroll trainee</InputLabel>
              </Grid>
              <Grid item xs={12} sm={5}>
                <ClassAddFormPopup
                  setSelectTraineeList={setSelectTraineeList}
                  selectTraineeList={selectTraineeList}
                  overlapErrors={overlapErrors.map(e => e.id)}
                  overlapErrorsDescription={overlapErrors}
                />
              </Grid>
              <Grid item xs={12} sm={5}>
                Trainee quantity:{" "}
                {selectTraineeList.length > 0 ? selectTraineeList.length : 0} /{" "}
                {seletcMaxQuantity.length === 0 ? "max" : seletcMaxQuantity}
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
                      format="DD-MM-YYYY"
                      value={selectStartDate}
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
                      format="DD-MM-YYYY"
                      value={selectEndDate}
                      readOnly
                    />
                  </Grid>
                </Grid>
              </Grid>

              {/* Due time */}
              <Grid item xs={12} sm={2}>
                <InputLabel>General time*</InputLabel>
              </Grid>
              <Grid item xs={12} sm={10}>
                <TodoGeneralTimeList
                  generalSchedules={generalSchedules}
                  setGeneralSchedules={setGeneralSchedules}
                  control={control}
                  errors={errors}
                  register={register}
                />
              </Grid>

              {/* Button */}
              <Grid
                item
                xs={12}
                sx={{ display: "flex", justifyContent: "space-evenly" }}
              >
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "#000",
                  }}
                  // onClick={handlePostData}
                >
                  Cancel
                </Button>
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "#000",
                  }}
                  onClick={handleSubmit(handleCheckForm)}
                >
                  Create
                </Button>
                {/* <ClassAddFormPopup /> */}
              </Grid>
            </Grid>
          </Grid>
          <CardInformation />
        </Grid>
      </form>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {warning !== "" ? "Warning" : "Do you want to create?"}
        </DialogTitle>
        <DialogContent>{warning.toUpperCase()}</DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Disagree</Button>
          <Button onClick={handlePostData} autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog
        open={openWarningOverlap}
        onClose={handleCloseDialogOverlap}
        fullWidth
        maxWidth="md"
      >
        <div style={styles.dialogWrapper}>
          <DialogTitle sx={styles.dialogTitle}>Warning</DialogTitle>
          <DialogContent sx={styles.dialogContent}>
            <div style={styles.dialogContentScrollable}>
              {overlapErrors.map((overlap) => (
                <div key={overlap.id}>
                  <p style={styles.email}>Name: {overlap.email}</p>
                  <p style={styles.overlappedTimes}>Overlapped Day Times:</p>
                  <ul style={styles.overlappedList}>
                    {overlap.overlappedDayTimes.map((dayTime, index) => (
                      <li key={index} style={styles.overlappedListItem}>
                        {dayTime}
                      </li>
                    ))}
                  </ul>
                  <Divider sx={styles.divider} />
                </div>
              ))}
            </div>
          </DialogContent>
          <DialogActions sx={styles.dialogActions}>
            <Button
              onClick={handleCloseDialogOverlap}
              autoFocus
              variant="contained"
              color="primary"
            >
              Okay
            </Button>
          </DialogActions>
        </div>
      </Dialog>
    </Box>
  );
};

export default ClassAddForm;


const styles = {
  dialogWrapper: {
    backgroundColor: "#f2f2f2",
    padding: "20px",
    borderRadius: "4px",
    boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.2)",
  },
  dialogTitle: {
    backgroundColor: "#e0e0e0",
    fontSize: "20px",
    padding: "10px",
    textAlign: "center",
    color: "#333",
    fontWeight: "bold",
  },
  dialogContent: {
    margin: "20px 0",
    padding: "20px", // Increase padding as desired
    backgroundColor: "#fff",
    height: "300px", // Set desired height for scrollable content
    overflow: "auto", // Enable scrollbar when content exceeds height
  },
  dialogContentScrollable: {
    padding: "0",
  },
  email: {
    fontWeight: "bold",
    paddingBottom: "5px",
  },
  overlappedTimes: {
    fontStyle: "italic",
    paddingBottom: "5px",
  },
  overlappedList: {
    margin: "10px 0",
    padding: "0",
    listStyleType: "disc",
    fontSize: "14px",
  },
  overlappedListItem: {
    marginBottom: "8px",
  },
  divider: {
    margin: "16px 0",
    backgroundColor: "#e0e0e0",
  },
  dialogActions: {
    marginTop: "20px",
    padding: "10px",
    display: "flex",
    justifyContent: "flex-end",
    gap: "10px",
  },
};
