import {
  Box,
  Divider,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../reduxs/Root";
import syllabusApi from "../../api/syllabusApi";
import { fetchSyllbusByProgramId } from "../../actions/syllabusAction";
import {
  AssessmentScheme,
  Material,
  Module,
  Session,
  Syllabus,
  Unit,
} from "../../models/syllabusModel";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion, { AccordionProps } from "@mui/material/Accordion";
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import SchoolIcon from "@mui/icons-material/School";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import QuizIcon from "@mui/icons-material/Quiz";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import ArticleIcon from "@mui/icons-material/Article";

const CourseDetailSyllabusCp: React.FC = () => {
  const { syllabus } = useSelector((state: RootState) => state.syllabus);

  const dispatch = useDispatch();

  const fetchSyllabus = useCallback(async () => {
    try {
      const response = await syllabusApi.getSyllabusByProgramId(
        "73574861-62eb-4965-9ebc-cecbb50ea11f"
      );
      const { data } = response;

      dispatch(fetchSyllbusByProgramId(data as Syllabus));
    } catch (error) {
      console.error("Error fetching trainees:", error);
    }
  }, [dispatch]);

  useEffect(() => {
    fetchSyllabus();
  }, [fetchSyllabus]);

  return (
    <Box>
      <Typography variant="h5" fontWeight="bold">
        Syllabus
      </Typography>
      <Box
        sx={{
          borderBottom: "2px solid rgb(17, 182, 122)",
          width: "50px",
          marginBottom: "20px",
        }}
      />
      <Typography variant="h5">{syllabus.name}</Typography>
      <Typography>About this Syllabus</Typography>
      <Typography>{syllabus.description}</Typography>
      <TableContainer
        sx={{
          margin: "30px 0",
        }}
      >
        <Table
          sx={{
            // minWidth: 300,
            // width: "50%",
            "& .MuiTableCell-root": {
              border: "1px solid rgba(224, 224, 224, 1);",
            },
          }}
        >
          <TableBody>
            <TableRow>
              <TableCell
                sx={{
                  width: "50%",
                  background:
                    "linear-gradient(90deg, rgb(17, 182, 122) 0%, rgb(0, 148, 68) 100%)",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    color: "white",
                  }}
                >
                  <CheckCircleIcon sx={{ paddingRight: "10px" }} />
                  Pass Criteria
                </Box>
              </TableCell>
              <TableCell>{syllabus.passCriteria}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell
                sx={{
                  background:
                    "linear-gradient(90deg, rgb(17, 182, 122) 0%, rgb(0, 148, 68) 100%)",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    color: "white",
                  }}
                >
                  <SchoolIcon sx={{ paddingRight: "10px" }} />
                  Total Session
                </Box>
              </TableCell>
              <TableCell>{syllabus.totalSessions}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      <Divider />
      <TableContainer
        sx={{
          margin: "30px 0",
        }}
      >
        <Table
          sx={{
            // minWidth: 300,
            // width: "50%",
            "& .MuiTableCell-root": {
              border: "1px solid rgba(224, 224, 224, 1);",
            },
          }}
        >
          <TableBody>
            <TableRow>
              <TableCell
                sx={{
                  width: "50%",

                  background:
                    "linear-gradient(90deg, rgb(17, 182, 122) 0%, rgb(0, 148, 68) 100%)",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    color: "white",
                  }}
                >
                  <QuizIcon sx={{ paddingRight: "10px" }} />
                  Assessment Schemes
                </Box>
              </TableCell>
              {syllabus.assessmentSchemes.map(
                (e: AssessmentScheme, index: number) => (
                  <TableCell key={index}>
                    {e.category}: {e.weight}
                  </TableCell>
                )
              )}
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      <Divider />
      <TableContainer
        sx={{
          margin: "30px 0",
        }}
      >
        <Table
          sx={{
            // minWidth: 300,
            // width: "50%",
            "& .MuiTableCell-root": {
              border: "1px solid rgba(224, 224, 224, 1);",
            },
          }}
        >
          <TableHead>
            <TableRow>
              <TableCell
                sx={{
                  width: "50%",

                  background:
                    "linear-gradient(90deg, rgb(17, 182, 122) 0%, rgb(0, 148, 68) 100%)",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    color: "white",
                  }}
                >
                  <MenuBookIcon sx={{ paddingRight: "10px" }} />
                  Material
                </Box>
              </TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Link</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {syllabus.materials.map((e: Material, index: number) => (
              <TableRow key={index}>
                <TableCell></TableCell>
                <TableCell>{e.name}</TableCell>
                <TableCell>{e.description}</TableCell>
                <TableCell>{e.link}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Typography variant="h5" fontWeight="bold">
        Modules
      </Typography>
      <Box
        sx={{
          borderBottom: "2px solid rgb(17, 182, 122)",
          width: "50px",
          marginBottom: "20px",
        }}
      />
      <Box>
        {syllabus.modules.map((e: Module, index: number) => (
          <Box key={index}>
            <Box>
              <Box>
                {e.sessions.map((e: Session, index: number) => (
                  <Box key={index}>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <Typography variant="h6">
                        Session {e.sessionNo}
                      </Typography>

                      <Typography variant="body1">
                        {e.units.length} Lectures
                      </Typography>
                    </Box>

                    <Box sx={{ paddingLeft: "30px" }}>
                      {e.units.map((e: Unit, index: number) => (
                        <Box key={index}>
                          <Box
                            sx={{
                              display: "flex",
                              alignItem: "center",
                              padding: "20px 0",
                            }}
                          >
                            <ArticleIcon
                              sx={{
                                color: "rgb(17, 182, 122)",
                                paddingRight: "10px",
                              }}
                            />
                            <Typography variant="body1">{e.name}</Typography>
                          </Box>

                          <Divider />
                        </Box>
                      ))}
                    </Box>
                  </Box>
                ))}
              </Box>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default CourseDetailSyllabusCp;
