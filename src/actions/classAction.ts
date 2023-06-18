import { Dispatch } from "react";
import classApi from "../api/classApi";
import { CREATE_CLASS_REQUEST } from "../utils/constant";

//payload : list post
export const fetchClass = (payload: any) => ({
  type: "GETCLASS",
  payload: payload,
});

export const fetchClassDetail = (payload: any) => ({
  type: "CLASS_DETAIL",
  payload: payload,
});

//payload : total page number
export const getTotalPage = (payload: number) => {
  return {
    type: "TOTAL_PAGE",
    payload: payload,
  };
};

export const paging = (payload: number) => {
  return {
    type: "PAGING",
    payload: payload,
  };
};

// -----------
export const createClassRequest = (): CreateClassRequestAction => ({
  type: CREATE_CLASS_REQUEST,
});

export const createClassSuccess = (response: any): CreateClassSuccessAction => ({
  type: CREATE_CLASS_REQUEST,
  payload: response
});

export const createClass = (
  param: any
) => {
  return (dispatch: Dispatch<ClassAction>) => {
    dispatch(createClassRequest());
    classApi.create(param)
      .then((response) => {
        // Handle success if needed
        dispatch(createClassSuccess(response.data));
      })
      .catch((error) => {
        // Handle error if needed
      });
  };
};


interface CreateClassRequestAction {
  type: string;
}

interface CreateClassSuccessAction {
  type: string;
  payload: any;
}

export type ClassAction =
  | CreateClassRequestAction;
