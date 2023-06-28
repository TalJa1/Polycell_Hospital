import { Box, Tab, Tabs, Typography } from "@mui/material";
import React from "react";
import QuizMainCp from "./QuizMainCp";
import QuizQuestionsCp from "./QuizQuestionsCp";

const QuizTabBarCp: React.FC = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "70%" }}>
      <Box
        sx={{
          paddingTop: "30px",
          paddingBottom: "30px",
          display: "flex",
          
        }}
      >
        <Box
          sx={{
            width: "60px",
            height: "60px",
            border: "1px solid #1976d2",
            backgroundColor: "transparent",
            marginRight: "5px",

            borderRadius: "5px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        />
        <Box
          sx={{
            height: "50px",

          }}
        >
          <Typography variant="subtitle1">Quiz</Typography>

          <Typography variant="h4">Quiz Name</Typography>
        </Box>
      </Box>

      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          textColor="inherit"
          variant="fullWidth"
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Quiz" {...a11yProps(0)} />
          <Tab label="Questions" {...a11yProps(1)} />
          <Tab label="Results" {...a11yProps(2)} />
          <Tab label="Question bank" {...a11yProps(3)} />
        </Tabs>
      </Box>

      <TabPanel value={value} index={0}>
        <QuizMainCp />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <QuizQuestionsCp/>
      </TabPanel>
      <TabPanel value={value} index={2}>
        Results
      </TabPanel>
      <TabPanel value={value} index={3}>
        Question bank
      </TabPanel>
    </Box>
  );
};

export default QuizTabBarCp;

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
          <Typography component={"div"}>{children}</Typography>
        </Box>
      )}
    </div>
  );
}
