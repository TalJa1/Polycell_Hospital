import { combineReducers } from "redux";
import UserReducer from "./UserRedux";
import CLassReducer from "./ClassRedux";

const rootReducer = combineReducers({
  user: UserReducer,
  class: CLassReducer,
});


export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
