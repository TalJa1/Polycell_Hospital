import React from "react";
import { Button, Autocomplete, TextField } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import Header from "../layoutComponents/Header";
import Footer from "../layoutComponents/Footer";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../reduxs/Root";
import { Class } from "../../models/classManagementModel";
import classApi from "../../api/classApi";
import { fetchClass } from "../../actions/classAction";

const ClassAcceptCp: React.FC = () => {
  const getClassRequestAccept: Class[] = useSelector(
    (state: RootState) => state.class.list
  );
  const dispatch = useDispatch();
  const [search, setSearch] = React.useState<string>("");

  const handleSearch = (input: string) => {
    setSearch(input);
    console.log(input);
  };

  const fetchClassApi = React.useCallback(async () => {
    try {
      const param = {
        filterAnd: "classApprovals.status|jn|PENDING",
        page: 0,
        size: 10,
      };
      const response = await classApi.getAll(param);
      console.log("response AC>>>>", response.data);
      const action = fetchClass(response.data);
      dispatch(action);
    } catch (error) {
      console.log(error);
    }
  }, [dispatch]);

  React.useEffect(() => {
    fetchClassApi();
  }, [fetchClassApi]);

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
                {/* <span>Quantities</span> */}
                <span>Statuses</span>
                <span>Created Date</span>
                <span>Options</span>
              </div>
              <div className="class-info">
                {getClassRequestAccept.map((item, index) => (
                  <div key={index}>
                    <div
                      className={`class-item ${
                        index % 2 === 0 ? "even" : "odd"
                      }`}
                    >
                      <span>{item.programCode}</span>
                      <span>{item.code}</span>
                      {/* <span>{item.trainees.length}</span> */}
                      <span>{item.status}</span>
                      <span>{item.createdDate.toString()}</span>
                      <span>
                        <Link to={`/class-approval/${item.id}`}>
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

const top100Films = ["Most recently", "Old news"];
