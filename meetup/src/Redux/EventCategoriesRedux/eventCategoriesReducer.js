import {
    GET_EVENT_CATEGORIES_FAILURE,
    GET_EVENT_CATEGORIES_REQUEST,
    GET_EVENT_CATEGORIES_SUCCESS
} from "./actionTypes"



const initState = {
    isLoading: false,
    isError: true,
    eventCategories: []
}

export const eventCategoriesReducer = (state = initState, {
    type,
    payload
}) => {
    switch (type) {
        case GET_EVENT_CATEGORIES_REQUEST: {
            return {
                ...state,
                isLoading: true,
                isError: false
            }
        }
        case GET_EVENT_CATEGORIES_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                isError: false,
                eventCategories: payload
            }
        }
        case GET_EVENT_CATEGORIES_FAILURE: {
            return {
                ...state,
                isLoading: false,
                isError: true
            }
        }
        default:
            return state
    }
}