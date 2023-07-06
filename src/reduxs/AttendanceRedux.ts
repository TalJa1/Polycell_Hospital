import { AttendanceAction } from "../actions/attendanceAction";
import { Attendance } from "../models/attendaceModel";
import { Schedule } from "../models/scheduleModel";
import { TraineeAttendance } from "../models/trainneAttendance";

import {
  FETCH_ATTENDANCE_REQUEST,
  FETCH_ATTENDANCE_SUCCESS,
  FETCH_TRAINEES_ATTENDANCE,
} from "../utils/constant";

interface AttendanceState {
  attendance: Attendance;
  traineeAttendance: TraineeAttendance;
  list: Array<Attendance>;
  page: number;
  totalpage: number;
  loading: boolean;
  listAttendance: Array<TraineeAttendance>;
}

const initialState: AttendanceState = {
  totalpage: 0,
  page: 1,
  list: [],
  listAttendance: [],
  traineeAttendance: {
    programId: "",
    programCode: "",
    programName: "",
    classId: "",
    className: "",
    classCode: "",
    attendances: [
      {
        id: "",
        status: "",
        room: {
          id: "",
          name: "",
          maxCapacity: 0,
        },
        date: new Date(),
        startTime: new Date(),
        endTime: new Date(),
        trainer: {
          id: "",
          name: "",
          code: "",
          phone: "",
          birthdate: new Date(),
          accountId: "",
          createdDate: new Date(),
          createdBy: "",
          updatedDate: new Date(),
          updatedBy: "",
          deleted: false,
        },
      },
    ],
  },

  attendance: {
    id: "",
    status: "",
    schedule: {} as Schedule,
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
    case FETCH_TRAINEES_ATTENDANCE:
      console.log("trainee attendance redux>> ", action.payload);
      return {
        ...state,
        listAttendance: action.payload,
      };
    default:
      return state;
  }
};

export default attendanceReducer;
