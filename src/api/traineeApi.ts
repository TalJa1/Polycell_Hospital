import axiosClient from "./axiosClient";

const traineeApi = {
  getTraineeList: (params: any) => {
    const url: string = "/v1/trainee";
    return axiosClient.get(url, { params });
  },
  getTraineeAttendance: (params: any, id: string) => {
    console.log("id >> ", id)
    const url: string = `/v1/attendance/trainee/${id}`;
    return axiosClient.get(url, { params });
  },
};

export default traineeApi;
