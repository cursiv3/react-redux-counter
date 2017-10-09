import { combineReducers } from "redux";
import { message } from "./message";
import { clicks } from "./clicks";

const rootReducer = combineReducers({ message, clicks });

export default rootReducer;
