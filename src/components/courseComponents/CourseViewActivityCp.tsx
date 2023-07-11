import { Box, Typography } from "@mui/material";
import React from "react";
import { Topic } from "../../models/programAddModel";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const CourseViewActivityCp: React.FC<{ activity: Topic }> = ({ activity }) => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
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
            <div onClick={handleClickOpen}>
              <Box
                style={{
                  display: "flex",
                }}
              >
                <Box
                  sx={{
                    width: "50px",
                    height: "50px",

                    border: "1px solid #E6E6E6",
                    backgroundColor: "#fff",
                    marginRight: "10px",
                    borderRadius: "5px",
                  }}
                />

                <Box>
                  <Typography variant="subtitle1">{value.type}</Typography>
                </Box>

                <Dialog
                  open={open}
                  TransitionComponent={Transition}
                  keepMounted
                  onClose={handleClose}
                  aria-describedby="alert-dialog-slide-description"
                >
                  <DialogTitle>{value.id}</DialogTitle>
                  <DialogContent>
                    <DialogContentText id="alert-dialog-slide-description">
                      {value.externalResource?.name}
                    </DialogContentText>
                  </DialogContent>
                  <DialogActions>
                    <Button onClick={handleClose}>Close</Button>
                  </DialogActions>
                </Dialog>
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
