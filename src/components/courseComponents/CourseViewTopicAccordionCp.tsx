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
import React, { useCallback, useEffect, useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CourseEditActivityCp from "./CourseEditActivityCp";
import {
  fetchProgramContent,
  fetchProgramContentSuccess,
  fetchPrograms,
  fetchProgramsError,
  fetchProgramsSuccess,
} from "../../actions/programAction";
import programApi from "../../api/programApi";
import { useDispatch, useSelector } from "react-redux";
import { Program, Topic } from "../../models/programAddModel";
import { RootState } from "../../reduxs/Root";
import { useParams } from "react-router-dom";
import CourseViewActivityCp from "./CourseViewActivityCp";

const CourseViewTopicAccordionCp: React.FC = () => {

  const topics: Topic[] = useSelector(
    (state: RootState) => state.program.topics
  );

  const [activities, setActivities] = useState<Array<Array<JSX.Element>>>(
    Array.from({ length: topics.length }, () => [])
  );

  const dispatch = useDispatch();

  const { programId, trainerId } = useParams();


  const fetchTopics = useCallback(async () => {
    try {
      dispatch(fetchProgramContent());
      programApi
        // .getProgramContent(programId!, trainerId!)
        .getProgramContent("73574861-62eb-4965-9ebc-cecbb50ea11f", "3ae6a7fb-87a4-423e-8f38-d1313e710a00")
        .then((response) => {
          const program = response.data.topics;
          dispatch(fetchProgramContentSuccess(program))
          console.log(program);
        })
        .catch((error) => {
          console.log(error);
        });
        
    } catch (error) {
      console.log(error);
    }
  }, [dispatch]);

  useEffect(() => {
    console.log("Hello");
    fetchTopics();
  }, [fetchTopics]);

  const renderAccordions = () => {
    return topics.map((topic, i) => {
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
            <Typography fontSize="30px">{topic.name}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            {/* {accordionIndex === 1 ? <CourseEditActivityCp /> : <></>} */}

            {topic.activities.map((activity, index) => (
              <div key={index}>
                <CourseViewActivityCp activity={activity} />
              </div>
            ))}
          </AccordionDetails>
        </Accordion>
      );
    });
  };

  return <div>
    {renderAccordions()}
    </div>;
};

export default CourseViewTopicAccordionCp;

const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  borderBottom: `1px solid ${theme.palette.divider}`,

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
