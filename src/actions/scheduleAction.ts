import { Schedule } from "../models/scheduleModel";
import { FETCH_SCHEDULE_ERROR, FETCH_SCHEDULE_REQUEST, FETCH_SCHEDULE_SUCCESS } from "../utils/constant";






export const fetchScheduleRequest = (): FetchScheduleRequestAction => ({
    type: FETCH_SCHEDULE_REQUEST,
  });
  
  export const fetchScheduleSuccess = (
    schedule: Schedule[]
  ): FetchScheduleSuccessAction => ({
    type: FETCH_SCHEDULE_SUCCESS,
    payload: schedule,
  });
  
  export const fetchScheduleFailure = (
    error: string
  ): FetchScheduleErrorAction => ({
    type: FETCH_SCHEDULE_ERROR,
    payload: error,
  });








export type ScheduleAction =
  | FetchScheduleRequestAction
  | FetchScheduleSuccessAction
  | FetchScheduleErrorAction;


//INTERFACE
interface FetchScheduleRequestAction {
    type: typeof FETCH_SCHEDULE_REQUEST;
  }
  
  interface FetchScheduleSuccessAction {
    type: typeof FETCH_SCHEDULE_SUCCESS;
    payload: Schedule[];
  }
  
  interface FetchScheduleErrorAction {
    type: typeof FETCH_SCHEDULE_ERROR;
    payload: string;
  }