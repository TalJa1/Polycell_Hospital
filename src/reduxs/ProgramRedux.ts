import {
  FETCH_CREATE_CLASS_DATA_FAILURE,
  FETCH_CREATE_CLASS_DATA_REQUEST,
  FETCH_CREATE_CLASS_DATA_SUCCESS,
  FETCH_PROGRAMS_ERROR,
  FETCH_PROGRAMS_REQUEST,
  FETCH_PROGRAMS_SUCCESS,
  FETCH_PROGRAM_CONTENT_REQUEST,
  FETCH_PROGRAM_CONTENT_SUCCESS,
} from "../utils/constant";
import { ProgramAction } from "../actions/programAction";
import { CreateClassFormData, Program, Topic } from "../models/programAddModel";

interface initState {
  createClassData: CreateClassFormData;
  loading: boolean;
  error: string | null;
  totalPage: number;
  page: number;
  programs: Program[];
  program: Program | null;
  topics: Topic[];
}

const initialState: initState = {
  createClassData: {
    programs: [],
    cycles: [],
    trainers: [],
  },
  loading: false,
  error: null,
  totalPage: 0,
  page: 1,
  programs: [],
  program: null,
  topics: [],
};

const ProgramReducer = (
  state = initialState,
  action: ProgramAction
): initState => {
  switch (action.type) {
    case FETCH_CREATE_CLASS_DATA_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_CREATE_CLASS_DATA_SUCCESS:
      return {
        ...state,
        createClassData: action.payload,
        loading: false,
        error: null,
      };
    case FETCH_CREATE_CLASS_DATA_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case FETCH_PROGRAMS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_PROGRAMS_SUCCESS:
      console.log("program redux >> ", action.payload);
      return {
        ...state,
        programs: action.payload,
        loading: false,
        error: null,
      };
    case FETCH_PROGRAMS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    case FETCH_PROGRAM_CONTENT_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_PROGRAM_CONTENT_SUCCESS:
      // console.log("action >> ", action.payload);
      return {
        ...state,

        topics: action.payload,
        loading: false,
        error: null,
      };
    default:
      return state;
  }
};

export default ProgramReducer;
