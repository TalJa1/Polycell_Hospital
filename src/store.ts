import { legacy_createStore as createStore } from "redux";
import rootReducer from "./reduxs/Root";

interface WindowWithDevTools extends Window {
  __REDUX_DEVTOOLS_EXTENSION__?: () => (next: any) => (action: any) => any;
}

const store = createStore(
  rootReducer,
  (window as WindowWithDevTools).__REDUX_DEVTOOLS_EXTENSION__ && (window as WindowWithDevTools).__REDUX_DEVTOOLS_EXTENSION__?.()
);

if (process.env.NODE_ENV !== 'production') {
  console.log(store.getState());
}

export default store