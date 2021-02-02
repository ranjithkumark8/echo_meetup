import {
    combineReducers
} from "redux";
import {
    eventCategoriesReducer
} from "./EventCategoriesRedux/eventCategoriesReducer";

// this is common reducer
export const rootReducer = combineReducers({
    eventCategoriesReducer: eventCategoriesReducer
})

// const rootReducer = combineReducers({ });