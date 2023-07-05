import { Box, Grid } from "@mui/material";
import React from "react";
import Header from "../layoutComponents/Header";
import Footer from "../layoutComponents/Footer";

const TraineeAttendanceCp: React.FC = () => {
  const [clickedIndex, setClickedIndex] = React.useState<number>(1);
  const [clickedIndexTerm, setClickedIndexTerm] = React.useState<number>(1);

  const handleClick = (courseIndex: any) => {
    setClickedIndex(courseIndex);
  };

  const handleClickTerm = (dataIndex: any) => {
    setClickedIndexTerm(dataIndex);
  };
  return (
    <Box>
      <Header imageUrl="" title="Trainee Attendance" />
      <Box
        sx={{
          backgroundColor: "white",
          margin: "1rem",
          height: "700px",
        }}
      >
        <Grid container direction="row">
          <Grid item container xs={1} direction="column">
            <Grid
              sx={{
                backgroundColor: "#6082B6",
                border: "0.5px solid white",
                color: "white",
              }}
            >
              Campus
            </Grid>
            <Grid sx={{ fontWeight: "bold" }}>FHos</Grid>
          </Grid>
          <Grid item xs={3}>
            <Grid
              sx={{
                backgroundColor: "#6082B6",
                border: "0.5px solid white",
                color: "white",
              }}
            >
              Course
            </Grid>
            {clickedIndexTerm !== null &&
              fakeData[clickedIndexTerm].Course.map((course, index) => (
                <Grid
                  key={index}
                  sx={{
                    fontWeight: clickedIndex === index ? "bold" : "normal",
                    cursor: "pointer",
                  }}
                  onClick={() => handleClick(index)}
                >
                  {`${course.name} (${course.code})`}
                </Grid>
              ))}
          </Grid>
          <Grid item xs={8}>
            <Grid container direction="row">
              <Grid
                item
                xs={1}
                sx={{
                  backgroundColor: "#6082B6",
                  border: "0.5px solid white",
                  color: "white",
                }}
              >
                No
              </Grid>
              <Grid
                item
                xs={2}
                sx={{
                  backgroundColor: "#6082B6",
                  border: "0.5px solid white",
                  color: "white",
                }}
              >
                Date
              </Grid>
              <Grid
                item
                xs={2}
                sx={{
                  backgroundColor: "#6082B6",
                  border: "0.5px solid white",
                  color: "white",
                }}
              >
                Slot
              </Grid>
              <Grid
                item
                xs={2}
                sx={{
                  backgroundColor: "#6082B6",
                  border: "0.5px solid white",
                  color: "white",
                }}
              >
                Room
              </Grid>
              <Grid
                item
                xs={1}
                sx={{
                  backgroundColor: "#6082B6",
                  border: "0.5px solid white",
                  color: "white",
                }}
              >
                Trainer
              </Grid>
              <Grid
                item
                xs={3}
                sx={{
                  backgroundColor: "#6082B6",
                  border: "0.5px solid white",
                  color: "white",
                }}
              >
                Group
              </Grid>
              <Grid
                item
                xs={1}
                sx={{
                  backgroundColor: "#6082B6",
                  border: "0.5px solid white",
                  color: "white",
                  textAlign: "center",
                }}
              >
                Status
              </Grid>
            </Grid>
            {clickedIndexTerm !== null && clickedIndex !== null && (
              <Grid>
                {fakeData[clickedIndexTerm].Course[clickedIndex].attendance.map(
                  (attendance, index) => (
                    <Grid container direction="row" key={index}>
                      <Grid item xs={1}>
                        {index + 1}
                      </Grid>
                      <Grid item xs={2}>
                        {attendance.Date}
                      </Grid>
                      <Grid item xs={2}>
                        {attendance.Time}
                      </Grid>
                      <Grid item xs={2}>
                        {attendance.Room}
                      </Grid>
                      <Grid item xs={1}>
                        {attendance.Trainer}
                      </Grid>
                      <Grid item xs={3}>
                        {attendance.Group}
                      </Grid>
                      {attendance.Status === "present" ? (
                        <Grid
                          item
                          xs={1}
                          sx={{ color: "green", textAlign: "center" }}
                        >
                          {attendance.Status}
                        </Grid>
                      ) : (
                        <Grid
                          item
                          xs={2}
                          sx={{ color: "red", textAlign: "center" }}
                        >
                          {attendance.Status}
                        </Grid>
                      )}
                    </Grid>
                  )
                )}
              </Grid>
            )}
          </Grid>
        </Grid>
      </Box>
      <Footer />
    </Box>
  );
};

