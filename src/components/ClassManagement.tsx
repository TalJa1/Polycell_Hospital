import "../styles/Postdata.css";
import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import postApi from "../api/postApi";
import { fetchPost, getTotalPage, paging } from "../actions/postAction";
import { fetchUser } from "../actions/userAction";
// import { Post } from "../models/postModel";
import { RootState } from "../reduxs/Root";
import userApi from "../api/userApi";
// import { User } from "../models/userModel";
import Button from "@mui/material/Button";
// import Pagination from "@mui/material/Pagination";
// import PaginationItem from "@mui/material/PaginationItem";
// import ArrowBackIcon from "@mui/icons-material/ArrowBack";
// import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Header from "./Header";
import Footer from "./Footer";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";

const Postdata: React.FC = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [page, setPage] = React.useState<number>(1);
  const [search, setSearch] = React.useState<string>("");
  // const getPost: Post[] = useSelector((state: RootState) => state.post.list);
  // const getUser: User[] = useSelector((state: any) => state.user.list);
  const TotalPage: number = useSelector(
    (state: RootState) => state.post.totalpage
  );
  const dispatch = useDispatch();
  const getPage = useSelector<any>((state) => state.post.page);

  console.log("total page >>" + TotalPage);
  const fetchPostApi = useCallback(async () => {
    try {
      const param = {
        _page: getPage,
        _limit: 9,
      };
      const response = await postApi.getAll(param);
      const response1 = await userApi.getAll(null);
      console.log("response user data >> " + response1.data);
      const action = fetchPost(response.data);
      const action1 = fetchUser(response1.data);
      console.log(response1.data.map((a: any) => a));
      const actionPage = getTotalPage(
        response.headers["x-total-count"] / param._limit
      );
      const action2 = paging(page);
      dispatch(action);
      dispatch(action2);
      dispatch(action1);
      dispatch(actionPage);
    } catch (error) {
      console.log(error);
    }
  }, [dispatch, getPage, page]);

  useEffect(() => {
    fetchPostApi();
  }, [fetchPostApi]);

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

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  console.log("pagenow >>" + page);

  return (
    <div className="class-container">
      <Header title="Class Management" imageUrl="" />
      <div className="content-container">
        <div className="tabbar">
          <div className="add-btn">
            <Button variant="contained" sx={{ color: "black" }}>
              Add
            </Button>
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
        <div className="class-detail">
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
              <Grid item xs={9} md={9}></Grid>
              <Grid
                item
                xs={3}
                md={3}
                direction="column"
                sx={{ backgroundColor: "black", height: "100%" }}
              ></Grid>
            </Grid>
          </Box>
        </div>
      </div>

      {/* For paging */}
      {/* <div className="pagingDiv">
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
      </div> */}
      <Footer />
    </div>
  );
};

export default Postdata;
