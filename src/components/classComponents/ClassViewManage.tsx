/* eslint-disable no-lone-blocks */
import "../../styles/Postdata.css";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
// import postApi from "../api/classApi";
import { fetchClass, getTotalPage, paging } from "../../actions/classAction";
// import { fetchUser } from "../actions/userAction";
// import { Post } from "../models/postModel";
// import { RootState } from "../reduxs/Root";
// import { User } from "../models/userModel";
import classApi from "../../api/classApi";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import Header from "../layoutComponents/Header";
import Footer from "../layoutComponents/Footer";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import TextField from "@mui/material/TextField";
import { Autocomplete, Box, Tab, Tabs } from "@mui/material";
// import { TimePicker } from "@mui/x-date-pickers";
import ModeIcon from "@mui/icons-material/Mode";
import DeleteIcon from "@mui/icons-material/Delete";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { Link } from "react-router-dom";

const Postdata: React.FC = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [page, setPage] = React.useState<number>(1);
  const [search, setSearch] = React.useState<string>("");
  // const getPost: Post[] = useSelector((state: RootState) => state.post.list);
  // const getUser: User[] = useSelector((state: any) => state.user.list);
  const dispatch = useDispatch();
  // const TotalPage: number = useSelector(
  //   (state: RootState) => state.post.totalpage
  // );
  // const getPage = useSelector<any>((state) => state.post.page);
  const [tabsValue, setTabsValue] = React.useState(0);
  const handleChangeTabs = (event: React.SyntheticEvent, newValue: number) => {
    setTabsValue(newValue);
  };

  if (tabsValue === 0) {
    console.log("pending");
  } else if (tabsValue === 1) {
    console.log("accepted");
  } else {
    console.log("rejected");
  }

  const fetchClassApi = React.useCallback(async () => {
    try {
      const param = {
        // _page: getPage,
        // _limit: 9,
      };
      const response = await classApi.getAll(param);
      // const response1 = await userApi.getAll(null);
      const action = fetchClass(response.data);
      // const action1 = fetchUser(response1.data);
      // const actionPage = getTotalPage(
      //   response.headers["x-total-count"] / param._limit
      // );
      // const action2 = paging(page);
      dispatch(action);
      // dispatch(action2);
      // dispatch(action1);
      // dispatch(actionPage);
    } catch (error) {
      console.log(error);
    }
  }, [dispatch]);

  React.useEffect(() => {
    fetchClassApi();
  }, [fetchClassApi]);

  // const handelPaging = (event: React.ChangeEvent<unknown>, newPage: number) => {
  //   try {
  //     setPage(newPage);
  //   } catch (error) {
  //     console.log(error);
  //   }
  //   // console.log("new page >>" + page);
  // };

  const handleSearch = (input: string) => {
    setSearch(input);
    console.log(input);
  };

  function a11yProps(index: number) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }

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
              value={search}
              onChange={(e) => handleSearch(e.target.value)}
            />
          </div>
        </div>
        <div className="biggest-detail-container">
          <div className="class-detail">
            <div className="column-9">
              <div className="tabs-container">
                {/* <div className="tabs-position"> */}
                <strong
                  style={{
                    color: "black",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  Status:{" "}
                </strong>
                <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                  <Tabs
                    value={tabsValue}
                    onChange={handleChangeTabs}
                    aria-label="basic tabs example"
                  >
                    <Tab label="Pending" {...a11yProps(0)} />
                    <Tab label="Accepted" {...a11yProps(1)} />
                    <Tab label="Rejected" {...a11yProps(2)} />
                  </Tabs>
                </Box>
                {/* </div> */}
              </div>
              <div className="class-show">
                <div className="lable-div">
                  <span>Classes</span>
                  <span>Courses</span>
                  <span>Status</span>
                  <span>Created date</span>
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
                        <span>{item.class}</span>
                        <span>{item.course}</span>
                        <span>{item.status}</span>
                        <span>{item.createddate}</span>
                        <span>
                          <Link to="/class-detail">
                            <VisibilityIcon />
                          </Link>
                          <ModeIcon />
                          <DeleteIcon />
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
                <label>Created date</label>
                <Autocomplete
                  disablePortal
                  id="combo-box-demo"
                  options={filterCreatedDate}
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
      </div>
      <Footer />
    </div>
  );
};

export default Postdata;

const filterCreatedDate = ["Most recently", "Oldest"];

const classDetail = [
  {
    course: "PPG201",
    class: "SS011",
    quantity: "30",
    createddate: "20/10/2023",
    status: "pending",
    trainer: "Pham Van A",
    duetime: "7am-9am (t4,t7)",
    deparment: "A",
  },
  {
    course: "PPG202",
    class: "SS021",
    quantity: "25",
    createddate: "20/10/2023",
    status: "pending",
    trainer: "Pham Van B",
    duetime: "7am-9am (t2,t6)",
    deparment: "A",
  },
  {
    course: "PPG202",
    class: "SS021",
    quantity: "25",
    createddate: "20/10/2023",
    status: "pending",
    trainer: "Pham Van B",
    duetime: "7am-9am (t2,t6)",
    deparment: "A",
  },
  {
    course: "PPG202",
    class: "SS021",
    quantity: "25",
    createddate: "20/10/2023",
    status: "pending",
    trainer: "Pham Van B",
    duetime: "7am-9am (t2,t6)",
    deparment: "A",
  },
  {
    course: "PPG202",
    class: "SS021",
    quantity: "25",
    createddate: "20/10/2023",
    status: "pending",
    trainer: "Pham Van B",
    duetime: "7am-9am (t2,t6)",
    deparment: "A",
  },
];

{
  /* For paging */
}
{
  /* <div className="pagingDiv">
        <Pagination
          onChange={handelPaging}
          page={page}
          count={TotalPage}
          renderItem={(item) => (
            <PaginationItem
              slots={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
              {...item}
            />
          )}
        />
      </div> */
}