const fakeData = [
  {
    Term: "Spring2020",
    Course: [
      {
        name: "CourseIndex 1",
        code: "ABC123",
        attendance: [
          {
            Date: "20/20/2020",
            Time: "17:00-20:00",
            Room: "P001",
            Trainer: "BV",
            Group: "BVC201_SU20",
            Status: "present",
          },
          {
            Date: "20/20/2020",
            Time: "17:00-20:00",
            Room: "P001",
            Trainer: "BV",
            Group: "BVC201_SU20",
            Status: "present",
          },
          {
            Date: "20/20/2020",
            Time: "17:00-20:00",
            Room: "P001",
            Trainer: "BV",
            Group: "BVC201_SU20",
            Status: "present",
          },
          {
            Date: "20/20/2020",
            Time: "17:00-20:00",
            Room: "P001",
            Trainer: "BV",
            Group: "BVC201_SU20",
            Status: "absent",
          },
        ],
      },
      {
        name: "CourseIndex 2",
        code: "DEF456",
        attendance: [
          {
            Date: "20/20/2020",
            Time: "17:00-20:00",
            Room: "P002",
            Trainer: "BV",
            Group: "BVC201_SU20",
            Status: "present",
          },
        ],
      },
      {
        name: "CourseIndex 3",
        code: "GHI789",
        attendance: [
          {
            Date: "20/20/2020",
            Time: "17:00-20:00",
            Room: "P003",
            Trainer: "BV",
            Group: "BVC201_SU20",
            Status: "present",
          },
        ],
      },
    ],
  },
  {
    Term: "Summer2020",
    Course: [
      {
        name: "CourseIndex 4",
        code: "ABC123",
        attendance: [
          {
            Date: "20/20/2020",
            Time: "17:00-20:00",
            Room: "P004",
            Trainer: "BV",
            Group: "BVC201_SU20",
            Status: "present",
          },
        ],
      },
      {
        name: "CourseIndex 5",
        code: "DEF456",
        attendance: [
          {
            Date: "20/20/2020",
            Time: "17:00-20:00",
            Room: "P001",
            Trainer: "BV",
            Group: "BVC201_SU20",
            Status: "present",
          },
        ],
      },
      {
        name: "CourseIndex 6",
        code: "GHI789",
        attendance: [
          {
            Date: "20/20/2020",
            Time: "17:00-20:00",
            Room: "P001",
            Trainer: "BV",
            Group: "BVC201_SU20",
            Status: "present",
          },
        ],
      },
    ],
  },
  {
    Term: "Autumn2020",
    Course: [
      {
        name: "CourseIndex 7",
        code: "ABC123",
        attendance: [
          {
            Date: "20/20/2020",
            Time: "17:00-20:00",
            Room: "P001",
            Trainer: "BV",
            Group: "BVC201_SU20",
            Status: "present",
          },
        ],
      },
      {
        name: "CourseIndex 8",
        code: "DEF456",
        attendance: [
          {
            Date: "20/20/2020",
            Time: "17:00-20:00",
            Room: "P001",
            Trainer: "BV",
            Group: "BVC201_SU20",
            Status: "present",
          },
        ],
      },
      {
        name: "CourseIndex 9",
        code: "GHI789",
        attendance: [
          {
            Date: "20/20/2020",
            Time: "17:00-20:00",
            Room: "P001",
            Trainer: "BV",
            Group: "BVC201_SU20",
            Status: "present",
          },
        ],
      },
    ],
  },
];

// const fakeData2 = [
//   {
//     Term: "Spring2020",
//     Course: [
//       {
//         name: "CourseIndex 1",
//         code: "ABC123",
//         attendance: [
//           {
//             Date: "20/20/2020",
//             Time: "17:00-20:00",
//             Room: "P001",
//             Trainer: "BV",
//             Group: "BVC201_SU20",
//             Status: "absent",
//           },
//         ],
//       },
//     ],
//   },]

export default TraineeAttendanceCp;
