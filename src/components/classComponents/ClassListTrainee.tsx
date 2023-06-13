import React from "react";
import Menubar from "../layoutComponents/Menubar";
import {
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import ModeIcon from "@mui/icons-material/Mode";
import DeleteIcon from "@mui/icons-material/Delete";
import VisibilityIcon from "@mui/icons-material/Visibility";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import Footer from "../layoutComponents/Footer";
import Header from "../layoutComponents/Header";

const ClassListTrainee: React.FC = () => {
  return (
    <div className="container">
      <Menubar />
      <main className="rightlayout">
        <div className="class-container">
          <Header title="Trainee List" imageUrl="" />
          <div className="content-container">
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead
                  sx={{
                    backgroundColor: "#B3B3B3",
                  }}
                >
                  <TableRow>
                    <TableCell>Code</TableCell>
                    <TableCell align="center">Name</TableCell>
                    <TableCell align="center">Phone</TableCell>
                    <TableCell align="center">Title</TableCell>
                    <TableCell align="center">Status</TableCell>

                    <TableCell align="center">Action</TableCell>
                    {/* <TableCell align="center">Result</TableCell> */}
                    <TableCell align="center"></TableCell>
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
                      <TableCell align="center">{row.status}</TableCell>

                      <TableCell align="center">
                        <ModeIcon />
                        <DeleteIcon />
                        <Link to="/trainee-detail">
                          <VisibilityIcon />
                        </Link>
                      </TableCell>
                      {/* <TableCell align="center">
                        <ControlPointIcon />
                      </TableCell> */}
                      <TableCell align="center">
                        <Button
                          variant="contained"
                          sx={{
                            backgroundColor: "#000",
                          }}
                        >
                          Export
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
          <Footer />
        </div>
      </main>
    </div>
  );
};

function Student(
  id: string,
  name: string,
  phone: string,
  title: string,
  currentSpecialization: string,
  status: string
) {
  return { id, name, phone, title, currentSpecialization, status };
}

const rows = [
  Student("SE1615", "Pham Van A", "0908775112", "BS", "Surgery 1", "pending"),
  Student("SE1615", "Pham Van A", "0908775112", "BS", "Surgery 1", "pending"),
  Student("SE1615", "Pham Van A", "0908775112", "BS", "Surgery 1", "pending"),
  Student("SE1615", "Pham Van A", "0908775112", "BS", "Surgery 1", "pending"),
  Student("SE1615", "Pham Van A", "0908775112", "BS", "Surgery 1", "pending"),
  Student("SE1615", "Pham Van A", "0908775112", "BS", "Surgery 1", "pending"),
];

export default ClassListTrainee;
