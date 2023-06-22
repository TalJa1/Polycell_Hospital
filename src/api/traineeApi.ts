import axiosClient from "./axiosClient";

const traineeApi = {
  getTraineeList: (params: any) => {
    const url: string = "/v1/trainee";

    return axiosClient.get(url, { params });
  },
};

export default traineeApi;
