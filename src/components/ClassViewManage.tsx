/* eslint-disable no-lone-blocks */
import "../styles/Postdata.css";
import React from "react";
// import { useDispatch, useSelector } from "react-redux";
// import postApi from "../api/postApi";
// import { fetchPost, getTotalPage, paging } from "../actions/postAction";
// import { fetchUser } from "../actions/userAction";
// import { Post } from "../models/postModel";
// import { RootState } from "../reduxs/Root";
// import userApi from "../api/userApi";
// import { User } from "../models/userModel";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import Header from "./Header";
import Footer from "./Footer";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import TextField from "@mui/material/TextField";
import { Autocomplete } from "@mui/material";
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
  // const TotalPage: number = useSelector(
  //   (state: RootState) => state.post.totalpage
  // );
  // const dispatch = useDispatch();
  // const getPage = useSelector<any>((state) => state.post.page);

  // const fetchPostApi = useCallback(async () => {
  //   try {
  //     const param = {
  //       _page: getPage,
  //       _limit: 9,
  //     };
  //     const response = await postApi.getAll(param);
  //     const response1 = await userApi.getAll(null);
  //     console.log("response user data >> " + response1.data);
  //     const action = fetchPost(response.data);
  //     const action1 = fetchUser(response1.data);
  //     console.log(response1.data.map((a: any) => a));
  //     const actionPage = getTotalPage(
  //       response.headers["x-total-count"] / param._limit
  //     );
  //     const action2 = paging(page);
  //     dispatch(action);
  //     dispatch(action2);
  //     dispatch(action1);
  //     dispatch(actionPage);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }, [dispatch, getPage, page]);

  // useEffect(() => {
  //   fetchPostApi();
  // }, [fetchPostApi]);

  // const handleClick = (postid: number) => {
  //   console.log("CLicked >> " + postid);
  // };

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
                <div className="tabs-position">
                  <strong style={{ color: "black" }}>Status: </strong>
                  <Button
                    variant="outlined"
                    sx={{
                      ":hover": {
                        color: "black",
                      },
                    }}
                  >
                    Pending
                  </Button>
                  <Button
                    variant="outlined"
                    sx={{
                      ":hover": {
                        color: "black",
                      },
                    }}
                  >
                    Rejected
                  </Button>
                  <Button
                    variant="outlined"
                    sx={{
                      ":hover": {
                        color: "black",
                      },
                    }}
                  >
                    Accepted
                  </Button>
                </div>
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
