import React, { useState } from "react";
import {
  Grid,
  InputLabel,
  Autocomplete,
  TextField,
  Button,
} from "@mui/material";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import { TimePicker } from "antd";
import { RangeValue } from "rc-picker/lib/interface";
import { Dayjs } from "dayjs";
import { GeneralSchedule } from "../../utils/constant";
import { formatGeneralSchedule } from "../../utils/formatDay";
import {
  Controller,
  ControllerRenderProps,
  FieldValues,
} from "react-hook-form";

interface GeneralScheduleGeneralTimeListProps {
  generalSchedules: GeneralSchedule[];
  setGeneralSchedules: React.Dispatch<React.SetStateAction<GeneralSchedule[]>>;
  control: any;
  errors: any;
  register: any;
}

const GeneralScheduleGeneralTimeList: React.FC<
  GeneralScheduleGeneralTimeListProps
> = ({ generalSchedules, setGeneralSchedules, control, errors, register }) => {
  const daysOfWeek: string[] = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
  ];
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
    setGeneralSchedules(
      generalSchedules.filter((generalSchedule) => generalSchedule.id !== id)
    );
  };

  const handleTimeChange = (
    id: number,
    time: RangeValue<Dayjs>,
    field: ControllerRenderProps<FieldValues, string>
  ) => {
    field.onChange(time);
    setGeneralSchedules(
      generalSchedules.map((generalSchedule) =>
        generalSchedule.id === id
          ? { ...generalSchedule, time: time || null }
          : generalSchedule
      )
    );
  };

  const handleDayOfWeekChange = (id: number, dayOfWeek: string | null) => {
    setGeneralSchedules(
      generalSchedules.map((generalSchedule) =>
        generalSchedule.id === id
          ? { ...generalSchedule, dayOfWeek: dayOfWeek || null }
          : generalSchedule
      )
    );
  };

  const usedDaysOfWeek = generalSchedules.map(
    (generalSchedule) => generalSchedule.dayOfWeek
  );

  return (
    <>
      {generalSchedules.map((generalSchedule) => (
        <Grid container key={generalSchedule.id}>
          <Grid item sm={5}>
            <Controller
              name={"generalTime" + generalSchedule.id.toString()}
              control={control}
              rules={{
                required: "Please select the time range",
              }}
              render={({ field }) => (
                <div>
                  <TimePicker.RangePicker
                    style={{
                      width: "100%",
                      height: "56px",
                      backgroundColor: "transparent",
                      border: errors[`generalTime${generalSchedule.id}`]
                        ? "1px solid red"
                        : "1px solid #d9d9d9",
                    }}
                    value={generalSchedule.time || undefined}
                    onChange={(time) =>
                      handleTimeChange(generalSchedule.id, time, field)
                    }
                    hideDisabledOptions
                  />
                  {errors[`generalTime${generalSchedule.id}`] && (
                    <p style={{ color: "#d32f2f", fontSize: "0.75rem" }}>
                      {errors[`generalTime${generalSchedule.id}`].message}
                    </p>
                  )}
                </div>
              )}
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
              options={daysOfWeek.filter(
                (day) => !usedDaysOfWeek.includes(day)
              )}
              renderInput={(params) => (
                <TextField
                  {...register(`daysOfWeek${generalSchedule.id}`, {
                    required: true,
                  })}
                  error={
                    errors[`daysOfWeek${generalSchedule.id}`] ? true : false
                  }
                  helperText={
                    errors[`daysOfWeek${generalSchedule.id}`] &&
                    "This field is required"
                  }
                  {...params}
                />
              )}
              fullWidth
              value={generalSchedule.dayOfWeek || ""}
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
          marginTop: "5px",
        }}
        variant="contained"
        onClick={handleAddGeneralSchedule}
        disabled={usedDaysOfWeek.length === daysOfWeek.length}
      >
        Add
      </Button>
    </>
  );
};

export default GeneralScheduleGeneralTimeList;
