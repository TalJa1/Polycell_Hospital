import axiosClient from "./axiosClient";

const userApi = {
  getAll: (params: any, id: number) => {
    console.log("id >> " + id);
    const url: string = `/users/${id}`;
    return axiosClient.get(url, { params });
  },
  // deleteBy: (param: any) => {
  //   const url = `/posts/${param}`;
  //   return axiosClient.delete(url);
  // },
  // create: (params: any) => {
  //   const url = `/posts`;
  //   return axiosClient.post(url, params);
  // },
  // edit: (id: number, params: any) => {
  //   console.log("id ", id + "param ", params);
  //   const url = `/posts/${id}`;
  //   return axiosClient.put(url, params);
  // },
};

export default userApi;
