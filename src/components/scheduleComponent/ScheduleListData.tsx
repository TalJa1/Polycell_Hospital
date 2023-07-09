import React, { useCallback, useEffect, useState } from "react";
import type { BadgeProps } from "antd";
import { Badge, Calendar } from "antd";
import type { Dayjs } from "dayjs";
import type { CellRenderInfo } from "rc-picker/lib/interface";
import { RootState } from "../../reduxs/Root";
import { useDispatch, useSelector } from "react-redux";
import { fetchScheduleSuccess } from "../../actions/scheduleAction";
import scheduleApi from "../../api/schedule";
import { Schedule } from "../../models/scheduleModel";
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
import dayjs from "dayjs";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

const ScheduleListData: React.FC = () => {
  const { list } = useSelector((state: RootState) => state.schedule);
  const dispatch = useDispatch();
  const [selectedDate, setSelectedDate] = useState<Dayjs | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectedMonth, setSelectedMonth] = useState<Dayjs | null>(dayjs());

  const fetchSchedule = useCallback(async () => {
    try {
      const response = await scheduleApi.getScheduleOfTrainer(
        "3ae6a7fb-87a4-423e-8f38-d1313e710a00"
      );
      const { data } = response;

      dispatch(fetchScheduleSuccess(data));
    } catch (error) {
      console.error("Error fetching trainees:", error);
    }
  }, [dispatch]);

  useEffect(() => {
    fetchSchedule();
  }, [fetchSchedule]);

  const getList = (value: Dayjs) => {
    const dateStr = value.format("DD/MM/YYYY");
    const events = list.filter((item: Schedule) => item.date === dateStr);
    const listData: { type: string; content: Schedule }[] = events.map(
      (item: Schedule) => ({
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
              {item.content.class.code}
            </Typography>
            <Typography variant="caption">
              ({dayjs(item.content.startTime, "HH:mm:ss").format("HH:mm")}-
              {dayjs(item.content.endTime, "HH:mm:ss").format("HH:mm")})
            </Typography>
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
                      {dayjs(item.content.date, "DD/MM/YYYY").format(
                        "dddd, D MMMM"
                      )}{" "}
                      (
                      {dayjs(item.content.startTime, "HH:mm:ss").format(
                        "HH:mm"
                      )}{" "}
                      -{" "}
                      {dayjs(item.content.endTime, "HH:mm:ss").format("HH:mm")})
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
                      <Typography>{item.content.class.code} </Typography>
                      <Typography variant="caption">
                        at {item.content.room.name}
                      </Typography>
                    </Box>
                  </Box>
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

export default ScheduleListData;
