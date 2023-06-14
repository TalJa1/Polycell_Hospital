import {
  AppBar,
  Box,
  Button,
  Dialog,
  Divider,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemText,
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
                    {classDetail.course[1]}
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
                    {classDetail.department}
                  </Grid>
                </Grid>
                <Grid item container direction="row">
                  <Grid item xs={3}>
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
                    {classDetail.quantity}/
                    <strong>{classDetail.quantityMax}</strong>
                  </Grid>
                  <Grid item xs={6}>
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
                          <Typography
                            sx={{ ml: 2, flex: 1 }}
                            variant="h6"
                            component="div"
                          >
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
                <Grid item container direction="row">
                  <Grid item xs={3}>
                    <strong>Start Date:</strong>
                  </Grid>
                  <Grid
                    item
                    xs={3}
                    sx={{
                      textAlign: "center",
                      backgroundColor: "white",
                    }}
                  >
                    {getClassDetail.startDate.toString()}
                  </Grid>
                  <Grid
                    item
                    xs={3}
                    sx={{
                      textAlign: "center",
                    }}
                  >
                    <strong>End at</strong>
                  </Grid>
                  <Grid
                    item
                    xs={3}
                    sx={{
                      textAlign: "center",
                      backgroundColor: "white",
                    }}
                  >
                    {getClassDetail.endDate.toString()}
                  </Grid>
                </Grid>

                <Grid item container direction="row">
                  <Grid item xs={3}>
                    <strong>Begin at:</strong>
                  </Grid>
                  <Grid
                    item
                    xs={3}
                    sx={{
                      textAlign: "center",
                      backgroundColor: "white",
                    }}
                  >
                    {classDetail.duetimefrom}
                  </Grid>
                  <Grid
                    item
                    xs={3}
                    sx={{
                      textAlign: "center",
                    }}
                  >
                    <strong>End at</strong>
                  </Grid>
                  <Grid
                    item
                    xs={3}
                    sx={{
                      textAlign: "center",
                      backgroundColor: "white",
                    }}
                  >
                    {classDetail.duetimeto}
                  </Grid>
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
                    <strong>Slots:</strong>
                  </Grid>
                  <Grid
                    item
                    xs={4}
                    sx={{
                      textAlign: "center",
                      backgroundColor: "white",
                    }}
                  >
                    {classDetail.classdate.join(", ")}
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
                  PPG201
                </strong>
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

const classDetail = {
  course: ["PPG201", "Medical Terminology"],
  trainer: ["NVT1", "Nguyen Van Thanh"],
  department: "Department A",
  quantity: 30,
  quantityMax: 35,
  startdate: "01/01/2023",
  endate: "01/06/2023",
  duetimefrom: "07:00AM",
  duetimeto: "09:00AM",
  status: "pending",
  classdate: ["Mo", "We"],
};

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
