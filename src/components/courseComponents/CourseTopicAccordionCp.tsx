import {
  AccordionDetails,
  Button,
  Divider,
  IconButton,
  Menu,
  MenuItem,
  Typography,
  styled,
} from "@mui/material";

import MuiAccordionSummary, {
  AccordionSummaryProps,
} from "@mui/material/AccordionSummary";
import MuiAccordion, { AccordionProps } from "@mui/material/Accordion";
import React, { useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import CourseActivityCp from "./CourseActivityCp";

const CourseTopicAccordionCp: React.FC = () => {
  const [accordionCount, setAccordionCount] = useState(3);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);


  const handleAddAccordion = () => {
    
    setAccordionCount((prevCount) => prevCount + 1);
  };

  const handleMoreVertClick = (event: React.MouseEvent<HTMLElement>) => {
    event.stopPropagation();
    setAnchorEl(event.currentTarget);
  };

  const handleMoreVertClose = (event: React.MouseEvent<HTMLElement>) => {
    event.stopPropagation();

    setAnchorEl(null);
  };

  const renderAccordions = () => {
    const accordions = [];
    for (let i = 1; i <= accordionCount; i++) {
      accordions.push(
        <Accordion key={i}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`panel${i}-content`}
            id={`panel${i}-header`}
            sx={{ display: "flex", alignItems: "center" }}
          >
            <Typography>Accordion {i}</Typography>
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
              <MenuItem onClick={handleMoreVertClose}>Action 1</MenuItem>
              <MenuItem onClick={handleMoreVertClose}>Action 2</MenuItem>
              <MenuItem onClick={handleMoreVertClose}>Action 3</MenuItem>
            </Menu>
          </AccordionSummary>
          <AccordionDetails>
            <CourseActivityCp/>
          </AccordionDetails>
          <Divider/>
          <Button onClick={handleAddAccordion}>Add Accordion</Button>
        </Accordion>
      );
    }
    return accordions;
  };

  return <div>{renderAccordions()}</div>;
};

export default CourseTopicAccordionCp;

const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary
    expandIcon={<ExpandMoreIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, .05)"
      : "rgba(0, 0, 0, .03)",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));
