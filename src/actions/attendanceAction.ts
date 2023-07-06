import { Attendance } from "../models/attendaceModel";
import { TraineeAttendance } from "../models/trainneAttendance";
import { FETCH_ATTENDANCE_ERROR, FETCH_ATTENDANCE_REQUEST, FETCH_ATTENDANCE_SUCCESS, FETCH_TRAINEES_ATTENDANCE } from "../utils/constant";


export const fetchAttendanceRequest = (): FetchAttendanceRequestAction => ({
    type: FETCH_ATTENDANCE_REQUEST,
  });
  
  export const fetchAttendanceSuccess = (
    attendance: Attendance[]
  ): FetchAttendanceSuccessAction => ({
    type: FETCH_ATTENDANCE_SUCCESS,
    payload: attendance,
  });

  export const fetchAttendanceTraineeSuccess = (
    attendance: TraineeAttendance[]
  ): FetchAttendanceTraineeAction => ({
    type: FETCH_TRAINEES_ATTENDANCE,
    payload: attendance,
  });
  
  export const fetchAttendanceFailure = (
    error: string
  ): FetchAttendanceErrorAction => ({
    type: FETCH_ATTENDANCE_ERROR,
    payload: error,
  });
  
  export type AttendanceAction =
    | FetchAttendanceRequestAction
    | FetchAttendanceSuccessAction
    | FetchAttendanceErrorAction
    | FetchAttendanceTraineeAction;
  
  // INTERFACE
  interface FetchAttendanceRequestAction {
    type: typeof FETCH_ATTENDANCE_REQUEST;
  }
  
  interface FetchAttendanceSuccessAction {
    type: typeof FETCH_ATTENDANCE_SUCCESS;
    payload: Attendance[];
  }
  
  interface FetchAttendanceErrorAction {
    type: typeof FETCH_ATTENDANCE_ERROR;
    payload: string;
  }

  interface FetchAttendanceTraineeAction {
    type: typeof FETCH_TRAINEES_ATTENDANCE;
    payload: TraineeAttendance[];
  }