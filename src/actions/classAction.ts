
//payload : list post
export const fetchClass = (payload: any) => ({
  type: "GETPOST",
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
