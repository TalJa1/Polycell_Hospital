import { ScheduleAction } from "../actions/scheduleAction";
import { Class } from "../models/classManagementModel";
import { Room, Schedule } from "../models/scheduleModel";
import { FETCH_SCHEDULE_REQUEST, FETCH_SCHEDULE_SUCCESS } from "../utils/constant";

interface ScheduleState {
  schedule: Schedule;
  list: Array<Schedule>;
  page: number;
  totalpage: number;
  loading: boolean;
}

const initialState: ScheduleState = {
  totalpage: 0,
  page: 1,
  list: [],
  schedule: {
    id: "",
    date: "",
    startTime: "",
    endTime: "",
    clazz: {} as Class,
    room: {} as Room,
  },
  loading: false,
};

const scheduleReducer = (
  state = initialState,
  action: ScheduleAction
): ScheduleState => {
  switch (action.type) {
    case FETCH_SCHEDULE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_SCHEDULE_SUCCESS:
      return {
        ...state,
        list: action.payload, 
        loading: false,
      };
    default:
      return state;
  }
};

export default scheduleReducer;
