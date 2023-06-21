import {
  AppBar,
  Box,
  Button,
  Dialog,
  Grid,
  IconButton,
  Slide,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";
import Header from "../layoutComponents/Header";
import Footer from "../layoutComponents/Footer";
import { useParams } from "react-router-dom";
import VisibilityIcon from "@mui/icons-material/Visibility";
// import { Link } from "react-router-dom";
import classApi from "../../api/classApi";
import { fetchClassDetail } from "../../actions/classAction";
import { Class } from "../../models/classManagementModel";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../reduxs/Root";
import CloseIcon from "@mui/icons-material/Close";
import { TransitionProps } from "@mui/material/transitions";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import { Trainee } from "../../models/traineeModel";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const ClassDetailCp: React.FC = () => {
  const getClassDetail: Class = useSelector(
    (state: RootState) => state.class.class
  );
  // const getListTrainee: Array<Trainee> = useSelector(
  //   (state: RootState) => state.class
  // );
  const dispatch = useDispatch();

  const ClassId = useParams();
  console.log("ClassID >>> ", ClassId.id);

  const fetchClassDetailApi = React.useCallback(async () => {
    try {
      const param = {
        // id: ClassId.id,
      };
      const response = await classApi.getbyId(param, ClassId.id);
      console.log("Resp>>>> ", response.data);
      const action = fetchClassDetail(response.data);
      dispatch(action);
    } catch (error) {
      console.log(error);
    }
  }, [dispatch, ClassId]);

  React.useEffect(() => {
    fetchClassDetailApi();
  }, [fetchClassDetailApi]);

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  function parseScheduleString(scheduleString: string) {
    const scheduleArray = scheduleString.split(";"); // Split the string by ";"
    const schedule = [];

    for (let i = 0; i < scheduleArray.length; i++) {
      const entry = scheduleArray[i].trim(); // Remove leading/trailing spaces

      if (entry.startsWith("Start")) {
        const [, startTime, startDay] =
          entry.match(/Start{([^,]+),([^}]+)}/) || []; // Extract startTime and startDay using regex
        if (startTime && startDay) {
          const stopEntry = scheduleArray[i + 1]?.trim(); // Get the next entry (Stop)
          if (stopEntry && stopEntry.startsWith("Stop")) {
            const [, stopTime, endDay] =
              stopEntry.match(/Stop{([^,]+),([^}]+)}/) || []; // Extract stopTime and endDay using regex
            if (stopTime && endDay) {
              schedule.push({
                startTime,
                endTime: stopTime,
                endDay,
              });
            }
          }
        }
      }
    }

    return schedule;
  }

  const scheduleString = getClassDetail.generalSchedule;
  const schedule = parseScheduleString(scheduleString);


  return (
    <Box>
      <Header title="Class CCL21 details" imageUrl="" />
      <Box
        sx={{
          padding: "5px",
          width: "97%",
          marginTop: "5px",
          marginLeft: "auto",
          marginRight: "auto",
          backgroundColor: "#FFFFFF",
          marginBottom: "10px",
          minHeight: "100vh",
          maxHeight: "fit-content",
          borderRadius: "5px",
        }}
      >
        <Grid
          container
          sx={{
            padding: "5px",
            width: "98%",
            marginTop: "5px",
            marginLeft: "auto",
            marginRight: "auto",
            backgroundColor: "#E6E6E6",
            marginBottom: "10px",
            minHeight: "100vh",
            maxHeight: "fit-content",
            borderRadius: "5px",
          }}
        >
          <Grid item xs={7}>
            <Grid
              container
              direction="row"
              sx={{
                minHeight: "400px",
                maxHeight: "fit-content",
              }}
            >
              <Grid
                container
                direction="column"
                rowGap={2}
                sx={{
                  fontSize: "23px",
                  margin: "5px",
                  padding: "5px",
                  borderRadius: "5px",
                  minHeight: "400px",
                  maxHeight: "fit-content",
                  "@media (max-width: 1000px)": {
                    fontSize: "17px",
                  },
                }}
              >
                <Grid item container direction="row">
                  <Grid item xs={3}>
                    <strong>Course:</strong>
                  </Grid>
                  <Grid
                    item
                    xs={5}
                    sx={{
                      textAlign: "center",
                      backgroundColor: "white",
                    }}
                  >
                    {getClassDetail.name}
                  </Grid>
                  <Grid
                    item
                    xs={4}
                    sx={{
                      textAlign: "center",
                    }}
                  >
                    Code: {getClassDetail.code}
                  </Grid>
                </Grid>

                <Grid item container direction="row">
                  <Grid item xs={3}>
                    <strong>Location:</strong>
                  </Grid>
                  <Grid
                    item
                    xs={9}
                    sx={{
                      textAlign: "center",
                    }}
                  >
                    {getClassDetail.program.department?.name}
                  </Grid>
                </Grid>
                <Grid item container direction="row">
                  <Grid
                    item
                    xs={3}
                    sx={{
                      alignItems: "center",
                    }}
                  >
                    <strong>Quantity:</strong>
                  </Grid>
                  <Grid
                    item
                    xs={3}
                    sx={{
                      textAlign: "center",
                      backgroundColor: "white",
                    }}
                  >
                    {getClassDetail.traineeList.length}/
                    <strong>{getClassDetail.program.maxQuantity}</strong>
                  </Grid>
                  <Grid item xs={6}>
                    {getClassDetail.traineeList.length === 0 ? (
                      <IconButton
                        disabled
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
                      </IconButton>
                    ) : (
                      <IconButton
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
                      </IconButton>
                    )}
                  </Grid>
                  <Box>
                    <Dialog
                      fullScreen
                      open={open}
                      onClose={handleClose}
                      TransitionComponent={Transition}
                    >
                      <AppBar sx={{ position: "relative" }}>
                        <Toolbar>
                          <IconButton
                            edge="start"
                            color="inherit"
                            onClick={handleClose}
                            aria-label="close"
                          >
                            <CloseIcon />
                          </IconButton>
                          <Typography sx={{ ml: 2, flex: 1 }} variant="h6">
                            List Trainee
                          </Typography>
                          {/* <Button
                            autoFocus
                            color="inherit"
                            onClick={handleClose}
                          >
                            save
                          </Button> */}
                        </Toolbar>
                      </AppBar>
                      <Box
                      // sx={{
                      //   width: "50%",
                      // }}
                      >
                        <DataGrid
                          rows={rows}
                          columns={columns}
                          initialState={{
                            pagination: {
                              paginationModel: { page: 0, pageSize: 10 },
                            },
                          }}
                          pageSizeOptions={[5, 10]}
                          disableRowSelectionOnClick
                          // checkboxSelection
                        />
                      </Box>
                    </Dialog>
                  </Box>
                </Grid>
                <Grid container direction="row">
                  {schedule.map((item, index) => (
                    <React.Fragment key={index}>
                      {index !== 0 && (
                        <Grid
                          item
                          xs={12}
                          sx={{
                            height: "2px",
                          }}
                        ></Grid>
                      )}
                      <Grid item xs={3}>
                        {index === 0 && <strong>Begin at:</strong>}
                      </Grid>
                      <Grid
                        item
                        xs={3}
                        sx={{ textAlign: "center", backgroundColor: "white" }}
                      >
                        {item.startTime}-{item.endDay}
                      </Grid>
                      <Grid item xs={3}>
                        {index === 0 && <strong>End at:</strong>}
                      </Grid>
                      <Grid
                        item
                        xs={3}
                        sx={{ textAlign: "center", backgroundColor: "white" }}
                      >
                        {item.endTime}-{item.endDay}
                      </Grid>
                    </React.Fragment>
                  ))}
                </Grid>

                <Grid item container direction="row">
                  <Grid item xs={3}>
                    <strong>Status:</strong>
                  </Grid>
                  <Grid
                    item
                    xs={4}
                    sx={{
                      textAlign: "center",
                      backgroundColor: "white",
                    }}
                  >
                    {getClassDetail.status}
                  </Grid>
                  <Grid item xs={5}></Grid>
                </Grid>
                <Grid item container direction="row">
                  <Grid item xs={3}>
                    <strong>Cycle:</strong>
                  </Grid>
                  <Grid
                    item
                    xs={4}
                    sx={{
                      textAlign: "center",
                      backgroundColor: "white",
                    }}
                  >
                    {getClassDetail.cycle.name}
                  </Grid>
                  <Grid item xs={5}></Grid>
                </Grid>
                <Grid
                  item
                  container
                  direction="row"
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Button variant="contained">Edit</Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={5}>
            <Box
              sx={{
                margin: "5px",
                minHeight: "400px",
                maxHeight: "fit-content",
                "@media (max-width: 1000px)": {
                  fontSize: "10px",
                },
              }}
            >
              <Box
                sx={{
                  margin: "5px",
                  backgroundColor: "white",
                  borderRadius: "5px",
                  minHeight: "400px",
                  maxHeight: "fit-content",
                }}
              >
                <strong style={{ padding: "5px", fontSize: "24px" }}>
                  {getClassDetail.code}
                </strong>
                <Box
                  sx={{
                    padding: "5px",
                    fontSize: "15px",
                  }}
                >
                  {getClassDetail.program.description}
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Footer />
    </Box>
  );
};

export default ClassDetailCp;

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "firstName", headerName: "First name", width: 130 },
  { field: "lastName", headerName: "Last name", width: 130 },
  {
    field: "age",
    headerName: "Age",
    type: "number",
    width: 90,
  },
  {
    field: "fullName",
    headerName: "Full name",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
    valueGetter: (params: GridValueGetterParams) =>
      `${params.row.firstName || ""} ${params.row.lastName || ""}`,
  },
];

const rows = [
  { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
  { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
  { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
  { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
  { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
  { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
  { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
  { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
  { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
];
