import { combineReducers } from "redux"
import { eventReducer } from "./EventRedux/eventReducer"

export const rootReducer = combineReducers({eventReducer:eventReducer})
