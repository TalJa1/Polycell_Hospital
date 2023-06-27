import {
  Box,
  Button,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
  Typography,
  styled,
} from "@mui/material";

import MuiAccordionSummary, {
  AccordionSummaryProps,
} from "@mui/material/AccordionSummary";
import MuiAccordion, { AccordionProps } from "@mui/material/Accordion";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import React, { useState } from "react";
import { DatePicker, TimePicker } from "@mui/x-date-pickers";
import { useNavigate } from "react-router-dom";

const FormActivityQuiz: React.FC = () => {
  const [expanded, setExpanded] = React.useState<string | false>("genral");

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };

  const navigate = useNavigate();

  const [age, setAge] = React.useState("");

  const handleChangeAge = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom sx={{ paddingBottom: 5 }}>
        Adding new URL
      </Typography>
      {/* General */}
      <Accordion
        expanded={expanded === "genral"}
        onChange={handleChange("genral")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls={`panel-content`}
          id={`panel-header`}
          sx={{ display: "flex", alignItems: "center", fontSize: "30px" }}
        >
          Genral
        </AccordionSummary>
        <Box sx={{ padding: 5 }}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={3}>
              <InputLabel>Name*</InputLabel>
            </Grid>
            <Grid item xs={12} sm={9}>
              <TextField
                required
                id="title"
                name="title"
                //   label="Title"
                fullWidth
                size="small"
                autoComplete="off"
                variant="outlined"
              />
            </Grid>

            <Grid item xs={12} sm={3}>
              <InputLabel>Description</InputLabel>
            </Grid>
            <Grid item xs={12} sm={9}>
              <TextField
                id="outlined-multiline-static"
                //   label="Content"
                multiline
                fullWidth
                rows={4}
              />
            </Grid>

            {/* <Grid item xs={12} sm={6} />
              <Grid item xs={12} sm={5} /> */}
          </Grid>
        </Box>
      </Accordion>
      {/* Timing */}

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls={`panel-content`}
          id={`panel-header`}
          sx={{ display: "flex", alignItems: "center", fontSize: "30px" }}
        >
          Timing
        </AccordionSummary>
        <Box sx={{ padding: 5 }}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={3}>
              <InputLabel>Open the quiz</InputLabel>
            </Grid>
            <Grid item xs={12} sm={9}>
              <Grid container>
                <Grid item sm={5}>
                  <DatePicker
                    label="Date"
                    sx={{
                      width: "100%",
                    }}
                  />
                </Grid>
                <Grid item sm={1}></Grid>
                <Grid item sm={5}>
                  <TimePicker
                    label="Time"
                    sx={{
                      width: "100%",
                    }}
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} sm={3}>
              <InputLabel>Close the quiz</InputLabel>
            </Grid>
            <Grid item xs={12} sm={9}>
              <Grid container>
                <Grid item sm={5}>
                  <DatePicker
                    label="Date"
                    sx={{
                      width: "100%",
                    }}
                  />
                </Grid>
                <Grid item sm={1}></Grid>
                <Grid item sm={5}>
                  <TimePicker
                    label="Time"
                    sx={{
                      width: "100%",
                    }}
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} sm={3}>
              <InputLabel>Time limit</InputLabel>
            </Grid>
            <Grid item xs={12} sm={9}>
              <Grid container>
                <Grid item sm={1}>
                  <TextField fullWidth />
                </Grid>
                <Grid item sm={1}></Grid>
                <Grid item sm={3}>
                  <Select
                    // value={age}
                    fullWidth
                    // onChange={handleChange}
                  >
                    <MenuItem>Weeks</MenuItem>
                    <MenuItem>Days</MenuItem>
                    <MenuItem>Hours</MenuItem>
                    <MenuItem>Minutes</MenuItem>
                    <MenuItem>Seconds</MenuItem>
                  </Select>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} sm={3}>
              <Typography
                variant="body1"
                sx={{ whiteSpace: "normal", wordWrap: "break-word" }}
              >
                <InputLabel>When time expired</InputLabel>
              </Typography>
            </Grid>
            <Grid item xs={12} sm={9}>
              <TextField
                required
                id="title"
                name="title"
                //   label="Title"
                fullWidth
                size="small"
                autoComplete="off"
                variant="outlined"
              />
            </Grid>

            {/* <Grid item xs={12} sm={6} />
              <Grid item xs={12} sm={5} /> */}
          </Grid>
        </Box>
      </Accordion>
      {/* Grading */}

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls={`panel-content`}
          id={`panel-header`}
          sx={{ display: "flex", alignItems: "center", fontSize: "30px" }}
        >
          Grade
        </AccordionSummary>
        <Box sx={{ padding: 5 }}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={3}>
              <InputLabel>Grade to pass</InputLabel>
            </Grid>
            <Grid item xs={12} sm={9}>
              <TextField
                required
                id="title"
                name="title"
                //   label="Title"
                fullWidth
                size="small"
                autoComplete="off"
                variant="outlined"
              />
            </Grid>

            <Grid item xs={12} sm={3}>
              <InputLabel>Attempts allowed</InputLabel>
            </Grid>
            <Grid item xs={12} sm={9}>
              <Select
                // value={age}
                fullWidth
                // onChange={handleChangeAge}
              >
                <MenuItem>Unlimited</MenuItem>
                <MenuItem>1</MenuItem>
                <MenuItem>2</MenuItem>
                <MenuItem>3</MenuItem>
                <MenuItem>4</MenuItem>
                <MenuItem>5</MenuItem>
              </Select>
            </Grid>
            <Grid item xs={12} sm={3}>
              <InputLabel>Grading method</InputLabel>
            </Grid>
            <Grid item xs={12} sm={9}>
              <Select
                // value={age}
                fullWidth
                // onChange={handleChange}
              >
                <MenuItem>Highest grade</MenuItem>
                <MenuItem>Average grade</MenuItem>
                <MenuItem>First attempt</MenuItem>
                <MenuItem>Last attempt</MenuItem>
              </Select>
            </Grid>

            {/* <Grid item xs={12} sm={6} />
              <Grid item xs={12} sm={5} /> */}
          </Grid>
        </Box>
      </Accordion>
      <Box
        sx={{
          height: "20px",
        }}
      />
      <Grid container spacing={3}>
        <Grid item xs={12} sm={4}>
          <Button variant="contained">Save and return course</Button>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Button variant="contained" onClick={() => navigate("/quiz-setup")}>
            Save and display
          </Button>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Button variant="contained">Cancel</Button>
        </Grid>
        <Grid item xs={12} sm={5} />
      </Grid>
    </React.Fragment>
  );
};

export default FormActivityQuiz;

const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  borderBottom: `1px solid ${theme.palette.divider}`,

  "&:not(:last-child)": {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary
    expandIcon={<ExpandMoreIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(180deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));
