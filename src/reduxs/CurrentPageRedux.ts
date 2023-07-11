// In your reducers/userReducer.ts file

import { CurrentPageAction } from "../actions/currentPageAction";

interface CurrentPageState {
    currentPage: string;
  }
  
  const initialState: CurrentPageState = {
    currentPage: '',
  };
  
  const CurrentPageReducer = (
    state: CurrentPageState = initialState,
    action: CurrentPageAction
  ): CurrentPageState => {
    switch (action.type) {
      case 'SET_CURRENT_TAB':
        return {
          ...state,
          currentPage: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default CurrentPageReducer;
  