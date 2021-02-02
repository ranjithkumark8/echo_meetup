import axios from "axios";
import {
    GET_EVENT_CATEGORIES_FAILURE,
    GET_EVENT_CATEGORIES_REQUEST,
    GET_EVENT_CATEGORIES_SUCCESS
} from "./actionTypes";

export const getEventCategoriesRequest = () => {
    return {
        type: GET_EVENT_CATEGORIES_REQUEST
    }
}

export const getEventCategoriesSuccess = (payload) => {
    return {
        type: GET_EVENT_CATEGORIES_SUCCESS,
        payload
    }
}

export const getEventCategoriesFailure = () => {
    return {
        type: GET_EVENT_CATEGORIES_FAILURE
    }
}

export const getEventCategories = () => dispatch => {
    dispatch(getEventCategoriesRequest());
    return axios.get("https://meetup-project.herokuapp.com/event_category")
        .then(res => dispatch(getEventCategoriesSuccess(res.data)))
        .catch(error => dispatch(getEventCategoriesFailure(error)));
}