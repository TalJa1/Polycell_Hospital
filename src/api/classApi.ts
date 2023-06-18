import axiosClient from "./axiosClient";

const classApi = {
  getAll: (params: any) => {
    const url: string = "/v1/class/search";
    console.log(params);
    return axiosClient.get(url, { params });
  },
  getbyId: (params: any, id: any) => {
    const url: string = `/v1/class/${id}`;
    console.log("URL >>>>> ", url);
    return axiosClient.get(url, { params });
  },
  create: (params: any) => {
    const url = `/posts`;
    return axiosClient.post(url, params);
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

export default classApi;
