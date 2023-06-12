import {
  Autocomplete,
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  InputLabel,
  TextField,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { DatePicker } from "@mui/x-date-pickers";
import dayjs from "dayjs";
import React, { useState } from "react";
import ClassAddFormPopup from "./ClassAddFormPopup";

import { TimePicker } from "antd";
import TodoGeneralTimeList from "./ClassAddTodoGeneralTimeList";

const ClassAddForm: React.FC = () => {
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  //   const [selectedTrainer, setselectedTrainer] = useState<Trainer | null>(null);
  const [items, setItems] = useState<number[]>([1]);

  const handleCourseChange = (
    event: React.ChangeEvent<{}>,
    value: Course | null
  ) => {
    setSelectedCourse(value);
  };

  //   const handleTrainerChange = (
  //     event: React.ChangeEvent<{}>,
  //     value: Course | null
  //   ) => {
  //     setselectedTrainer(value);
  //   };

  const handleControlPointClick = () => {
    const newItem: number = items.length + 1;
    console.log(newItem);
    setItems([...items, newItem]);
  };

  const handleRemoveCircleClick = (item: number) => {
    setItems(items.filter((e) => e !== item));
    console.log(item);
  };

  const classes = useStyles();

  return (
    <Box sx={{ padding: 5 }}>
      <Grid container columnSpacing={2}>
        <Grid
          item
          xs={9}
          sx={{ backgroundColor: "white", borderRadius: "5px" }}
        >
          <Grid
            container
            spacing={3}
            sx={{
              padding: "32px",
            }}
          >
            <Grid item xs={12} sm={2}>
              <InputLabel
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  fontWeight: 700,
                }}
              >
                Program*
              </InputLabel>
            </Grid>
            <Grid item xs={12} sm={selectedCourse != null ? 5 : 9}>
              <Autocomplete
                options={courses}
                renderInput={(params) => <TextField {...params} />}
                value={selectedCourse}
                onChange={handleCourseChange}
                fullWidth
              />
            </Grid>
            {selectedCourse != null ? (
              <Grid item xs={12} sm={5}>
                {selectedCourse && <p>Code name: {selectedCourse.label}</p>}
              </Grid>
            ) : (
              <p></p>
            )}

            {/* Department */}
            <Grid item xs={12} sm={2}>
              <InputLabel
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  fontWeight: 700,
                }}
              >
                Department
              </InputLabel>
            </Grid>
            <Grid item xs={12} sm={9}>
              {/* <Autocomplete
                        readOnly={true}
                      options={top100Films}
                      renderInput={(params) => (
                        <TextField {...params} label="Department" fullWidth />
                      )}
                      fullWidth
                    /> */}
              <TextField
                // id="filled-read-only-input"

                defaultValue="Hello World"
                InputProps={{
                  readOnly: true,
                }}
                fullWidth
              />
            </Grid>

            {/* QUANTITY */}
            <Grid item xs={12} sm={2}>
              <InputLabel
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  fontWeight: 700,
                }}
              >
                Quantity
              </InputLabel>
            </Grid>
            <Grid item xs={12} sm={10}>
              <Grid container>
                <Grid item sm={5}>
                  <Grid container>
                    <Grid item xs={12} sm={2}>
                      <InputLabel
                        sx={{
                          display: "flex",
                          // justifyContent: "center",
                          fontWeight: 700,
                          //   float: "right",
                        }}
                      >
                        Min
                      </InputLabel>
                    </Grid>
                    <Grid item sm={4}>
                      <TextField
                        id="quantity"
                        name="quantity"
                        // label="Quantity"
                        // fullWidth
                        size="medium"
                        autoComplete="off"
                        variant="outlined"
                        sx={{ float: "right" }}
                        inputProps={{
                          style: { textAlign: "right" },
                        }}
                        defaultValue="4"
                      />
                    </Grid>
                  </Grid>
                </Grid>

                <Grid item sm={2}>
                  {/* to */}
                </Grid>

                <Grid item sm={5}>
                  <Grid container>
                    <Grid item xs={12} sm={2}>
                      <InputLabel
                        sx={{
                          display: "flex",
                          // justifyContent: "center",
                          fontWeight: 700,
                          //   float: "right",
                        }}
                      >
                        Max
                      </InputLabel>
                    </Grid>
                    <Grid item sm={4}>
                      <TextField
                        id="quantity"
                        name="quantity"
                        // label="Quantity"
                        // fullWidth
                        size="medium"
                        autoComplete="off"
                        variant="outlined"
                        sx={{ float: "right" }}
                        inputProps={{
                          style: { textAlign: "right" },
                        }}
                        defaultValue="35"
                      />
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>

            {/* Start date */}
            <Grid item xs={12} sm={2}>
              <InputLabel
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  fontWeight: 700,
                }}
              >
                Start date
              </InputLabel>
            </Grid>
            <Grid item xs={12} sm={10}>
              <Grid container>
                <Grid item sm={5}>
                  <DatePicker
                    sx={{
                      width: "100%",
                    }}
                    defaultValue={dayjs("2022-04-17")}
                  />
                </Grid>
                <Grid item sm={1}>
                  <InputLabel
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      fontWeight: 700,
                      //   float: "right",
                    }}
                  >
                    to
                  </InputLabel>
                </Grid>

                <Grid item sm={5}>
                  <DatePicker
                    sx={{
                      width: "100%",
                    }}
                    defaultValue={dayjs("2022-04-17")}
                  />
                </Grid>
              </Grid>
            </Grid>

            {/* Due time */}
            <Grid item xs={12} sm={2}>
              <InputLabel
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  fontWeight: 700,
                }}
              >
                General time
              </InputLabel>
            </Grid>
            <Grid item xs={12} sm={10}>
              <TodoGeneralTimeList />
              {/* {items.map((item: number) => (
                <Grid container>
                  <Grid item sm={5}>
                    <TimePicker.RangePicker
                      style={{
                        width: "100%",
                        backgroundColor: "transparent",
                      }}
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
                    >
                      <ControlPointIcon />
                    </InputLabel>
                  </Grid>
                  <Grid item sm={1}>
                    {items[items.length - 1] === item ? (
                      <InputLabel
                        sx={{
                          display: "flex",
                          justifyContent: "center",
                          fontWeight: 700,
                          cursor: "pointer",
                        }}
                        onClick={handleControlPointClick}
                      >
                        <ControlPointIcon />
                      </InputLabel>
                    ) : (
                      <InputLabel
                        sx={{
                          display: "flex",
                          justifyContent: "center",
                          fontWeight: 700,
                          cursor: "pointer",
                        }}
                        onClick={() => handleRemoveCircleClick(item)}
                      >
                        <RemoveCircleOutlineIcon />
                      </InputLabel>
                    )}
                  </Grid>
                </Grid>
              ))} */}
            </Grid>

            {/* Button */}
            <Grid
              item
              xs={12}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <ClassAddFormPopup />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={3}>
          <Card
            sx={{
              height: "100%",
              maxHeight: 300,
            }}
          >
            <CardContent>
              {selectedCourse && <p>{selectedCourse.label}</p>}
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

const useStyles = makeStyles({
  inputRoot: {
    padding: 0, // Remove padding
  },
});

interface Course {
  label: string;
}

const courses: Course[] = [
  { label: "PPG202" },
  { label: "PPX201" },
  { label: "PPV201" },
  { label: "PPT202" },
  { label: "PPA203" },
  { label: "PPC201" },
  { label: "PPB202" },
  { label: "PPL203" },
];

// interface Trainer {
//   label: string;
// }

// const trainer: Trainer[] = [
//   { label: "Pham Van A" },
//   { label: "Nguyen Van B" },
//   { label: "Tran Thi C" },
// ];

// const top100Films = [
//   { label: "The Shawshank Redemption", year: 1994 },
//   { label: "The Godfather", year: 1972 },
//   { label: "The Godfather: Part II", year: 1974 },
//   { label: "The Dark Knight", year: 2008 },
//   { label: "12 Angry Men", year: 1957 },
//   { label: "Schindler's List", year: 1993 },
//   { label: "Pulp Fiction", year: 1994 },
//   {
//     label: "The Lord of the Rings: The Return of the King",
//     year: 2003,
//   },

// ];

const daysOfWeek: string[] = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

export default ClassAddForm;
