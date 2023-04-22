import "../styles/Postdata.css";
import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import postApi from "../api/postApi";
import { fetchPost, getTotalPage, paging } from "../actions/postAction";
import { fetchUser } from "../actions/userAction";
import { Post } from "../models/postModel";
import { RootState } from "../reduxs/Root";
import userApi from "../api/userApi";
import { User } from "../models/userModel";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const Postdata: React.FC = () => {
  const [page, setPage] = React.useState<number>(1);
  const getPost: Post[] = useSelector((state: RootState) => state.post.list);
  // const getUser: User[] = useSelector((state: RootState) => state.user.list);
  const getUser: User[] = useSelector((state: any) => state.user.list);
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

  const handleClick = (postid: number) => {
    console.log("CLicked >> " + postid);
  };

  const handelPaging = (event: React.ChangeEvent<unknown>, newPage: number) => {
    try {
      setPage(newPage);
    } catch (error) {
      console.log(error);
    }
    // console.log("new page >>" + page);
  };

  console.log("pagenow >>" + page);

  return (
    <div>
      {getPost.map((value, key) => {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        var user: User | undefined = getUser.find(
          (v: User) => v.id === value.userId
        );
        // console.log("get user >> " + user?.name);
        return (
          <div
            key={key}
            className="postDiv"
            onClick={() => handleClick(value.id)}
          >
            <div style={{ textAlign: "center", fontSize: "20px" }}>
              {value.title}
            </div>
            <div style={{ paddingLeft: "1%" }}>
              Author: {user?.name ?? "unknown"}
            </div>
            <div style={{ paddingLeft: "1%" }}>
              Email: {user?.email ?? "unknown"}
            </div>
          </div>
        );
      })}
      <div>
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
      </div>
    </div>
  );
};

export default Postdata;
