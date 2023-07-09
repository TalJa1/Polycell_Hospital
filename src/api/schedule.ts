import axiosClient from "./axiosClient";

const scheduleApi = {
    getScheduleOfTrainer: (trainerId: string) => {
      const url: string =
        `/v1/schedule/trainer/${trainerId}`;
      return axiosClient.get(url);
    },
    getScheduleOfTrainee: (traineeId: string) => {
      const url: string =
        `/v1/schedule/trainee/${traineeId}`;
      return axiosClient.get(url);
    }
  };
  
  export default scheduleApi;
  