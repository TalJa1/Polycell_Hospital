import React, { useRef, useState } from "react";
import { Box, Grid, Stack } from "@mui/material";
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

const ClassApprovalCp: React.FC = () => {
  const getClassDetail: Class = useSelector(
    (state: RootState) => state.class.class
  );
  const getID = useParams();
  const dispatch = useDispatch();
  const [comment, setComment] = useState<string>("");

  const fetchClassDetailApi = React.useCallback(async () => {
    try {
      const param = {};
      const response = await classApi.getbyId(param, getID.id);
      // console.log("Resp>>>> ", response.data);
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
          status: "APPROVE",
          classId: `${getID.id}`,
        };
        const response = await classApi.aprroval(params);
        console.log("Approval Status accept >> ", response.status);
      } catch (error) {
        console.log(error);
      }
    } else {
      console.log("Fill comment first");
    }
  };

  const handleReject = async () => {
    if (comment !== "") {
      try {
        const params = {
          comment: comment,
          createdDate: new Date().toLocaleString("en-GB", { timeZone: "UTC" }),
          status: "REJECT",
          classId: `${getID.id}`,
        };
        const response = await classApi.aprroval(params);
        console.log("Approval Status reject >> ", response.status);
      } catch (error) {
        console.log(error);
      }
    } else {
      console.log("Fill comment first");
    }
  };

  // const handleAcceptClose = () => {
  // };

  // const handleRejectClose = () => {
  // };

  const classManagement = {
    Class: `${getClassDetail.name}`,
    Duetime: "7am-9am (t4,t7)",
    Department: `${getClassDetail.program.department?.name}`,
    Cycle: `${getClassDetail.cycle.name}`,
    Program: `${getClassDetail.program.code}`,
    Student: `${getClassDetail.trainees.length}`,
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
                  xs={7}
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
                        <Grid
                          item
                          xs={5}
                          // sx={{
                          //   textAlign: "right",
                          // }}
                        >
                          {value}
                        </Grid>
                      </Grid>
                    ))}
                  </Grid>
                </Grid>
                <Grid item xs={5} className="comment-box">
                  <Box
                    sx={{
                      backgroundColor: "#E6E6E6",
                      width: "100%",
                      height: "100%",
                      borderRadius: "5px",
                    }}
                  >
                    <Textarea
                      onChange={handleCommentChange}
                      name="Soft"
                      placeholder="Comment in here…"
                      variant="soft"
                    />
                  </Box>
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
                  color="success"
                  onClick={handleAccept}
                >
                  Accept
                </Button>
                <Button variant="outlined" color="error" onClick={handleReject}>
                  Reject
                </Button>
              </Stack>
              {/* <Dialog open={acceptOpen} onClose={handleAcceptClose}>
                <DialogTitle>Accept</DialogTitle>
                <DialogContent>Accept Dialog Content</DialogContent>
                <DialogActions>
                  <Button
                    variant="contained"
                    onClick={handleAcceptClose}
                    autoFocus
                  >
                    Yes
                  </Button>
                  <Button onClick={handleAcceptClose}>No</Button>
                </DialogActions>
              </Dialog> */}
              {/* <Dialog open={rejectOpen} onClose={handleRejectClose}>
                <DialogTitle>Reject</DialogTitle>
                <DialogContent>Reject Dialog Content</DialogContent>
                <DialogActions>
                  <Button
                    variant="contained"
                    onClick={handleRejectClose}
                    autoFocus
                  >
                    Yes
                  </Button>
                  <Button onClick={handleRejectClose}>No</Button>
                </DialogActions>
              </Dialog> */}
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

export default ClassApprovalCp;
