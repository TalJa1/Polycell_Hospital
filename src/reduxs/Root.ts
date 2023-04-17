import { combineReducers } from "redux";
import UserReducer from "./UserRedux";
import PostReducer from "./PostRedux";

const rootReducer = combineReducers({
  user: UserReducer,
  post: PostReducer,
});


export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
