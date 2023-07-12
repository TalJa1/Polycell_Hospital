import React, { useState } from "react";
import {
  Alert,
  Box,
  Button,
  CircularProgress,
  Snackbar,
  Typography,
} from "@mui/material";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import MedicalServicesIcon from "@mui/icons-material/MedicalServices";
import styled from "@emotion/styled";
import { useLocation, useNavigate } from "react-router-dom";
import { Class } from "../../models/classManagementModel";
import classApi from "../../api/classApi";
import { RootState } from "../../reduxs/Root";
import { useSelector } from "react-redux";
import { SnackbarState } from "../../utils/constant";

const CourseDetailEnrollRight: React.FC = () => {
  const location = useLocation();
  const classData: Class = location.state?.classData;
  const navigate = useNavigate();
  const { id } = useSelector((state: RootState) => state.user);

  const [showSnackbar, setShowSnackbar] = useState<SnackbarState>({
    open: false,
    status: "SUCCESS",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleCloseSnackbar = (
    event: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    setShowSnackbar({
      open: false,
      status: "",
      message: "",
    });
  };

  const handleSave = async () => {
    try {
      setIsLoading(true); // Set loading state

      const param = {
        classId: classData.id,
        traineeId: id,
      };

      const response = await classApi.enrollToClassByTrainee(param);
      const { data, status } = response;

      console.log(response);

      // Simulate loading delay
      setTimeout(() => {
        if (status === 200) {
          if (data.overlappedSchedule === null) {
            setShowSnackbar({
              open: true,
              status: "SUCCESS",
              message: "Join class success",
            });
          } else {
            setShowSnackbar({
              open: true,
              status: "WARNING",
              message: "You are overlapping",
            });
          }
        }
        setIsLoading(false); // Set loading state
      }, 2000);
    } catch (error) {
      console.error("Error enrolling in class:", error);
      setIsLoading(false); // Set loading state
    }
  };

  return (
    <div>
      <GradientButton
        sx={{
          width: "100%",
          padding: "20px 0",
          backgroundColor:
            "linear-gradient(90deg, rgb(17, 182, 122) 0%, rgb(0, 148, 68) 100%)",
        }}
        onClick={handleSave}
        disabled={isLoading} // Disable button during loading
      >
        {isLoading ? (
          <CircularProgress
            size={24}
            sx={{
              color: "white",
            }}
          /> // Show loading indicator
        ) : (
          <Typography>Enroll</Typography>
        )}
      </GradientButton>
      <Box
        sx={{
          border: "1px solid rgb(238, 238, 238)",
          padding: "16px 20px ",
          margin: "30px 0",
        }}
      >
        <Typography variant="h5">Class Details</Typography>

        <Box
          sx={{
            borderBottom: "2px solid rgb(17, 182, 122)",
            width: "50px",
            marginBottom: "20px",
          }}
        />

        <Box>
          <Box
            sx={{
              borderTop: "1px dashed rgb(221, 221, 221)",
              padding: "10px 0px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Box
              sx={{
                display: "flex",
              }}
            >
              <CalendarMonthIcon
                fontSize="small"
                sx={{
                  color: "rgb(17, 182, 122)",
                }}
              />
              <Typography
                variant="body2"
                sx={{
                  paddingLeft: "5px",
                }}
              >
                Start date:
              </Typography>
            </Box>
            <Box>
              <Typography
                variant="body2"
                sx={{
                  color: "rgb(150, 150, 150)",
                }}
              >
                {classData.startDate.toString()}
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              borderTop: "1px dashed rgb(221, 221, 221)",
              padding: "10px 0px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Box
              sx={{
                display: "flex",
              }}
            >
              <AccessTimeIcon
                fontSize="small"
                sx={{
                  color: "rgb(17, 182, 122)",
                }}
              />
              <Typography
                variant="body2"
                sx={{
                  paddingLeft: "5px",
                }}
              >
                Duration:
              </Typography>
            </Box>

            <Box>
              <Typography
                variant="body2"
                sx={{
                  color: "rgb(150, 150, 150)",
                }}
              >
                {classData.cycle.duration} months
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              borderTop: "1px dashed rgb(221, 221, 221)",
              padding: "10px 0px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Box
              sx={{
                display: "flex",
              }}
            >
              <BookmarkIcon
                fontSize="small"
                sx={{
                  color: "rgb(17, 182, 122)",
                }}
              />
              <Typography
                variant="body2"
                sx={{
                  paddingLeft: "5px",
                }}
              >
                Enrolled:
              </Typography>
            </Box>
            <Box>
              <Typography
                variant="body2"
                sx={{
                  color: "rgb(150, 150, 150)",
                }}
              >
                {classData.trainees === null ? "0" : classData.trainees.length}
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              borderTop: "1px dashed rgb(221, 221, 221)",
              padding: "10px 0px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Box
              sx={{
                display: "flex",
              }}
            >
              <MedicalServicesIcon
                fontSize="small"
                sx={{
                  color: "rgb(17, 182, 122)",
                }}
              />
              <Typography
                variant="body2"
                sx={{
                  paddingLeft: "5px",
                }}
              >
                Department:
              </Typography>
            </Box>
            <Box>
              <Typography
                variant="body2"
                sx={{
                  color: "rgb(150, 150, 150)",
                }}
              >
                {classData.program.department!.name}
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
      <Snackbar
        open={showSnackbar.open}
        autoHideDuration={5000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        {showSnackbar.status === "SUCCESS" ? (
          <Alert variant="filled" severity="success">
            {showSnackbar.message}
          </Alert>
        ) : (
          <Alert variant="filled" severity="error">
            {showSnackbar.message}
          </Alert>
        )}
      </Snackbar>
    </div>
  );
};

export default CourseDetailEnrollRight;

const GradientButton = styled(Button)`
  background: linear-gradient(
    90deg,
    rgb(17, 182, 122) 0%,
    rgb(0, 148, 68) 100%
  );
  color: white;
`;
