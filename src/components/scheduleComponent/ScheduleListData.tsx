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
  Card,
  Chip,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  Stack,
  Typography,
} from "@mui/material";
import dayjs from "dayjs";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { SessionData } from "../../utils/constant";

const ScheduleListData: React.FC = () => {
  const { list } = useSelector((state: RootState) => state.schedule);
  const dispatch = useDispatch();
  const [selectedDate, setSelectedDate] = useState<Dayjs | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectedMonth, setSelectedMonth] = useState<Dayjs | null>(dayjs());

  const [sessionData, setSessionData] = React.useState<SessionData | null>(
    localStorage.getItem("sessionData")
      ? JSON.parse(localStorage.getItem("sessionData") || "")
      : null
  );

  const { id } = sessionData!;

  const fetchSchedule = useCallback(async () => {
    try {
      const response = await scheduleApi.getScheduleOfTrainer(
        id
      );
      const { data } = response;

      dispatch(fetchScheduleSuccess(data));
    } catch (error) {
      console.error("Error fetching trainees:", error);
    }
  }, [dispatch, id]);

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
              {item.content.class.code + " "}
              {/* <Chip label={item.content.class.trainer.name} color="default" size="small" /> */}
              <Typography variant="caption">at </Typography>
              {/* <Chip
                label={item.content.room.name}
                color="success"
                size="small"
              /> */}

              <Typography variant="caption">
                {" "}
                ({item.content.room.name})
              </Typography>
            </Typography>
            <Box>
              <Chip
                label={
                  dayjs(item.content.startTime, "HH:mm:ss").format("HH:mm") +
                  " - " +
                  dayjs(item.content.endTime, "HH:mm:ss").format("HH:mm")
                }
                color="default"
                size="small"
              />
              {/* <Typography variant="caption">
                ({dayjs(item.content.startTime, "HH:mm:ss").format("HH:mm")}-
                {dayjs(item.content.endTime, "HH:mm:ss").format("HH:mm")})
              </Typography> */}
            </Box>
            <Divider
              sx={{
                margin: "5px 0",
              }}
            />
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
        maxWidth="md"
        fullWidth
      >
        <DialogTitle bgcolor="ButtonHighlight">Event</DialogTitle>
        <Divider></Divider>
        <DialogContent>
          {selectedDate && (
            <Box sx={{ width: "100%", overflowX: "auto", padding: "20px" }}>
              <Stack direction="row" spacing={5}>
                {getList(selectedDate).map((item, index) => (
                  <Card
                    key={index}
                    sx={{
                      padding: "0 20px",
                    }}
                  >
                    <Box>
                      <Box
                        sx={{
                          padding: "10px 0",
                        }}
                      >
                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "space-between",
                          }}
                        >
                          <Typography
                            variant="body2"
                            sx={{
                              color: "rgb(150, 150, 150)",
                            }}
                          >
                            Class
                          </Typography>
                          <Typography variant="body1">
                            {item.content.class.code}
                          </Typography>
                        </Box>
                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "space-between",
                          }}
                        >
                          <Typography
                            variant="body2"
                            sx={{
                              color: "rgb(150, 150, 150)",
                            }}
                          >
                            Program
                          </Typography>
                          <Typography variant="body1">
                            {item.content.class.program.code}
                          </Typography>
                        </Box>
                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "space-between",
                          }}
                        >
                          <Typography
                            variant="body2"
                            sx={{
                              color: "rgb(150, 150, 150)",
                            }}
                          >
                            Room
                          </Typography>
                          <Typography variant="body1">
                            {item.content.room.name}
                          </Typography>
                        </Box>
                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "space-between",
                          }}
                        >
                          <Typography
                            variant="body2"
                            sx={{
                              color: "rgb(150, 150, 150)",
                            }}
                          >
                            Quantity
                          </Typography>
                          <Typography variant="body1">
                            {item.content.class.trainees === null ? 0 : item.content.class.trainees.length}
                          </Typography>
                        </Box>
                      </Box>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          borderTop: "1px dashed rgb(221, 221, 221)",
                          borderBottom: "1px dashed rgb(221, 221, 221)",
                          padding: "10px 0",
                        }}
                      >
                        <Box
                          sx={{
                            display: "flex",
                          }}
                        >
                          <Box
                            sx={{
                              paddingRight: "5px",
                            }}
                          >
                            <AccessTimeIcon fontSize="small" color="disabled" />
                          </Box>
                          <Box>
                            <Typography color="GrayText" variant="body2">
                              {dayjs(item.content.date, "DD/MM/YYYY").format(
                                "dddd, D MMMM"
                              )}
                            </Typography>
                            <Typography>
                              {dayjs(item.content.startTime, "HH:mm:ss").format(
                                "HH:mm"
                              )}{" "}
                              -{" "}
                              {dayjs(item.content.endTime, "HH:mm:ss").format(
                                "HH:mm"
                              )}
                            </Typography>
                          </Box>
                        </Box>

                        <Chip
                          label="TEACHING"
                          color="primary"
                          sx={{
                            marginLeft: "50px",
                          }}
                        />
                      </Box>
                      <Box
                        sx={{
                          padding: "10px 0",
                        }}
                      >
                        <Stack
                          direction="row"
                          alignItems="center"
                          justifyContent="space-between"
                          spacing={2}
                        >
                          <Chip
                            label={item.content.class.status}
                            color="primary"
                            variant="outlined"
                          />
                          <Button>View</Button>
                        </Stack>
                      </Box>
                    </Box>
                  </Card>
                ))}
              </Stack>
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
