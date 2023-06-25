import React, { useState } from "react";
import {
  AppBar,
  Box,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  IconButton,
  Slide,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import Textarea from "@mui/joy/Textarea";
import Header from "../layoutComponents/Header";
import Footer from "../layoutComponents/Footer";
import Button from "@mui/material/Button";
import { useParams } from "react-router-dom";
import classApi from "../../api/classApi";
import { fetchClassDetail } from "../../actions/classAction";
import { useDispatch, useSelector } from "react-redux";
import { Class } from "../../models/classManagementModel";
import { RootState } from "../../reduxs/Root";
import { TransitionProps } from "@mui/material/transitions";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const ClassApprovalCp: React.FC = () => {
  const getClassDetail: Class = useSelector(
    (state: RootState) => state.class.class
  );
  const getID = useParams();
  const dispatch = useDispatch();
  const [comment, setComment] = useState<string>("");
  const [dialogAccept, setDialogAccept] = useState<boolean>(false);
  const [dialogReject, setDialogReject] = useState<boolean>(false);
  const [mess, setMess] = useState<string>("");
  const [showSuccessDialog, setShowSuccessDialog] = useState<boolean>(false);

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDialogAcceptOpen = () => {
    setDialogAccept(true);
  };

  const handleDialogAcceptedClose = () => {
    setDialogAccept(false);
  };

  const handleDialogRejectOpen = () => {
    setDialogReject(true);
  };

  const handleDialogRejectClose = () => {
    setDialogReject(false);
  };

  const handleSuccessDialogClose = () => {
    setShowSuccessDialog(false);
  };

  const fetchClassDetailApi = React.useCallback(async () => {
    try {
      const param = {};
      const response = await classApi.getbyId(param, getID.id);
      console.log("Resp>>>> ", response.data);
      const action = fetchClassDetail(response.data);
      dispatch(action);
    } catch (error) {
      console.log(error);
    }
  }, [dispatch, getID.id]);

  React.useEffect(() => {
    fetchClassDetailApi();
  }, [fetchClassDetailApi]);

  const handleCommentChange = (e: any) => {
    setComment(e.target.value);
  };

  // console.log(comment !== "");

  const handleAccept = async () => {
    if (comment !== "") {
      try {
        const params = {
          comment: comment,
          createdDate: new Date().toLocaleString("en-GB", { timeZone: "UTC" }),
          status: "REJECT",
          classId: `${getID.id}`,
        };
        console.log(params);
        const response = await classApi.aprroval(params);
        console.log("Approval Status accept >> ", response.status);
        if (response.status === 200) {
          setDialogAccept(true);
          setMess("Accept successfully");
          setShowSuccessDialog(true);
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      setDialogAccept(true);
      setMess("Accept failed");
      console.log("Fill comment first");
    }
  };

  const handleReject = async () => {
    if (comment !== "") {
      try {
        const params = {
          comment: comment,
          classId: `${getID.id}`,
        };
        const response = await classApi.reject(params);
        console.log("Approval Status reject >> ", response.status);
        if (response.status === 200) {
          setDialogReject(true);
          setMess("Reject successfully");
          setShowSuccessDialog(true);
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      setDialogReject(true);
      setMess("Reject failed");
      console.log("Fill comment first");
    }
  };

  const convertTimeString = (timeString: string): string => {
    const timeRegex =
      /Start{(\d{2}):(\d{2}),(\w+)};Stop{(\d{2}):(\d{2}),(\w+)}/g;
    let convertedString = "";

    let match;
    while ((match = timeRegex.exec(timeString)) !== null) {
      const startTime = match[1];
      const startMinutes = match[2];
      const startDay = match[3];
      const endTime = match[4];
      const endMinutes = match[5];
      const endDay = match[6];

      const formatTime = (hours: string, minutes: string): string => {
        const hour = parseInt(hours, 10);
        const period = hour >= 12 ? "pm" : "am";
        const formattedHour = hour % 12 || 12;
        return `${formattedHour}:${minutes}${period}`;
      };

      const start = formatTime(startTime, startMinutes);
      const end = formatTime(endTime, endMinutes);
      const days = startDay === endDay ? startDay : `${startDay}-${endDay}`;

      if (convertedString !== "") {
        convertedString += "; ";
      }

      convertedString += `(${start}, ${end}) - (${days})`;
    }

    return convertedString;
  };

  // Usage example
  const timeString =
    "Start{07:00,Thursday};Stop{10:00,Thursday};Start{07:00,Friday};Stop{10:00,Friday}";
  const convertedString = convertTimeString(timeString);
  console.log(convertedString);

  const classManagement = {
    Class: `${getClassDetail.name}`,
    Program: `${getClassDetail.program.code} - ${getClassDetail.program.name}`,
    Schedule: `${convertTimeString(getClassDetail.generalSchedule)}`,
    CreatedDate: `${getClassDetail.createdDate}`,
    Department: `${getClassDetail.program.department?.name}`,
    Cycle: `${getClassDetail.cycle.name} - ${getClassDetail.cycle.duration} months`,
    StartDate: `${getClassDetail.startDate}`,
    Student: `${getClassDetail.trainees.length}/${getClassDetail.program.maxQuantity}`,
  };

  return (
    <Box>
      <Header imageUrl="" title="Class Approval" />
      <Grid
        className="container"
        container
        sx={{
          padding: "5px",
          width: "97%",
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
        {/* left content */}
        <Grid
          item
          xs={9}
          className="content-left"
          sx={{
            padding: "5px",
          }}
        >
          <Grid
            container
            direction="column"
            sx={{
              backgroundColor: "white",
              borderRadius: "5px",
              margin: "auto",
              padding: "10px",
            }}
          >
            <Grid item>
              <Grid container direction="row">
                <Grid
                  item
                  xs={12}
                  sx={{
                    width: "50%",
                    paddingRight: "5px",
                    fontSize: "20px",
                  }}
                >
                  <Grid container spacing={2}>
                    {Object.entries(classManagement).map(([key, value]) => (
                      <Grid container item xs={12} key={key} spacing={2}>
                        <Grid item xs={6}>
                          <strong>{key}:</strong>
                        </Grid>
                        <Grid item xs={5}>
                          {value}
                        </Grid>
                      </Grid>
                    ))}
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <br />
            <div>
              <Stack
                direction="row"
                spacing={2}
                sx={{ width: "100%", alignItems: "center" }}
              >
                <Button
                  variant="contained"
                  color="info"
                  onClick={handleClickOpen}
                >
                  List trainee
                </Button>
                <Button
                  variant="contained"
                  color="success"
                  onClick={handleDialogAcceptOpen}
                >
                  Accept
                </Button>
                <Button
                  variant="outlined"
                  color="error"
                  onClick={handleDialogRejectOpen}
                >
                  Reject
                </Button>
              </Stack>

              {/* Show dialog list trainee */}
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
                    </Toolbar>
                  </AppBar>
                  <Box>
                    <DataGrid
                      rows={getClassDetail.trainees}
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

              <Dialog
                open={dialogAccept}
                onClose={handleDialogAcceptedClose}
                fullWidth
              >
                <DialogTitle>Accept Comment</DialogTitle>
                <DialogContent>
                  <Textarea
                    onChange={handleCommentChange}
                    name="Soft"
                    placeholder="Comment in here…"
                    variant="soft"
                  />
                  {mess !== "" ? (
                    <Typography variant="body2" color="error">
                      Please add a comment.
                    </Typography>
                  ) : (
                    <></>
                  )}
                </DialogContent>
                <DialogActions>
                  <Button onClick={handleAccept}>Accept</Button>
                  <Button onClick={handleDialogAcceptedClose}>Close</Button>
                </DialogActions>
              </Dialog>

              <Dialog
                open={dialogReject}
                onClose={handleDialogRejectClose}
                fullWidth
              >
                <DialogTitle>Reject Comment</DialogTitle>
                <DialogContent>
                  <Textarea
                    onChange={handleCommentChange}
                    name="Soft"
                    placeholder="Comment in here…"
                    variant="soft"
                  />
                  {mess !== "" ? (
                    <Typography variant="body2" color="error">
                      Please add a comment.
                    </Typography>
                  ) : (
                    <></>
                  )}
                </DialogContent>
                <DialogActions>
                  <Button onClick={handleReject}>Accept</Button>
                  <Button onClick={handleDialogRejectClose}>Close</Button>
                </DialogActions>
              </Dialog>

              <Dialog
                open={showSuccessDialog}
                onClose={handleSuccessDialogClose}
              >
                <DialogTitle>Success</DialogTitle>
                <DialogContent>
                  <p>{mess}</p>
                </DialogContent>
                <DialogActions>
                  <Button onClick={handleSuccessDialogClose}>Close</Button>
                </DialogActions>
              </Dialog>
            </div>
          </Grid>
        </Grid>

        {/* right content */}
        <Grid
          item
          xs={3}
          className="content-right"
          sx={{
            padding: "5px",
          }}
        >
          <Grid
            container
            rowSpacing={2}
            direction="column"
            sx={{
              backgroundColor: "white",
              borderRadius: "5px",
              height: "100%",
              margin: "auto",
              paddingBottom: "10px",
              paddingLeft: "10px",
            }}
          >
            <Grid item>
              <strong style={{ fontSize: "20px" }}>Program</strong>
              <Box>{getClassDetail.program.description}</Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Footer />
    </Box>
  );
};

const columns: GridColDef[] = [
  // { field: "id", headerName: "ID", width: 70 },
  { field: "name", headerName: "Name", width: 200 },
  { field: "code", headerName: "Code", width: 130 },
  {
    field: "phone",
    headerName: "Phone",
    type: "number",
    width: 120,
  },
  {
    field: "birthdate",
    headerName: "Birthdate",
    // description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
    // valueGetter: (params: GridValueGetterParams) =>
    //   `${params.row.firstName || ""} ${params.row.lastName || ""}`,
  },
  {
    field: "profile.status",
    headerName: "Status",
    width: 130,
    valueGetter: (params) => params.row.profile?.status || "",
  },
];

export default ClassApprovalCp;
