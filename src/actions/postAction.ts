export const fetchPost = (payload: any) => ({
  type: "GETPOST",
  payload: payload,
});

export const getTotalPage = (payload: any) => {
  return {
    type: "TOTAL_PAGE",
    payload: payload,
  };
};
