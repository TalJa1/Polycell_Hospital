import axiosClient from "./axiosClient";

const programApi = {
  getProgram: () => {
    const url: string =
      "/v1/program";
    return axiosClient.get(url);
  },
  getProgramByTraineeId: (params: string) => {
    const url: string =
      `/v1/program/trainee/${params}`;
    return axiosClient.get(url);
  },
  getProgramContent: (programId: string, trainerId: string) => {
    const url: string = `/v1/program/content?programId=${programId}&trainerId=${trainerId}`;
    return axiosClient.get(url);
  },
  getCreateClassForm: () => {
    const url = `v1/class/form`;
    return axiosClient.get(url);
  },
};
//fce12db6-ebcc-4d60-bc6b-a357e8a96114

export default programApi;
