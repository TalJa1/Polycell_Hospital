
//payload : list user
export const fetchUser = (payload: any) => ({
  type: "FETCHUSER",
  payload : payload,
});

//payload : user id
export const fetchUserbyID = (payload: number) => ({
  type: "FETCHUSERBYID",
  payload : payload,
})