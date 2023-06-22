import axiosClient from "./axiosClient";

const programApi = {
  getAllByTraineeId: (params: any) => {
    const url: string =
      "/v1/program/trainee/fce12db6-ebcc-4d60-bc6b-a357e8a96114";
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

export default programApi;
