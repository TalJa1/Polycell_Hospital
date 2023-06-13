import {
  Autocomplete,
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  InputLabel,
  TextField,
  Typography,
} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import dayjs from "dayjs";
import React, { useState } from "react";
import ClassAddFormPopup from "./ClassAddFormPopup";
import TodoGeneralTimeList from "./ClassAddTodoGeneralTimeList";

const ClassAddForm: React.FC = () => {
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  //   const [selectedTrainer, setselectedTrainer] = useState<Trainer | null>(null);

  const handleCourseChange = (
    event: React.ChangeEvent<{}>,
    value: Course | null
  ) => {
    setSelectedCourse(value);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setSelectedCourse((prevCourse: Course | null) => ({
      ...(prevCourse as Course),
      [name]: value,
    }));
  };


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
                {selectedCourse && <p>Code name: {selectedCourse.code}</p>}
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

            {/* Department */}
            <Grid item xs={12} sm={2}>
              <InputLabel
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  fontWeight: 700,
                }}
              >
                Class name
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

                fullWidth
              />
            </Grid>

            {/* Cycle */}
            <Grid item xs={12} sm={2}>
              <InputLabel
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  fontWeight: 700,
                }}
              >
                Cycle
              </InputLabel>
            </Grid>
            <Grid item xs={12} sm={9}>
              <Autocomplete
                      options={top100Films}
                      renderInput={(params) => (
                        <TextField {...params} fullWidth />
                      )}
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
        {selectedCourse && (
  <Grid item xs={3}>
    <Card
      sx={{
        height: "100%",
        maxHeight: 500,
      }}
    >
      <CardContent>
        <Typography variant="h6">{selectedCourse.label}</Typography>
        <TextField
          name="code"
          label="Code"
          value={selectedCourse.code}
          onChange={handleInputChange}
          fullWidth
          multiline

          sx={{ marginBottom: "1rem" }}
        />
        <TextField
          name="syllabus"
          label="Syllabus"
          value={selectedCourse.syllabus}
          onChange={handleInputChange}
          fullWidth
          multiline

          sx={{ marginBottom: "1rem" }}
        />
        <TextField
          name="department"
          label="Department"
          value={selectedCourse.department}
          onChange={handleInputChange}
          fullWidth
          multiline

          sx={{ marginBottom: "1rem" }}
        />
        <TextField
          name="description"
          label="Description"
          value={selectedCourse.description}
          onChange={handleInputChange}
          fullWidth
          multiline
          rows={4}
          sx={{ marginBottom: "1rem" }}
        />
        <Button variant="contained">
          Modify
        </Button>
      </CardContent>
    </Card>
  </Grid>
)}

      </Grid>
    </Box>
  );
};

interface Course {
  label: string;
  code: string;
  syllabus: string;
  department: string;
  description: string;
}

const courses: Course[] = [
  {
    label: "Course 1",
    code: "PPG202",
    syllabus: "Course syllabus for PPG202",
    department: "Department A",
    description: "Description of PPG202",
  },
  {
    label: "Course 2",
    code: "PPX201",
    syllabus: "Course syllabus for PPX201",
    department: "Department B",
    description: "Description of PPX201",
  },
  // Add more courses...
];

// interface Trainer {
//   label: string;
// }

// const trainer: Trainer[] = [
//   { label: "Pham Van A" },
//   { label: "Nguyen Van B" },
//   { label: "Tran Thi C" },
// ];

const top100Films = [
  { label: "The Shawshank Redemption", year: 1994 },
  { label: "The Godfather", year: 1972 },
  { label: "The Godfather: Part II", year: 1974 },
  { label: "The Dark Knight", year: 2008 },
  { label: "12 Angry Men", year: 1957 },
  { label: "Schindler's List", year: 1993 },
  { label: "Pulp Fiction", year: 1994 },
  {
    label: "The Lord of the Rings: The Return of the King",
    year: 2003,
  },

];

export default ClassAddForm;
