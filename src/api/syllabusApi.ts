import axiosClient from "./axiosClient";

const syllabusApi = {
  getSyllabusByProgramId: (params: string) => {
    const url: string =
      `/v1/syllabus/program/${params}`;
    return axiosClient.get(url);
  },
};

export default syllabusApi;