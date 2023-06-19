import {
  Box,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Tab,
  Tabs,
  TextField,
  Button,
  Card,
  Divider,
  Typography,
  CardContent,
} from "@mui/material";
import React from "react";

interface CouseChooseActivityProps {
  open: boolean;
  handleClose: () => void;
  handleAddActivity: () => void;
}

const CouseChooseActivityCp: React.FC<CouseChooseActivityProps> = ({
  open,
  handleClose,
  handleAddActivity,
}) => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <>
      <Dialog fullWidth maxWidth="md" open={open} onClose={handleClose}>
        <DialogTitle>Add activity or resource</DialogTitle>
        <Divider />
        <DialogContent>
          <Box>
            <TextField fullWidth label="Search" />
          </Box>
          <Box sx={{ width: "100%" }}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <Tabs
                value={value}
                onChange={handleChange}
                aria-label="basic tabs example"
              >
                <Tab label="All" {...a11yProps(0)} />
                <Tab label="Item Two" {...a11yProps(1)} />
                <Tab label="Item Three" {...a11yProps(2)} />
              </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
              <ListActivity
                handleAddActivity={handleAddActivity}
              />
            </TabPanel>
            <TabPanel value={value} index={1}>
              Item Two
            </TabPanel>
            <TabPanel value={value} index={2}>
              Item Three
            </TabPanel>
          </Box>
        </DialogContent>
        <Divider />
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default CouseChooseActivityCp;

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

const TabPanel = (props: TabPanelProps) => {
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
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
};

const activityData = [
  { id: 1, label: "Url" },
  { id: 2, label: "Text" },
  { id: 3, label: "File" },
];

interface ListActivityProps {
  handleAddActivity: () => void;
}

const ListActivity: React.FC<ListActivityProps> = ({
  handleAddActivity,
}) => {
  return (
    <div
      style={{
        display: "flex",
      }}
    >
      {activityData.map((card) => (
        <Card
          key={card.id}
          onClick={handleAddActivity}
          sx={{
            width: "15%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            margin: "10px",
          }}
        >
          <Box
            sx={{
              width: "50px",
              height: "50px",
              border: "1px solid #1976d2",
              backgroundColor: "transparent",
              marginTop: "10px",
              marginBottom: "5px",
              borderRadius: "5px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          ></Box>
          <Typography sx={{ textAlign: "center" }}>{card.label}</Typography>
        </Card>
      ))}
    </div>
  );
};
