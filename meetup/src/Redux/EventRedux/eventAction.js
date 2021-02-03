import {
    EVENT_FAILURE,
    EVENT_REQUEST,
    EVENT_SUCCESS
} from "./eventActionTypes"

import axios from "axios"

const eventRequest = () => {
    return {
        type: EVENT_REQUEST,
    }
}

const eventSuccess = (data) => {
    return {
        type: EVENT_SUCCESS,
        payload: {
            data
        }
    }
}

const eventFailure = (error) => {
    return {
        type: EVENT_FAILURE,
        payload: {
            error: error
        }
    }
}

const eventFetch = () => (dispatch) => {
    dispatch(eventRequest())
    return axios
        .get("https://meetup-project.herokuapp.com/events")
        .then(res => {
            // console.log("response data", res.data)
            return dispatch(eventSuccess(res.data))
        })
        .catch((err) => dispatch(eventFailure(err)))
}

export {
    eventFetch
}