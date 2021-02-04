import {combineReducers} from "redux";
import { eventInfoReducer } from "./EventInformationRedux/eventInfoReducer";
import {eventCategoriesReducer} from "./EventCategoriesRedux/eventCategoriesReducer";
import {eventReducer} from "./EventRedux/eventReducer"

// this is common reducer

export const rootReducer = combineReducers({
    eventCategoriesReducer: eventCategoriesReducer,
    eventReducer: eventReducer,
    eventInfo : eventInfoReducer
})