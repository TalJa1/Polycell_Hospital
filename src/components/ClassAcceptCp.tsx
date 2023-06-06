import React from "react";
import { Button, Autocomplete, TextField } from "@mui/material";
import { TimePicker } from "@mui/x-date-pickers";
import SendIcon from "@mui/icons-material/Send";
import Header from "./Header";
import Footer from "./Footer";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { Link } from "react-router-dom";

const ClassAcceptCp: React.FC = () => {
  const [search, setSearch] = React.useState<string>("");

  const handleSearch = (input: string) => {
    setSearch(input);
    console.log(input);
  };
  return (
    <div className="class-container">
      <Header title="Class Acceptance" imageUrl="" />
      <div className="content-container">
        <div className="tabbar">
          <div className="search-item">
            <input
              type="text"
              placeholder="Search"
              value={search}
              onChange={(e) => handleSearch(e.target.value)}
            />
          </div>
        </div>
        <div className="class-detail">
          <div className="column-9">
            <div className="class-show">
              <div className="lable-div">
                <span>Courses</span>
                <span>Classes</span>
                <span>Quantities</span>
                <span>Statuses</span>
                <span>Trainers</span>
                <span>Due time</span>
                <span>Departments</span>
                <span>Options</span>
              </div>
              <div className="class-info">
                {classDetail.map((item, index) => (
                  <div>
                    <div
                      className={`class-item ${
                        index % 2 === 0 ? "even" : "odd"
                      }`}
                    >
                      <span>{item.course}</span>
                      <span>{item.class}</span>
                      <span>{item.quantity}</span>
                      <span>{item.status}</span>
                      <span>{item.trainer}</span>
                      <span className="content">{item.duetime}</span>
                      <span>{item.deparment}</span>
                      <span>
                        <Link to="/">
                          <VisibilityIcon sx={{ color: "blue" }} />
                        </Link>
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
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
              <label>Type</label>
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
              <label>From</label>
              <span>
                <TimePicker
                  sx={{
                    width: "70%",
                  }}
                />
              </span>
              <label>To</label>
              <span>
                <TimePicker
                  sx={{
                    width: "70%",
                  }}
                />
              </span>
              <br />
              <label>Sort by</label>
              <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={top100Films}
                sx={{ width: "60%" }}
                renderInput={(params) => <TextField {...params} />}
              />
              <br />
            </div>
            <Button variant="contained" endIcon={<SendIcon />}>
              Send
            </Button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ClassAcceptCp;

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

const classDetail = [
  {
    course: "PPG201",
    class: "SS011",
    quantity: "30",
    status: "pending",
    trainer: "Pham Van A",
    duetime: "7am-9am (t4,t7)",
    deparment: "A",
  },
  {
    course: "PPG202",
    class: "SS021",
    quantity: "25",
    status: "pending",
    trainer: "Pham Van B",
    duetime: "7am-9am (t2,t6)",
    deparment: "A",
  },
];
