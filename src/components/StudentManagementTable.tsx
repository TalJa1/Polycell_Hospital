import {
    Autocomplete,
  Button,
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
import Header from "./Header";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import { DatePicker, TimePicker } from "@mui/x-date-pickers";

const TraineeManagementTable: React.FC = () => {
  return (
    <div className="class-container">
      <Header title="Class Management" imageUrl="" />
      <div className="content-container">
        <div className="tabbar">
          <div className="add-btn">
            <Link to="/add-class">
              <Button variant="contained" sx={{ color: "black" }}>
                Add
              </Button>
            </Link>
          </div>
          <div className="search-item">
            <input
              type="text"
              placeholder="Search"
              
            />
          </div>
        </div>
        <div className="class-detail">
          <div className="column-9">
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>ID</TableCell>
                    <TableCell align="center">Name</TableCell>
                    <TableCell align="center">Phone</TableCell>
                    <TableCell align="center">Title</TableCell>
                    <TableCell align="center">Action</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <TableRow
                      key={row.id}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {row.id}
                      </TableCell>
                      <TableCell align="center">{row.name}</TableCell>
                      <TableCell align="center">{row.phone}</TableCell>
                      <TableCell align="center">{row.title}</TableCell>
                      <TableCell align="center">
                        {row.currentSpecialization}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
          <div className="column-3">
            <label style={{ fontWeight: "bold", fontSize: "20px" }}>
              Filter
            </label>
            <br />
            <div className="filter-detail">
              <label>Location</label>
              <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={top100Films}
                sx={{ width: "100%" }}
                renderInput={(params) => <TextField {...params} />}
              />
              <br />
              <label>Title</label>
              <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={top100Films}
                sx={{ width: "100%" }}
                renderInput={(params) => <TextField {...params} />}
              />
              <br />
              <label>Season</label>
              <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={top100Films}
                sx={{ width: "100%" }}
                renderInput={(params) => <TextField {...params} />}
              />
              <br />
              <label>Date</label>
              <DatePicker
                sx={{
                  width: "100%",
                }}
              />
              <br />
              <label>Status</label>
              <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={top100Films}
                sx={{ width: "100%" }}
                renderInput={(params) => <TextField {...params} />}
              />
              <br />
            </div>
            <Button variant="contained">
              Send
            </Button>
          </div>
        </div>
      </div>
      <Footer />
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

const top100Films = [
    { label: "The Shawshank Redemption", year: 1994 },
    { label: "The Godfather", year: 1972 },
    { label: "The Godfather: Part II", year: 1974 },
    { label: "The Dark Knight", year: 2008 },
    { label: "12 Angry Men", year: 1957 },
    { label: "Schindler's List", year: 1993 },
    { label: "Pulp Fiction", year: 1994 },
    {
      label: "The Lord of the Rings: The Return of the King",
      year: 2003,
    },
  ];

export default TraineeManagementTable;
