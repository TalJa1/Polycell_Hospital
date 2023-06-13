
import { Dispatch } from 'redux';
import { FETCH_PROGRAMS_FAILURE, FETCH_PROGRAMS_REQUEST, FETCH_PROGRAMS_SUCCESS } from '../utils/constant';
import programApi from '../api/programApi';
import { CustomHookAddProgram } from '../models/programAddModel';


interface FetchProgramsRequestAction {
  type: typeof FETCH_PROGRAMS_REQUEST;
}

interface FetchProgramsSuccessAction {
  type: typeof FETCH_PROGRAMS_SUCCESS;
  payload: CustomHookAddProgram[];
}

interface FetchProgramsFailureAction {
  type: typeof FETCH_PROGRAMS_FAILURE;
  payload: string;
}

export type ProgramAction =
  | FetchProgramsRequestAction
  | FetchProgramsSuccessAction
  | FetchProgramsFailureAction;

export const fetchProgramsRequest = (): FetchProgramsRequestAction => ({
  type: FETCH_PROGRAMS_REQUEST,
});

export const fetchProgramsSuccess = (programs: CustomHookAddProgram[]): FetchProgramsSuccessAction => ({
  type: FETCH_PROGRAMS_SUCCESS,
  payload: programs,
});

export const fetchProgramsFailure = (error: string): FetchProgramsFailureAction => ({
  type: FETCH_PROGRAMS_FAILURE,
  payload: error,
});

export const fetchPrograms = (param: any) => {
    return (dispatch: Dispatch<ProgramAction>) => {
      dispatch(fetchProgramsRequest());
      programApi
        .getAll(param)
        .then((response) => {
          const programs = response.data.programs as CustomHookAddProgram[];
          dispatch(fetchProgramsSuccess(programs));
        })
        .catch((error) => {
          dispatch(fetchProgramsFailure(error.message));
        });
    };
  };
