import axiosClient from "./axiosClient";

const programApi = {
  getAll: (params: any) => {
    const url : string = "/v1/program";
    return axiosClient.get(url);
  },
};

export default programApi;