import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import postApi from "../api/postApi";
import { fetchPost, getTotalPage } from "../actions/postAction";
import { fetchUser } from "../actions/userAction";
import { Post } from "../models/postModel";
import { RootState } from "../reduxs/Root";
import userApi from "../api/userApi";
// import { User } from "../models/userModel";

const Postdata: React.FC = () => {
  const getPost: Post[] = useSelector((state: RootState) => state.post.list);
  // const getUser: User[] = useSelector((state: RootState) => state.user.list);
  const getUser = useSelector((state: any) => state.user.list);
  const dispatch = useDispatch();
  const getPage = useSelector<any>((state) => state.post.page);
  // const getUserbyID = useSelector<any>((state) => state.user.user);

  const fetchPostApi = useCallback(async () => {
    try {
      const param = {
        _page: getPage,
        _limit: 5,
      };
      const response = await postApi.getAll(param);
      const response1 = await userApi.getAll(param);
      // console.log("response data >> " + response.headers);
      const action = fetchPost(response.data);
      const action1 = fetchUser(response1.data);
      console.log(response1.data.map((a: any) => a));
      const actionPage = getTotalPage(
        response.headers["x-total-count"] / param._limit
      );
      dispatch(action);
      dispatch(action1);
      dispatch(actionPage);
    } catch (error) {
      console.log(error);
    }
  }, [dispatch, getPage]);

  useEffect(() => {
    fetchPostApi();
  }, [fetchPostApi]);

  return (
    <div>
      {getPost.map((value, key) => {
        return (
          <div key={key}>
            {value.title}
            <div>
              {getUser.map((value: any, key: any) => {
                return <div key={key}>{value.name}</div>;
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Postdata;
