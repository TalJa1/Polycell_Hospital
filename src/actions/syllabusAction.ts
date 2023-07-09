import { Syllabus } from "../models/syllabusModel";
import { FETCH_SYLLABUS_REQUEST } from "../utils/constant";

export const fetchSyllbusByProgramId = (syllabus: Syllabus) => ({
  type: FETCH_SYLLABUS_REQUEST,
  payload: syllabus,
});
