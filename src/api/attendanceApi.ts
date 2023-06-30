import axiosClient from "./axiosClient";

const attendanceApi = {
    getAttendanceOfTrainee: (traineeId: string) => {
      const url: string =
        `/v1/attendance/trainee/${traineeId}`;
      return axiosClient.get(url);
    }
  };
  
  export default attendanceApi;
  