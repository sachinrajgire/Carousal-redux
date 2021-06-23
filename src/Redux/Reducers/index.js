import { combineReducers } from "redux";
import slideControl from "./slideControl";
import authenticationReducer from "./authenticationReducer";

export default combineReducers({slideControl,authenticationReducer});