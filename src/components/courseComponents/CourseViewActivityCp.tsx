/* eslint-disable react/jsx-no-target-blank */
import { Box, Typography } from "@mui/material";
import React from "react";
import { Topic } from "../../models/programAddModel";
import LinkIcon from "@mui/icons-material/Link";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import QuizIcon from "@mui/icons-material/Quiz";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const CourseViewActivityCp: React.FC<{ activity: Topic }> = ({ activity }) => {
  const [openDialogs, setOpenDialogs] = React.useState<boolean[]>(
    Array(activity.slots?.length).fill(false)
  );

  const handleClickOpen = (index: number) => {
    const newOpenDialogs = [...openDialogs];
    newOpenDialogs[index] = true;
    setOpenDialogs(newOpenDialogs);
  };

  const handleClose = (index: number) => {
    const newOpenDialogs = [...openDialogs];
    newOpenDialogs[index] = false;
    setOpenDialogs(newOpenDialogs);
  };

  // console.log("External >> ", activity);

  return (
    <>
      {activity.slots?.map((value, index) => (
        <Box
          key={index}
          sx={{
            border: "1px solid #E6E6E6",
            boxShadow: "none",
            backgroundColor: "white",
            marginBottom: "10px",
            borderRadius: "10px",
          }}
        >
          <Box
            sx={{
              padding: "20px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div onClick={() => handleClickOpen(index)}>
              <Box
                style={{
                  display: "flex",
                }}
              >
                {value.type === "RESOURCE" ? (
                  <Box
                    sx={{
                      width: "50px",
                      height: "50px",
                      display: "flex",
                      border: "1px solid #E6E6E6",
                      backgroundColor: "#fb4aa6",
                      marginRight: "10px",
                      borderRadius: "5px",
                      textAlign: "center",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "white",
                    }}
                  >
                    <LinkIcon />
                  </Box>
                ) : (
                  <Box
                    sx={{
                      width: "50px",
                      height: "50px",
                      display: "flex",
                      border: "1px solid #E6E6E6",
                      backgroundColor: "#8245fb",
                      marginRight: "10px",
                      borderRadius: "5px",
                      textAlign: "center",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "white",
                    }}
                  >
                    <QuizIcon />
                  </Box>
                )}
                <Box>
                  {value.type === "RESOURCE" ? (
                    <>
                      <Typography variant="subtitle1">
                        <strong>{value.externalResource?.name}</strong>
                      </Typography>
                      <Typography>
                        <a
                          href={value.externalResource?.externalUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {value.externalResource?.description}
                        </a>
                      </Typography>
                    </>
                  ) : value.type === "QUIZ" ? (
                    <Typography variant="subtitle1">
                      <strong>Quiz</strong>
                    </Typography>
                  ) : (
                    <Typography variant="subtitle1">
                      Alternate content
                    </Typography>
                  )}
                </Box>

                {/* <Dialog
                  open={openDialogs[index]}
                  TransitionComponent={Transition}
                  keepMounted
                  onClose={() => handleClose(index)}
                  aria-describedby="alert-dialog-slide-description"
                >
                  <DialogTitle>{value.externalResource?.name}</DialogTitle>
                  <DialogContent>
                    <DialogContentText>
                      {value.externalResource?.description}
                    </DialogContentText>
                    <DialogContentText id="alert-dialog-slide-description">
                      <a
                        href={value.externalResource?.externalUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {value.externalResource?.externalUrl}
                      </a>
                    </DialogContentText>
                  </DialogContent>
                  <DialogActions>
                    <Button onClick={() => handleClose(index)}>Close</Button>
                  </DialogActions>
                </Dialog> */}
              </Box>
            </div>

            <Box
              style={{
                display: "flex",
              }}
            >
              <Box
                sx={{
                  height: "30px",
                  border: "1px solid #E6E6E6",
                  backgroundColor: "#fff",
                  marginRight: "10px",
                  display: "inline-flex",
                  alignItems: "center",
                  padding: "4px 8px",
                  borderRadius: "5px",
                }}
              >
                <Typography variant="subtitle2" color="text.secondary">
                  Mask as done
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      ))}
    </>
  );
};

export default CourseViewActivityCp;
