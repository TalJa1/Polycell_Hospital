import { combineReducers } from "redux";
import UserReducer from "./UserRedux";
import CLassReducer from "./ClassRedux";
import ProgramReducer from "./ProgramRedux";
import traineeReducer from "./TraineeRedux";
import scheduleReducer from "./ScheduleRedux";
import attendanceReducer from "./AttendanceRedux";
import SyllabusReducer from "./SyllabusRedux";
import CurrentPageReducer from "./CurrentPageRedux";

const rootReducer = combineReducers({
  user: UserReducer,
  class: CLassReducer,
  program: ProgramReducer,
  trainee: traineeReducer,
  schedule: scheduleReducer,
  attendance: attendanceReducer,
  syllabus: SyllabusReducer,
  currentPage: CurrentPageReducer
});


export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
