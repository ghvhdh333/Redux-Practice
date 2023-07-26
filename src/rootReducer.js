import { combineReducers } from "redux";
import { counterReducer } from "./counterReducer";
import { greetingReducer } from "./greetingReducer";

export const rootReducer = combineReducers({
    counterReducer, 
    greetingReducer
})