import { combineReducers } from "redux";
import UserReducer from "./UserRedux";
import CLassReducer from "./ClassRedux";
import programReducer from "./ProgramRedux";

const rootReducer = combineReducers({
  user: UserReducer,
  class: CLassReducer,
  program: programReducer
});


export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
