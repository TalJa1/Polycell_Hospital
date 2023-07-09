import { Syllabus } from "../models/syllabusModel";
import { FETCH_SYLLABUS_REQUEST } from "../utils/constant";

interface initState {
  syllabus: Syllabus;
  list: Array<Syllabus>;
  page: number;
  loading: boolean;
}

const initialState: initState = {
  syllabus: {
    id: "",
    name: "",
    description: "",
    passCriteria: "",
    totalSessions: 0,
    assessmentSchemes: [],
    materials: [],
    modules: [],
  },
  list: [],
  page: 0,
  loading: false,
};

interface Props {
  type: string;
  payload: any;
}

const SyllabusReducer = (state = initialState, { type, payload }: Props) => {
  switch (type) {
    case FETCH_SYLLABUS_REQUEST:
      return { ...state, syllabus: payload };

    default:
      return state;
  }
};

export default SyllabusReducer;
