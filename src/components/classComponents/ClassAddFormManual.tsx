import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  InputLabel,
  TextField,
} from "@mui/material";
import React from "react";

const ClassAddFormManual: React.FC = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button
        onClick={handleClickOpen}
        variant="contained"
        sx={{
          backgroundColor: "#000",
        }}
      >
        Manual
      </Button>
      <Dialog
        open={open}
        fullWidth
        maxWidth="md"
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Add Trainee"}</DialogTitle>
        <DialogContent dividers>
          <FormAddStudent />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose} autoFocus>
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

function FormAddStudent() {
  return (
    <div>
      <Box sx={{ padding: 5 }}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={4}>
            <InputLabel
              sx={{
                display: "flex",
                justifyContent: "center",
                fontWeight: 700,
              }}
            >
              Full name
            </InputLabel>
          </Grid>
          <Grid item xs={12} sm={8}>
            <TextField
              //   style={{ width: "200px", margin: "5px" }}
              type="text"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <InputLabel
              sx={{
                display: "flex",
                justifyContent: "center",
                fontWeight: 700,
              }}
            >
              Phone
            </InputLabel>
          </Grid>
          <Grid item xs={12} sm={8}>
            <TextField
              //   style={{ width: "200px", margin: "5px" }}
              type="text"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <InputLabel
              sx={{
                display: "flex",
                justifyContent: "center",
                fontWeight: 700,
              }}
            >
              Email
            </InputLabel>
          </Grid>
          <Grid item xs={12} sm={8}>
            <TextField
              //   style={{ width: "200px", margin: "5px" }}
              type="text"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <InputLabel
              sx={{
                display: "flex",
                justifyContent: "center",
                fontWeight: 700,
              }}
            >
              Title
            </InputLabel>
          </Grid>
          <Grid item xs={12} sm={8}>
            <TextField
              //   style={{ width: "200px", margin: "5px" }}
              type="text"
              variant="outlined"
            />
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default ClassAddFormManual;
