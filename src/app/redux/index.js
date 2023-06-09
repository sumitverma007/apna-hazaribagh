import { combineReducers } from "redux";
import { userDetailsReducers } from "./reducer";

export default function createReducer(asyncReducers){
    return combineReducers({
        userDetails : userDetailsReducers,
        ...asyncReducers
    })
}