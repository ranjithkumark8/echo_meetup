import {
    GET_LOGIN_DETAILS_FAILURE,
    GET_LOGIN_DETAILS_REQUEST,
    GET_LOGIN_DETAILS_SUCCESS,
    LOGIN_FAILURE,
    LOGIN_SUCCESS,
    LOGOUT,
    POST_SIGNUP_DETAILS_FAILURE,
    POST_SIGNUP_DETAILS_REQUEST,
    POST_SIGNUP_DETAILS_SUCCESS
} from "./actionTypes"



const initData = {
    isLoggedin: false,
    isSignedin: false,
    isLoading: false,
    isError: false,
    loginDetails: {}
}
export const authReducer = (state = initData, {
    type,
    payload
}) => {
    switch (type) {
        case POST_SIGNUP_DETAILS_REQUEST: {
            return {
                ...state,
                isLoading: true,
                isError: false
            }
        }
        case POST_SIGNUP_DETAILS_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                isError: false,
                isSignedin: true
            }
        }
        case POST_SIGNUP_DETAILS_FAILURE: {
            return {
                ...state,
                isLoading: false,
                isError: true
            }
        }
        case GET_LOGIN_DETAILS_REQUEST: {
            return {
                ...state,
                isLoading: true,
                isError: false
            }
        }
        case GET_LOGIN_DETAILS_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                isError: false,
                loginDetails: payload || {}
            }
        }
        case GET_LOGIN_DETAILS_FAILURE: {
            return {
                ...state,
                isLoading: false,
                isError: true
            }
        }
        case LOGIN_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                isError: false,
                isLoggedin: true
            }
        }
        case LOGIN_FAILURE: {
            return {
                ...state,
                isLoading: false,
                isError: true,
                isLoggedin: false
            }
        }
        case LOGOUT: {
            return {
                ...state,
                isLoggedin: false,
                isError: false
            }
        }
        default:
            return state
    }
}