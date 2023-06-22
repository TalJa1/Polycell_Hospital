import { Trainee } from "../models/traineeModel";
import {
  FETCH_TRAINEES_REQUEST,
  FETCH_TRAINEES_ERROR,
  FETCH_TRAINEES_SUCCESS,
  FETCH_TRAINEES_TOTAL_REQUEST,
} from "../utils/constant";

export type TraineeAction =
  | FetchTraineesRequestAction
  | FetchTraineesSuccessAction
  | FetchTraineesErrorAction
  | FetchTraineesTotalRequestAction;

  export const fetchTraineeTotalSuccess = (
    total: number
  ): FetchTraineesTotalRequestAction => ({
    type: FETCH_TRAINEES_TOTAL_REQUEST,
    payload: total,
  });
  

export const fetchTraineesRequest = (): FetchTraineesRequestAction => ({
  type: FETCH_TRAINEES_REQUEST,
});

export const fetchTraineesSuccess = (
  trainees: Trainee[]
): FetchTraineesSuccessAction => ({
  type: FETCH_TRAINEES_SUCCESS,
  payload: trainees,
});

export const fetchTraineesFailure = (
  error: string
): FetchTraineesErrorAction => ({
  type: FETCH_TRAINEES_ERROR,
  payload: error,
});

//INTERFACE
interface FetchTraineesTotalRequestAction {
  type: typeof FETCH_TRAINEES_TOTAL_REQUEST;
  payload: number;

}

interface FetchTraineesRequestAction {
  type: typeof FETCH_TRAINEES_REQUEST;
}

interface FetchTraineesSuccessAction {
  type: typeof FETCH_TRAINEES_SUCCESS;
  payload: Trainee[];
}

interface FetchTraineesErrorAction {
  type: typeof FETCH_TRAINEES_ERROR;
  payload: string;
}
