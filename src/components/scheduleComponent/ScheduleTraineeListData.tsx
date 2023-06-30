import dayjs, { Dayjs } from "dayjs";
import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../reduxs/Root";
import attendanceApi from "../../api/attendanceApi";
import { FETCH_ATTENDANCE_SUCCESS } from "../../utils/constant";
import { fetchAttendanceSuccess } from "../../actions/attendanceAction";
import { Attendance } from "../../models/attendaceModel";
import type { CellRenderInfo } from "rc-picker/lib/interface";

import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  Typography,
} from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { Calendar } from "antd";

const ScheduleTraineeListData: React.FC = () => {
  const { list } = useSelector((state: RootState) => state.attendance);
  const dispatch = useDispatch();
  const [selectedDate, setSelectedDate] = useState<Dayjs | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectedMonth, setSelectedMonth] = useState<Dayjs | null>(dayjs());

  const fetchSchedule = useCallback(async () => {
    try {
      const response = await attendanceApi.getAttendanceOfTrainee(
        "00bcab59-5ddd-4528-b811-d85a8f0e27f7"
      );
      const { data } = response;

      dispatch(fetchAttendanceSuccess(data));
    } catch (error) {
      console.error("Error fetching trainees:", error);
    }
  }, [dispatch]);

  useEffect(() => {
    fetchSchedule();
  }, [fetchSchedule]);

  const getList = (value: Dayjs) => {
    const dateStr = value.format("DD/MM/YYYY");
    const events = list.filter(
      (item: Attendance) => item.schedule.date === dateStr
    );
    const listData: { type: string; content: Attendance }[] = events.map(
      (item: Attendance) => ({
        type: "success",
        content: item,
      })
    );
    return listData;
  };

  const dateCellRender = (value: Dayjs) => {
    const listData = getList(value);
    return (
      <Box>
        {listData.map((item, index) => (
          <Box key={index}>
            <Typography variant="body1">
              {item.content.schedule.clazz.code}
            </Typography>
            <Box>
              <Typography variant="caption">{item.content.status}</Typography>
            </Box>
            <Box>
              <Typography variant="caption">
                (
                {dayjs(item.content.schedule.startTime, "HH:mm:ss").format(
                  "HH:mm"
                )}
                -
                {dayjs(item.content.schedule.endTime, "HH:mm:ss").format(
                  "HH:mm"
                )}
                )
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>
    );
  };

  const cellRender = (current: Dayjs, info: CellRenderInfo<Dayjs>) => {
    if (info.type === "date") return dateCellRender(current);
    // if (info.type === "month") return monthCellRender(current);
    return info.originNode;
  };

  const disabledDate = (current: Dayjs) => {
    return current.month() !== selectedMonth!.month();
  };

  const handleSelect = (value: Dayjs) => {
    if (!value.isSame(selectedMonth, "month")) {
      // Do not open the dialog if the selected date is from a different month
      return;
    }

    setSelectedDate(value);
    setDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
  };

  const handlePanelChange = (value: Dayjs) => {
    setSelectedMonth(value);
  };

  return (
    <>
      <Calendar
        cellRender={cellRender}
        onSelect={handleSelect}
        onPanelChange={handlePanelChange}
        disabledDate={disabledDate}
        mode="month"
      />

      <Dialog
        open={dialogOpen}
        onClose={handleCloseDialog}
        maxWidth="sm"
        fullWidth
      >
        <DialogTitle bgcolor="ButtonHighlight">Event</DialogTitle>
        <Divider></Divider>
        <DialogContent>
          {selectedDate && (
            <Box>
              {getList(selectedDate).map((item, index) => (
                <>
                
                  <Box
                    key={index}
                    sx={{
                      display: "flex",
                      alignItems: "center",

                      paddingBottom: "10px",
                    }}
                  >
                    <Box
                      sx={{
                        paddingRight: "20px",
                      }}
                    >
                      <AccessTimeIcon />
                    </Box>
                    <Typography color="GrayText">
                      {dayjs(item.content.schedule.date, "DD/MM/YYYY").format(
                        "dddd, D MMMM"
                      )}{" "}
                      (
                      {dayjs(
                        item.content.schedule.startTime,
                        "HH:mm:ss"
                      ).format("HH:mm")}{" "}
                      -{" "}
                      {dayjs(item.content.schedule.endTime, "HH:mm:ss").format(
                        "HH:mm"
                      )}
                      )
                    </Typography>
                  </Box>
                  <Box
                    key={index}
                    sx={{
                      display: "flex",
                    }}
                  >
                    <Box
                      sx={{
                        paddingRight: "20px",
                      }}
                    >
                      <CalendarMonthIcon />
                    </Box>

                    <Box
                      sx={
                        {
                          // display: "flex",
                          // alignItems: "center",
                        }
                      }
                    >
                      <Typography>
                        {item.content.schedule.clazz.code} (
                        <Typography variant="caption">
                          {item.content.status}
                        </Typography>
                        )
                      </Typography>
                      <Box>
                        <Typography variant="caption">
                          Lecture: {item.content.schedule.clazz.trainer.name}
                        </Typography>
                      </Box>

                      <Typography variant="caption">
                        at {item.content.schedule.room.name}
                      </Typography>
                    </Box>
                  </Box>
                  {getList(selectedDate).length > 1 ? (
                    <Divider sx={{ marginTop: "10px", marginBottom: "10px" }} />
                  ) : (
                    <></>
                  )}
                </>
              ))}
            </Box>
          )}
        </DialogContent>
        <Divider></Divider>
        <DialogActions>
          <Button onClick={handleCloseDialog}>Close</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default ScheduleTraineeListData;
