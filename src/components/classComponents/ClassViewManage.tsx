/* eslint-disable no-lone-blocks */
import "../../styles/Postdata.css";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchClass } from "../../actions/classAction";
import classApi from "../../api/classApi";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import Header from "../layoutComponents/Header";
import Footer from "../layoutComponents/Footer";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import TextField from "@mui/material/TextField";
import { Alert, Autocomplete, Box, Snackbar, Tab, Tabs } from "@mui/material";
import ModeIcon from "@mui/icons-material/Mode";
import DeleteIcon from "@mui/icons-material/Delete";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Class } from "../../models/classManagementModel";
import { RootState } from "../../reduxs/Root";
import { SnackbarState } from "../../utils/constant";

const Postdata: React.FC = () => {
  // const [page, setPage] = React.useState<number>(1);
  const [search, setSearch] = React.useState<string>("");
  const getClass: Class[] = useSelector((state: RootState) => state.class.list);
  // const getUser: User[] = useSelector((state: any) => state.user.list);
  const dispatch = useDispatch();
  const location = useLocation();
  const message: string = location.state?.message;
  const navigate = useNavigate();
  // const TotalPage: number = useSelector(
  //   (state: RootState) => state.post.totalpage
  // );
  // const getPage = useSelector<any>((state) => state.post.page);
  const [tabsValue, setTabsValue] = React.useState(0);
  const handleChangeTabs = (event: React.SyntheticEvent, newValue: number) => {
    setTabsValue(newValue);
  };

  const [showSnackbar, setShowSnackbar] = React.useState<SnackbarState>({
    open: false,
    status: "SUCCESS",
    message: "",
  });

  const handleCloseSnackbar = (
    event: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    setShowSnackbar({
      open: false,
      status: "",
      message: "",
    });
  };

  useEffect(() => {

    if (message?.length > 0) {
      setShowSnackbar({
        open: true,
        status: "SUCCESS",
        message: message,
      });
      navigate(location.pathname, { replace: true });
    }
  }, [location.pathname, message, navigate]);

  const fetchClassApi = React.useCallback(async () => {
    try {
      const param = {
        filterAnd:
          tabsValue === 0
            ? "status|eq|PLANNING"
            : tabsValue === 1
            ? "status|eq|PENDING"
            : tabsValue === 2
            ? "status|eq|OPENING"
            : tabsValue === 3
            ? "status|eq|CLOSED"
            : "status|eq|REJECT",
        page: 0,
        size: 10,
      };
      const response = await classApi.getAll(param);
      // console.log("Resp>>>> ", response);
      // console.log("Resp data >>>> ", response.data);
      const action = fetchClass(response.data.items);
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
  }, [dispatch, tabsValue]);

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
                    {/* <Tab label="All" {...a11yProps(0)} /> */}
                    <Tab label="Planning" {...a11yProps(0)} />
                    <Tab label="Pending" {...a11yProps(1)} />
                    <Tab label="Opening" {...a11yProps(2)} />
                    <Tab label="Closed" {...a11yProps(3)} />
                    <Tab label="Rejected" {...a11yProps(3)} />
                  </Tabs>
                </Box>
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
                  {getClass.map((item, index) => (
                    <div key={index}>
                      <div
                        className={`class-item ${
                          index % 2 === 0 ? "even" : "odd"
                        }`}
                      >
                        <span>{item.name}</span>
                        <span>{item.program.code}</span>
                        <span>{item.status}</span>
                        <span>{item.createdDate.toString()}</span>
                        <span>
                          <Link to={`/class-detail/${item.id}`}>
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
      <Snackbar
        open={showSnackbar.open}
        autoHideDuration={5000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        {showSnackbar.status === "SUCCESS" ? (
          <Alert variant="filled" severity="success">
            {showSnackbar.message}
          </Alert>
        ) : (
          <Alert variant="filled" severity="error">
            {showSnackbar.message}
          </Alert>
        )}
      </Snackbar>
    </div>
  );
};

export default Postdata;

const filterCreatedDate = ["Most recently", "Oldest"];

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
