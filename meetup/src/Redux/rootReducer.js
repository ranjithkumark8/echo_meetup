import {
    combineReducers
} from "redux";
import {
    eventCategoriesReducer
} from "./EventCategoriesRedux/eventCategoriesReducer";
import {
    eventReducer
} from "./EventRedux/eventReducer"

// this is common reducer

export const rootReducer = combineReducers({
    eventCategoriesReducer: eventCategoriesReducer,
    eventReducer: eventReducer
})