import { combineReducers } from "redux";

import authReducer from "./AuthReducer";
import postReducer from "./PostReducer";

export const reducers = combineReducers({authReducer,postReducer})