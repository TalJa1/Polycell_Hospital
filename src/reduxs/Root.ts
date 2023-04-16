import { combineReducers } from "redux";
import userReducer from "./UserRedux";
import PostReducer from "./PostRedux";

const rootReducer = combineReducers({
  user: userReducer,
  post: PostReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer
