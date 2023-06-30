import { AttendanceAction } from "../actions/attendanceAction";
import { Attendance } from "../models/attendaceModel";
import { Schedule } from "../models/scheduleModel";

import { FETCH_ATTENDANCE_REQUEST, FETCH_ATTENDANCE_SUCCESS } from "../utils/constant";

interface AttendanceState {
  attendance: Attendance;
  list: Array<Attendance>;
  page: number;
  totalpage: number;
  loading: boolean;
}

const initialState: AttendanceState = {
  totalpage: 0,
  page: 1,
  list: [],
  attendance: {
    id: "",
    status: "",
    schedule: {} as Schedule
  },
  loading: false,
};

const attendanceReducer = (
  state = initialState,
  action: AttendanceAction
): AttendanceState => {
  switch (action.type) {
    case FETCH_ATTENDANCE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_ATTENDANCE_SUCCESS:
      return {
        ...state,
        list: action.payload, 
        loading: false,
      };
    default:
      return state;
  }
};

export default attendanceReducer;
