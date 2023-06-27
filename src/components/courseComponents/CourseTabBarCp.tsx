import {
  Box,
  FormControlLabel,
  Switch,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import React from "react";
import CourseEditTopicAccordionCp from "./CourseEditTopicAccordionCp";
import CourseViewTopicAccordionCp from "./CourseViewTopicAccordionCp";

interface CourseTabBarProps {
  editMode: boolean;
}

const CourseTabBarCp: React.FC<CourseTabBarProps> = ({ editMode }) => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "70%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          textColor="inherit"
          variant="fullWidth"
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Course" {...a11yProps(0)} />
          <Tab label="Participants" {...a11yProps(1)} />
          <Tab label="Grades" {...a11yProps(2)} />
        </Tabs>
      </Box>

      <TabPanel value={value} index={0}>
        {editMode ? (
          <CourseEditTopicAccordionCp />
        ) : (
          <CourseViewTopicAccordionCp />
        )}
      </TabPanel>
      <TabPanel value={value} index={1}>
        Participants
      </TabPanel>
      <TabPanel value={value} index={2}>
        Grades
      </TabPanel>
    </Box>
  );
};

export default CourseTabBarCp;

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

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
          <Typography component={'div'}>{children}</Typography>
        </Box>
      )}
    </div>
  );
}
