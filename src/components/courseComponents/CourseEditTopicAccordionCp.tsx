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
  TextField,
} from "@mui/material";

import MuiAccordionSummary, {
  AccordionSummaryProps,
} from "@mui/material/AccordionSummary";
import MuiAccordion, { AccordionProps } from "@mui/material/Accordion";
import React, { createContext, useEffect, useRef, useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import CourseEditActivityCp from "./CourseEditActivityCp";
import CourseButtonAddActivityCp from "./CourseButtonAddActivityCp";
import CouseChooseActivityCp from "./CouseChooseActivityCp";
import EditIcon from "@mui/icons-material/Edit";
import FormActivityFile from "../formActivityComponents/FormActivityFile";
import FormActivityUrl from "../formActivityComponents/FormActivityUrl";

const CourseEditTopicAccordionCp: React.FC = () => {
  const [accordionCount, setAccordionCount] = useState(3);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [activities, setActivities] = useState<Array<Array<JSX.Element>>>(
    Array.from({ length: accordionCount }, () => [])
  );
  const [open, setOpen] = React.useState(false);
  const [selectedAccordion, setSelectedAccordion] = useState<number>(0);
  const [editingTitleIndex, setEditingTitleIndex] = useState<number | null>(
    null
  );
  const [page, setPage] = useState<string>("");

  const handleAddAccordion = () => {
    setAccordionCount((prevCount) => prevCount + 1);
    setActivities((prevActivities) => [...prevActivities, []]);
  };

  const handleMoreVertClick = (event: React.MouseEvent<HTMLElement>) => {
    event.stopPropagation();
    setAnchorEl(event.currentTarget);
    console.log(activities);
  };

  const handleMoreVertClose = (event: React.MouseEvent<HTMLElement>) => {
    event.stopPropagation();
    setAnchorEl(null);
  };

  const handleAddActivity = (accordionIndex: number) => {
    console.log(accordionIndex);

    setActivities((prevActivities) => {
      const updatedActivities = [...prevActivities];
      updatedActivities[accordionIndex] = [
        ...updatedActivities[accordionIndex],
        <CourseEditActivityCp key={updatedActivities[accordionIndex].length} />,
      ];
      return updatedActivities;
    });
    setOpen(false);
  };

  const handleClickOpen = (accordionIndex: number) => {
    setSelectedAccordion(accordionIndex);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const textFieldRef = useRef<HTMLInputElement>(null);

  const handleShowInputChangeTitle = (
    event: React.MouseEvent<HTMLElement>,
    accordionIndex: number
  ) => {
    event.stopPropagation();
    setEditingTitleIndex(accordionIndex);
  };

  const handleOutsideClick = (event: MouseEvent) => {
    if (
      textFieldRef.current &&
      !textFieldRef.current.contains(event.target as Node)
    ) {
      setEditingTitleIndex(null);
    }
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Escape" || event.key === "Enter") {
      event.preventDefault();
      setEditingTitleIndex(null);
    }
  };

  const handleUnfocus = () => {
    setEditingTitleIndex(null);
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

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
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              {editingTitleIndex === accordionIndex ? (
                <TextField
                  inputRef={textFieldRef}
                  onKeyDown={handleKeyPress}
                  autoFocus
                  onBlur={handleUnfocus}
                />
              ) : (
                <>
                  <Typography fontSize="30px">
                    Accordion {accordionIndex}
                  </Typography>
                  <IconButton
                    // aria-label="more"
                    onClick={(event) =>
                      handleShowInputChangeTitle(event, accordionIndex)
                    }
                  >
                    <EditIcon />
                  </IconButton>
                </>
              )}
            </Box>
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
              // handleAddActivity={() => handleAddActivity(i)}
              handleShowDialog={() => handleClickOpen(i)}
            />
            <CouseChooseActivityCp
              open={open}
              handleClose={() => handleClose()}
              handleAddActivity={() => handleAddActivity(selectedAccordion)}
            />
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

  return (
    <div>
      {renderAccordions()}
      {/* <FormActivityUrl />
      <FormActivityFile /> */}
    </div>
  );
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
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(180deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
  "&.Mui-focusVisible": {
    backgroundColor: "unset",
  },
}));

interface PageContextValue {
  page: string;
  setPage: React.Dispatch<React.SetStateAction<string>>;
  // ...
}

const initialContextValue: PageContextValue = {
  page: "",
  setPage: () => {},
};

export const PageContext = createContext<PageContextValue>(initialContextValue);
