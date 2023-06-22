import programApi from "../api/programApi";
import { CreateClassFormData, Program, Topic } from "../models/programAddModel";
import {
  FETCH_CREATE_CLASS_DATA_FAILURE,
  FETCH_CREATE_CLASS_DATA_REQUEST,
  FETCH_CREATE_CLASS_DATA_SUCCESS,
  FETCH_PROGRAMS_ERROR,
  FETCH_PROGRAMS_REQUEST,
  FETCH_PROGRAMS_SUCCESS,
  FETCH_PROGRAM_CONTENT_ERROR,
  FETCH_PROGRAM_CONTENT_REQUEST,
  FETCH_PROGRAM_CONTENT_SUCCESS,
} from "../utils/constant";

export type ProgramAction =
  | FetchCreateClassDataRequestAction
  | FetchCreateClassDataSuccessAction
  | FetchCreateClassDataFailureAction
  | FetchProgramsAction
  | FetchProgramsSuccessAction
  | FetchProgramsErrorAction
  | FetchProgramContentAction
  | FetchProgramContentSuccessAction;

// ACTION

//CREATE_CLASS_DATA_ACTION
export const fetchCreateClassDataRequest =
  (): FetchCreateClassDataRequestAction => ({
    type: FETCH_CREATE_CLASS_DATA_REQUEST,
  });

export const fetchCreateClassDataSuccess = (
  createClassData: CreateClassFormData
): FetchCreateClassDataSuccessAction => ({
  type: FETCH_CREATE_CLASS_DATA_SUCCESS,
  payload: createClassData,
});

export const fetchCreateClassDataFailure = (
  error: string
): FetchCreateClassDataFailureAction => ({
  type: FETCH_CREATE_CLASS_DATA_FAILURE,
  payload: error,
});

//PROGRAM_ACTION
export const fetchPrograms = (): FetchProgramsAction => ({
  type: FETCH_PROGRAMS_REQUEST,
});

export const fetchProgramsSuccess = (
  programs: Program[]
): FetchProgramsSuccessAction => ({
  type: FETCH_PROGRAMS_SUCCESS,
  payload: programs,
});

export const fetchProgramsError = (
  error: string
): FetchProgramsErrorAction => ({
  type: FETCH_PROGRAMS_ERROR,
  error,
});

//PROGRAM_CONTENT_ACTION
export const fetchProgramContent = (): FetchProgramContentAction => ({
  type: FETCH_PROGRAM_CONTENT_REQUEST,
});

export const fetchProgramContentSuccess = (
  topics: Topic[]
): FetchProgramContentSuccessAction => ({
  type: FETCH_PROGRAM_CONTENT_SUCCESS,
  payload: topics,
});

export const fetchProgramContentError = (
  error: string
): FetchProgramContentErrorAction => ({
  type: FETCH_PROGRAM_CONTENT_ERROR,
  error,
});

// INTERFACE
interface FetchCreateClassDataRequestAction {
  type: typeof FETCH_CREATE_CLASS_DATA_REQUEST;
}

interface FetchCreateClassDataSuccessAction {
  type: typeof FETCH_CREATE_CLASS_DATA_SUCCESS;
  payload: CreateClassFormData;
}

interface FetchCreateClassDataFailureAction {
  type: typeof FETCH_CREATE_CLASS_DATA_FAILURE;
  payload: string;
}

// Define action interfaces
export interface FetchProgramsAction {
  type: typeof FETCH_PROGRAMS_REQUEST;
}

export interface FetchProgramsSuccessAction {
  type: typeof FETCH_PROGRAMS_SUCCESS;
  payload: Program[];
}

export interface FetchProgramsErrorAction {
  type: typeof FETCH_PROGRAMS_ERROR;
  error: string;
}

//
export interface FetchProgramContentAction {
  type: typeof FETCH_PROGRAM_CONTENT_REQUEST;
}

export interface FetchProgramContentSuccessAction {
  type: typeof FETCH_PROGRAM_CONTENT_SUCCESS;
  payload: Topic[];
}

export interface FetchProgramContentErrorAction {
  type: typeof FETCH_PROGRAM_CONTENT_ERROR;
  error: string;
}