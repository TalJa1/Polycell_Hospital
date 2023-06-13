
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
