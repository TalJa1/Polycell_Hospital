import {
  combineReducers
} from 'redux'
import userReducer from "./UserRedux";

const rootReducer = combineReducers({
  user : userReducer
})

export default rootReducer