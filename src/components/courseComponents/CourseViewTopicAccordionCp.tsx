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
import CourseEditActivityCp from "./CourseEditActivityCp";

const CourseViewTopicAccordionCp: React.FC = () => {
  const [accordionCount, setAccordionCount] = useState(3);
  const [activities, setActivities] = useState<Array<Array<JSX.Element>>>(
    Array.from({ length: accordionCount }, () => [])
  );

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
            <Typography fontSize="30px">Accordion {accordionIndex}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            {
              accordionIndex === 1 
              ? <CourseEditActivityCp />
              : <></>
            }
            

            {accordionActivities.map((activity, index) => (
              <div key={index}>{activity}</div>
            ))}
          </AccordionDetails>
        </Accordion>
      );
    });
  };

  return <div>{renderAccordions()}</div>;
};

export default CourseViewTopicAccordionCp;

const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  // border: `1px solid ${theme.palette.divider}`,
  
  "&:not(:last-child)": {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  // "&:before": {
  //   display: "none",
  // },
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
