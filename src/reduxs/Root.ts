import { combineReducers } from "redux";
import UserReducer from "./UserRedux";
import CLassReducer from "./ClassRedux";
import ProgramReducer from "./ProgramRedux";

const rootReducer = combineReducers({
  user: UserReducer,
  class: CLassReducer,
  program: ProgramReducer
});


export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
