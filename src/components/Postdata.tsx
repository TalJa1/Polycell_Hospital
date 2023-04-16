import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import postApi from "../api/postApi";
import { fetchPost, getTotalPage } from "../actions/postAction";
import { Post } from "../models/postModel";
import { RootState } from "../reduxs/Root";

const Postdata: React.FC = () => {
  const getPost: Post[] = useSelector((state: RootState) => state.post.list);
  const dispatch = useDispatch();
  const getPage = useSelector<any>((state) => state.post.page);

  const fetchPostApi = useCallback(async () => {
    try {
      const param = {
        _page: getPage,
        _limit: 5,
      };
      const response = await postApi.getAll(param);
      console.log("response data >> " + response.headers);
      const action = fetchPost(response.data);
      const actionPage = getTotalPage(
        response.headers["x-total-count"] / param._limit
      );
      dispatch(action);
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
        return <div key={key}>{value.title}</div>;
      })}
    </div>
  );
};

export default Postdata;
