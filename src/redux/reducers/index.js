import { combineReducers, Action } from "redux";
import { ACTION_TYPE } from "@constants/enum";
import auth from "./auth";
import settings from "./settings";

const appReducer = combineReducers({
  auth,
  settings,
});
const rootReducer = (state, action) => {
  if (action.type === ACTION_TYPE.CLEAR_REDUX_STATE) {
    state = undefined;
  }
  return appReducer(state, action);
};
export default rootReducer;
