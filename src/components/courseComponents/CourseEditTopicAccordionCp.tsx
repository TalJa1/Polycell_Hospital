import {
  AccordionDetails,
  Button,
  Divider,
  IconButton,
  Menu,
  MenuItem,
  Typography,
  styled,
  Link,
  Box,
} from "@mui/material";

import MuiAccordionSummary, {
  AccordionSummaryProps,
} from "@mui/material/AccordionSummary";
import MuiAccordion, { AccordionProps } from "@mui/material/Accordion";
import React, { useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import CourseEditActivityCp from "./CourseEditActivityCp";
import CourseButtonAddActivityCp from "./CourseButtonAddActivityCp";

const CourseEditTopicAccordionCp: React.FC = () => {
  const [accordionCount, setAccordionCount] = useState(3);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [activities, setActivities] = useState<Array<Array<JSX.Element>>>(
    Array.from({ length: accordionCount }, () => [])
  );

  const handleAddAccordion = () => {
    setAccordionCount((prevCount) => prevCount + 1);
    setActivities((prevActivities) => [...prevActivities, []]);
  };

  const handleMoreVertClick = (event: React.MouseEvent<HTMLElement>) => {
    event.stopPropagation();
    setAnchorEl(event.currentTarget);
    console.log(
      activities
    );
  };

  const handleMoreVertClose = (event: React.MouseEvent<HTMLElement>) => {
    event.stopPropagation();
    setAnchorEl(null);
  };

  const handleAddActivity = (accordionIndex: number) => {
    setActivities((prevActivities) => {
      const updatedActivities = [...prevActivities];
      updatedActivities[accordionIndex] = [
        ...updatedActivities[accordionIndex],
        <CourseEditActivityCp key={updatedActivities[accordionIndex].length} />,
      ];
      return updatedActivities;
    });
  };

  const renderAccordions = () => {
    return Array.from({ length: accordionCount }, (_, i) => {
      const accordionIndex = i + 1;
      const accordionActivities = activities[i] || [];
      return (
        <Accordion key={accordionIndex}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`panel${accordionIndex}-content`}
            id={`panel${accordionIndex}-header`}
            sx={{ display: "flex", alignItems: "center" }}
          >
            <Typography fontSize="30px" >Accordion {accordionIndex}</Typography>
            <IconButton
              aria-label="more"
              onClick={handleMoreVertClick}
              sx={{ ml: "auto" }}
            >
              <MoreVertIcon />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMoreVertClose}
            >
              <MenuItem onClick={handleMoreVertClose}>Edit</MenuItem>
              <MenuItem onClick={handleMoreVertClose}>Duplicate</MenuItem>
              <MenuItem onClick={handleMoreVertClose}>Delete</MenuItem>
            </Menu>
          </AccordionSummary>
          <AccordionDetails>
            {accordionActivities.map((activity, index) => (
              <div key={index}>{activity}</div>
            ))}
            <CourseButtonAddActivityCp
              handleAddActivity={() => handleAddActivity(i)}
            />
            {/* <Button onClick={() => handleAddActivity(i)}>
                Add activity
              </Button> */}
          </AccordionDetails>
          <Divider sx={{ bgcolor: "#1976d2" }} />

          <Box
            sx={{
              paddingTop: "5px",

              paddingBottom: "30px",
            }}
          >
            <Link onClick={handleAddAccordion} underline="hover">
              Add Accordion
            </Link>
          </Box>
        </Accordion>
      );
    });
  };

  return <div>{renderAccordions()}</div>;
};

export default CourseEditTopicAccordionCp;

const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
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
  // backgroundColor:
  //   theme.palette.mode === "dark"
  //     ? "rgba(255, 255, 255, .05)"
  //     : "rgba(0, 0, 0, .03)",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(180deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));
