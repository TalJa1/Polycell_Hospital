import React from "react";
import { Button, Autocomplete, TextField } from "@mui/material";
// import { TimePicker } from "@mui/x-date-pickers";
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
                <span>Created Date</span>
                <span>Options</span>
              </div>
              <div className="class-info">
                {classDetail.map((item, index) => (
                  <div key={index}>
                    <div
                      className={`class-item ${
                        index % 2 === 0 ? "even" : "odd"
                      }`}
                    >
                      <span>{item.course}</span>
                      <span>{item.class}</span>
                      <span>{item.quantity}</span>
                      <span>{item.status}</span>
                      <span>{item.createdDate}</span>
                      <span>
                        <Link to="/class-approval">
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
              <label>Create Date</label>
              <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={top100Films}
                sx={{ width: "100%" }}
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
  "Most recently","Old news"
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
    createdDate: '20/10/2023'
  },
  {
    course: "PPG202",
    class: "SS021",
    quantity: "25",
    status: "pending",
    trainer: "Pham Van B",
    duetime: "7am-9am (t2,t6)",
    deparment: "A",
    createdDate: '20/10/2023'
  },
];
