import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
  InputLabel,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
} from "@mui/material";
import React from "react";

const ClassAddFormPopup: React.FC = () => {
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
        Add
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
          <DialogContentText>Total: 4/35</DialogContentText>
          <DialogContentText>Status: pending</DialogContentText>

          <DialogContentText id="alert-dialog-description">
            <TableStudent />
          </DialogContentText>
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

function Student(
  id: string,
  name: string,
  phone: string,
  title: string,
  currentSpecialization: string
) {
  return { id, name, phone, title, currentSpecialization };
}

const rows = [
  Student("SE1615", "Pham Van A", "0908775112", "BS", "Surgery 1"),
  Student("SE1615", "Pham Van A", "0908775112", "BS", "Surgery 1"),
  Student("SE1615", "Pham Van A", "0908775112", "BS", "Surgery 1"),
  Student("SE1615", "Pham Van A", "0908775112", "BS", "Surgery 1"),
  Student("SE1615", "Pham Van A", "0908775112", "BS", "Surgery 1"),
  Student("SE1615", "Pham Van A", "0908775112", "BS", "Surgery 1"),
];

function TableStudent() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell align="center">Name</TableCell>
            <TableCell align="center">Phone</TableCell>
            <TableCell align="center">Title</TableCell>
            <TableCell align="center">Current Specialization</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="center">{row.name}</TableCell>
              <TableCell align="center">{row.phone}</TableCell>
              <TableCell align="center">{row.title}</TableCell>
              <TableCell align="center">{row.currentSpecialization}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

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

export default ClassAddFormPopup;
