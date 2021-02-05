import axios from "axios";
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
} from "./actionTypes";


//POSTING THE SIGNUP DETAILS
export const postSignupDetailsRequest = () => {
    return {
        type: POST_SIGNUP_DETAILS_REQUEST
    }
}

export const postSignupDetailsSuccess = () => {
    return {
        type: POST_SIGNUP_DETAILS_SUCCESS
    }
}

export const postSignupDetailsFailure = () => {
    return {
        type: POST_SIGNUP_DETAILS_FAILURE
    }
}

export const postSignupDetails = (payload) => dispatch => {
    dispatch(postSignupDetailsRequest());
    return axios.post("https://meetup-project.herokuapp.com/credentials", payload)
        .then(res => {
            dispatch(postSignupDetailsSuccess(res.data));
            return {
                success: true
            }
        })
        .catch(error => dispatch(postSignupDetailsFailure(error)));
}


//  GETTING LOGIN DETAILS
export const getLoginDetailsRequest = () => {
    return {
        type: GET_LOGIN_DETAILS_REQUEST
    }
}

export const getLoginDetailsSuccess = (payload) => {
    return {
        type: GET_LOGIN_DETAILS_SUCCESS,
        payload
    }
}

export const getLoginDetailsFailure = () => {
    return {
        type: GET_LOGIN_DETAILS_FAILURE
    }
}

export const getLoginDetails = (payload) => dispatch => {
    dispatch(getLoginDetailsRequest());
    return axios.get("https://meetup-project.herokuapp.com/credentials?email=" + payload.email)
        .then(res => {
            console.log(res.data[0])
            dispatch(getLoginDetailsSuccess(res.data[0]));
            return {
                success: true
            }
        })
        .catch(error => dispatch(getLoginDetailsFailure(error)));
}

export const loginSuccess = () => {
    return {
        type: LOGIN_SUCCESS
    }
}

export const loginFailure = () => {
    return {
        type: LOGIN_FAILURE
    }
}


//LOGOUT

export const logout = () => {
    return {
        type: LOGOUT
    }
}