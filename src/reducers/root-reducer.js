import counterReducer from "./counter-reducer";
import billpaymentReducer from "./bp-reducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  bpdetais: billpaymentReducer,
});

export default rootReducer;
