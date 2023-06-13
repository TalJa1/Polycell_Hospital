
import { FETCH_PROGRAMS_FAILURE, FETCH_PROGRAMS_REQUEST, FETCH_PROGRAMS_SUCCESS } from "../utils/constant";
import { ProgramAction } from "../actions/programAction";
import { AddProgramType } from "../models/programAddModel";

  
  interface ProgramState {
    programs: AddProgramType[];
    loading: boolean;
    error: string | null;
  }
  
  const initialState: ProgramState = {
    programs: [],
    loading: false,
    error: null,
  };
  
  const programReducer = (state = initialState, action: ProgramAction): ProgramState => {
    switch (action.type) {
      case FETCH_PROGRAMS_REQUEST:
        return {
          ...state,
          loading: true,
          error: null,
        };
      case FETCH_PROGRAMS_SUCCESS:
        return {
          ...state,
          programs: action.payload,
          loading: false,
          error: null,
        };
      case FETCH_PROGRAMS_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default programReducer;
  