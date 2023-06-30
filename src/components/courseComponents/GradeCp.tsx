import React from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { Divider, Grid, Typography } from "@mui/material";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography component="div">{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const GradeCp: React.FC<{}> = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const [selectedCourse, setSelectedCourse] = React.useState<string | null>(
    "BVC201"
  );

  function a11yProps(index: number) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }

  function handleRowClick(course: string) {
    setSelectedCourse(course);
    setValue(1); // Switch to the second tab
  }
  return (
    <Box sx={{ width: "100%", height: "700px" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Overview report" {...a11yProps(0)} />
          <Tab label="User report" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <OverviewGrade handleRowClick={handleRowClick} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        {selectedCourse ? <UserGrade course={selectedCourse} /> : null}
      </TabPanel>
    </Box>
  );
};

const OverviewGrade: React.FC<{ handleRowClick: (course: string) => void }> = ({
  handleRowClick,
}) => {
  return (
    <Box>
      <Grid container direction="column">
        <Grid item container direction="row">
          <Grid item xs={2}>
            <strong style={{ fontSize: "1.5rem" }}>Trainer</strong>
          </Grid>
          <Grid item xs={8}>
            <strong style={{ fontSize: "1.5rem" }}>Course name</strong>
          </Grid>
          <Grid item xs={2}>
            <strong style={{ fontSize: "1.5rem" }}>Grade</strong>
          </Grid>
        </Grid>

        <Divider />

        {/* For display data */}
        {fakeData.map((data, index) => (
          <div
            key={index}
            style={{
              // marginTop: "10px",
              cursor: "pointer",
              backgroundColor: index % 2 === 0 ? "#c7c6c6" : "#ffffff",
              padding: "10px",
            }}
            onClick={() => handleRowClick(data.Course)}
          >
            <Grid container direction="row">
              <Grid item xs={2}>
                {data.Trainer}
              </Grid>
              <Grid item xs={8}>
                {data.Course} - {data.CourseName}
              </Grid>
              <Grid item xs={2}>
                {data.Grade}
              </Grid>
            </Grid>
          </div>
        ))}
      </Grid>
    </Box>
  );
};

const UserGrade: React.FC<{ course: string }> = ({ course }) => {
  const quizzes = fakeData.find((data) => data.Course === course);
  console.log("quiz >>> ", course);
  return (
    <Box>
      <Grid container direction="column">
        <Grid item container direction="row">
          <Grid item xs={2}>
            <strong style={{ fontSize: "1rem" }}>Grade item</strong>
          </Grid>
          <Grid item xs={2}>
            <strong style={{ fontSize: "1rem" }}>Weight</strong>
          </Grid>
          <Grid item xs={2}>
            <strong style={{ fontSize: "1rem" }}>Grade</strong>
          </Grid>
          <Grid item xs={2}>
            <strong style={{ fontSize: "1rem" }}>Percentage</strong>
          </Grid>
          <Grid item xs={2}>
            <strong style={{ fontSize: "1rem" }}>Total</strong>
          </Grid>
        </Grid>
      </Grid>
      <Divider />

      {quizzes?.Quizzes.map((quiz, index) => (
        <Grid
          item
          container
          direction="row"
          key={index}
          style={{
            marginTop: "10px",
            backgroundColor: index % 2 === 0 ? "#f5f5f5" : "#ffffff",
          }}
        >
          <Grid item xs={2}>
            {quiz.Name}
          </Grid>
          <Grid item xs={2}>
            {quiz.Weight}
          </Grid>
          <Grid item xs={2}>
            {quiz.Grade}
          </Grid>
          <Grid item xs={2}>
            {quiz.Percentage}
          </Grid>
          <Grid item xs={2}>
            {quiz.Total}
          </Grid>
        </Grid>
      ))}
    </Box>
  );
};

const fakeData = [
  {
    Course: "BVC201",
    CourseName: "The Business of Health Care Specialization",
    Trainer: "BinhNV",
    Grade: "30.24",
    Quizzes: [
      {
        Name: "Quiz 1",
        Weight: "33.33%",
        Grade: "9.51",
        Percentage: "95%",
        Total: "31.6%",
      },
      {
        Name: "Quiz 2",
        Weight: "33.33%",
        Grade: "9.51",
        Percentage: "95%",
        Total: "31.6%",
      },
      {
        Name: "Quiz 3",
        Weight: "33.33%",
        Grade: "9.51",
        Percentage: "95%",
        Total: "31.6%",
      },
    ],
  },
  {
    Course: "BVC202",
    CourseName: "The Business of Health Care Specialization",

    Trainer: "BinhNV02",
    Grade: "15.24",
    Quizzes: [
      {
        Name: "Quiz 4",
        Weight: "33.33%",
        Grade: "9.51",
        Percentage: "95%",
        Total: "31.6%",
      },
      {
        Name: "Quiz 5",
        Weight: "33.33%",
        Grade: "9.51",
        Percentage: "95%",
        Total: "31.6%",
      },
      {
        Name: "Quiz 6",
        Weight: "33.33%",
        Grade: "9.51",
        Percentage: "95%",
        Total: "31.6%",
      },
    ],
  },
  {
    Course: "BVC203",
    CourseName: "The Business of Health Care Specialization",

    Trainer: "BinhNV03",
    Grade: "40.24",
    Quizzes: [
      {
        Name: "Quiz 7",
        Weight: "33.33%",
        Grade: "9.51",
        Percentage: "95%",
        Total: "31.6%",
      },
      {
        Name: "Quiz 8",
        Weight: "33.33%",
        Grade: "9.51",
        Percentage: "95%",
        Total: "31.6%",
      },
      {
        Name: "Quiz 9",
        Weight: "33.33%",
        Grade: "9.51",
        Percentage: "95%",
        Total: "31.6%",
      },
    ],
  },
];

export default GradeCp;
