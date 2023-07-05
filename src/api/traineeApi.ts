import axiosClient from "./axiosClient";

const traineeApi = {
  getTraineeList: (params: any) => {
    const url: string = "/v1/trainee";

    return axiosClient.get(url, { params });
  },
  importTrainee: (file: File) => {
    const formData = new FormData();
    formData.append('file', file);

    return axiosClient.post(
      'http://18.138.196.252:8080/htms/api/v1/trainee/import',
      formData,
      {
        headers: {
          'accept': '*/*',
          'Content-Type': 'multipart/form-data',
        },
      }
    );
  }
};

export default traineeApi;
