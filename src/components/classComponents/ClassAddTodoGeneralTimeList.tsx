import React, { useState } from "react";
import { Grid, InputLabel, Autocomplete, TextField, Button } from "@mui/material";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import { TimePicker } from "antd";
import { RangeValue } from "rc-picker/lib/interface";
import { Dayjs } from "dayjs";
import { GeneralSchedule } from "../../utils/constant";
import { formatGeneralSchedule } from "../../utils/formatDay";

interface GeneralScheduleGeneralTimeListProps {
  generalSchedules: GeneralSchedule[];
  setGeneralSchedules: React.Dispatch<React.SetStateAction<GeneralSchedule[]>>;
}

const GeneralScheduleGeneralTimeList: React.FC<GeneralScheduleGeneralTimeListProps> = ({generalSchedules, setGeneralSchedules}) => {
  const daysOfWeek: string[] = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
  // const [generalSchedules, setGeneralSchedules] = useState<GeneralSchedule[]>([]);
  const [nextId, setNextId] = useState(1);

  const handleAddGeneralSchedule = () => {
    const newGeneralSchedule: GeneralSchedule = {
      id: nextId,
      time: null,
      dayOfWeek: null,
    };
    setGeneralSchedules([...generalSchedules, newGeneralSchedule]);
    setNextId(nextId + 1);
  };

  const handleRemoveGeneralSchedule = (id: number) => {
    setGeneralSchedules(generalSchedules.filter((generalSchedule) => generalSchedule.id !== id));
  };

  const handleTimeChange = (id: number, time: RangeValue<Dayjs>) => {
    setGeneralSchedules(
      generalSchedules.map((generalSchedule) =>
        generalSchedule.id === id ? { ...generalSchedule, time: time || null } : generalSchedule
      )
    );
  };

  const handleDayOfWeekChange = (id: number, dayOfWeek: string | null) => {
    setGeneralSchedules(
      generalSchedules.map((generalSchedule) =>
        generalSchedule.id === id ? { ...generalSchedule, dayOfWeek: dayOfWeek || null } : generalSchedule
      )
    );
  };




  return (
    <>
      {generalSchedules.map((generalSchedule) => (
        <Grid container key={generalSchedule.id}>
          <Grid item sm={5}>
            <TimePicker.RangePicker
              style={{
                width: "100%",
                height: "56px",
                backgroundColor: "transparent",
              }}
              value={generalSchedule.time || undefined}
              onChange={(time) => handleTimeChange(generalSchedule.id, time)}
            />
          </Grid>
          <Grid item sm={1}>
            <InputLabel
              sx={{
                display: "flex",
                justifyContent: "center",
                fontWeight: 700,
              }}
            ></InputLabel>
          </Grid>
          <Grid item sm={5}>
            <Autocomplete
              options={daysOfWeek}
              renderInput={(params) => <TextField {...params} />}
              fullWidth
              value={generalSchedule.dayOfWeek}
              onChange={(event, value) =>
                handleDayOfWeekChange(generalSchedule.id, value)
              }
            />
          </Grid>
          <Grid item sm={1}>
            <InputLabel
              sx={{
                display: "flex",
                justifyContent: "center",
                fontWeight: 700,
                cursor: "pointer",
              }}
              onClick={() => handleRemoveGeneralSchedule(generalSchedule.id)}
            >
              <RemoveCircleOutlineIcon />
            </InputLabel>
          </Grid>
        </Grid>
      ))}
      <Button
      sx={{
        marginTop: "5px"
      }}
        variant="contained"
        onClick={handleAddGeneralSchedule}
      >
        Add
      </Button>
    </>
  );
};

export default GeneralScheduleGeneralTimeList;
