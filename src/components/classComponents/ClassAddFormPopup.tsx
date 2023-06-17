import {
  AppBar,
  Box,
  Button,
  Checkbox,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
  IconButton,
  InputLabel,
  Paper,
  Slide,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Toolbar,
  Typography
} from "@mui/material";
import { ArrowDropDownIcon } from "@mui/x-date-pickers";

import React, { useMemo, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { TransitionProps } from "@mui/material/transitions";



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
      {/* <IconButton
        color="secondary"
        aria-label="add an alarm"
      >
        <VisibilityIcon
          sx={{
            paddingLeft: "5px",
            display: "flex",
            justifyContent: "start",
            alignItems: "center",
            height: "100%",
          }}
        />
      </IconButton> */}
      <Button
        variant="contained"
        sx={{
          backgroundColor: "#000",
        }}
        onClick={handleClickOpen}
      >
        Add automatic
      </Button>
      <Dialog
        open={open}
        fullScreen
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <AppBar sx={{ position: "relative" }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, color: "white", textAlign: "center" }}
            >
              Add Trainee
            </Typography>
            <Box sx={{ marginLeft: "auto" }}>
              <Button autoFocus color="inherit" onClick={handleClose}>
                Save
              </Button>
            </Box>
          </Toolbar>
        </AppBar>
        <DialogContent dividers>
          <DialogContentText>Amount: </DialogContentText>
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
  return { id, name, phone, title, currentSpecialization, selected: false };
}

const rows = [
  Student("SE1615", "Pham Van A", "0908775112", "BS", "Surgery 1"),
  Student("SE1616", "Nguyen Thi B", "0908775113", "BS", "Surgery 2"),
  Student("SE1617", "Le Van C", "0908775114", "BS", "Surgery 3"),
  Student("SE1618", "Le Van D", "0908775115", "BS", "Surgery 4"),

  // Add more students here...
];

function TableStudent() {
  const [selectedRows, setSelectedRows] = useState<string[]>([]);
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc");
  const [sortBy, setSortBy] = useState<"id" | "name">("id");

  // handle select
  const handleClick = (event: React.MouseEvent<unknown>, id: string) => {
    const selectedIndex = selectedRows.indexOf(id);
    let newSelected: string[] = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selectedRows, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selectedRows.slice(1));
    } else if (selectedIndex === selectedRows.length - 1) {
      newSelected = newSelected.concat(selectedRows.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selectedRows.slice(0, selectedIndex),
        selectedRows.slice(selectedIndex + 1)
      );
    }

    setSelectedRows(newSelected);
  };

  const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      const newSelectedRows = rows.map((row) => row.id);
      setSelectedRows(newSelectedRows);
    } else {
      setSelectedRows([]);
    }
  };

  const isSelected = (id: string) => selectedRows.indexOf(id) !== -1;

  // hande Sort
  const handleSortBy = (column: "id" | "name") => {
    if (sortBy === column) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortBy(column);
      setSortDirection("asc");
    }
  };

  const sortedRows = useMemo(() => {
    const sorted = [...rows];

    sorted.sort((a, b) => {
      const aValue = sortBy === "id" ? a.id : a.name;
      const bValue = sortBy === "id" ? b.id : b.name;

      if (aValue < bValue) {
        return sortDirection === "asc" ? -1 : 1;
      }
      if (aValue > bValue) {
        return sortDirection === "asc" ? 1 : -1;
      }
      return 0;
    });

    return sorted;
  }, [rows, sortBy, sortDirection]);

  return (
    <div>
      <TableContainer
        component={Paper}
        sx={{
          height: 300,
        }}
      >
        <Table sx={{ minWidth: 650 }} aria-label="simple table" stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell padding="checkbox">
                <Checkbox
                  color="primary"
                  indeterminate={
                    selectedRows.length > 0 && selectedRows.length < rows.length
                  }
                  checked={
                    rows.length > 0 && selectedRows.length === rows.length
                  }
                  onChange={handleSelectAllClick}
                  inputProps={{
                    "aria-label": "select all students",
                  }}
                />
              </TableCell>
              <TableCell
                onClick={() => handleSortBy("id")}
                sx={{ cursor: "pointer" }}
              >
                ID{" "}
                {sortBy === "id" && (
                  <ArrowDropDownIcon
                    sx={{ verticalAlign: "middle", fontSize: "small" }}
                    color={sortDirection === "asc" ? "primary" : "disabled"}
                  />
                )}
              </TableCell>
              <TableCell
                align="center"
                onClick={() => handleSortBy("name")}
                sx={{ cursor: "pointer" }}
              >
                Name{" "}
                {sortBy === "name" && (
                  <ArrowDropDownIcon
                    sx={{ verticalAlign: "middle", fontSize: "small" }}
                    color={sortDirection === "asc" ? "primary" : "disabled"}
                  />
                )}
              </TableCell>
              <TableCell align="center">Phone</TableCell>
              <TableCell align="center">Title</TableCell>
              <TableCell align="center">Current Specialization</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {sortedRows.map((row) => {
              const isItemSelected = isSelected(row.id);
              const labelId = `student-checkbox-${row.id}`;

              return (
                <TableRow
                  key={row.id}
                  hover
                  onClick={(event) => handleClick(event, row.id)}
                  role="checkbox"
                  aria-checked={isItemSelected}
                  tabIndex={-1}
                  selected={isItemSelected}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell padding="checkbox">
                    <Checkbox
                      color="primary"
                      checked={isItemSelected}
                      inputProps={{
                        "aria-labelledby": labelId,
                      }}
                    />
                  </TableCell>
                  <TableCell component="th" scope="row" id={labelId}>
                    {row.id}
                  </TableCell>
                  <TableCell align="center">{row.name}</TableCell>
                  <TableCell align="center">{row.phone}</TableCell>
                  <TableCell align="center">{row.title}</TableCell>
                  <TableCell align="center">
                    {row.currentSpecialization}
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default ClassAddFormPopup;
