import * as eventInformationAction from './actionTypes'
import axios from 'axios'

const getEventInfoRequest = () => {
    return {
        type: eventInformationAction.EVENT_INFO_REQUEST
    }
}
const getEventInfoSuccess = (payload) => {
    return {
        type: eventInformationAction.EVENT_INFO_SUCCESS,
        payload
    }
}
const getEventInfoFailure = (err) => {
    return {
        type: eventInformationAction.EVENT_INFO_FAILURE,
        payload: {
            err
        }
    }
}
const eventAttendeePutRequest = () => {
    return {
        type: eventInformationAction.EVENT_ATTENDEE_PUT_REQUEST
    }
}
const eventAttendeePutSuccess = () => {
    return {
        type: eventInformationAction.EVENT_ATTENDEE_PUT_SUCCESS,

    }
}
const eventAttendeePutFailure = (err) => {
    return {
        type: eventInformationAction.EVENT_ATTENDEE_PUT_FAILURE,
        payload: {
            err
        }
    }
}
const eventCommentsPutRequest = () => {
    return {
        type: eventInformationAction.EVENT_COMMENTS_PUT_REQUEST
    }
}
const eventCommentsPutSuccess = () => {
    return {
        type: eventInformationAction.EVENT_COMMENTS_PUT_SUCCESS,

    }
}
const eventCommentsPutFailure = (err) => {
    return {
        type: eventInformationAction.EVENT_COMMENTS_PUT_FAILURE,
        payload: {
            err
        }
    }
}
const putAttendeeData = (id, attendees) => dispatch => {
    dispatch(eventAttendeePutRequest());
    return axios.patch(`https://meetup-clone-project.herokuapp.com/events/${id}`, {
            attendees: attendees
        })
        .then(res => {
            dispatch(eventAttendeePutSuccess())
            dispatch(getEventInfoData(id))
            console.log(res)
        })
        .catch(err => {
            dispatch(eventAttendeePutFailure(err))
        })
}
const putCommentsData = (id, comments) => dispatch => {
    dispatch(eventCommentsPutRequest());
    return axios.patch(`https://meetup-clone-project.herokuapp.com/events/${id}`, {
            comments: comments
        })
        .then(res => {
            dispatch(eventCommentsPutSuccess())
            dispatch(getEventInfoData(id))
            console.log(res)
        })
        .catch(err => {
            dispatch(eventCommentsPutFailure(err))
        })
}

const getEventInfoData = (id) => (dispatch) => {
    dispatch(getEventInfoRequest());
    return axios.get(`https://meetup-clone-project.herokuapp.com/events/${id}`)
        .then(res => {
            dispatch(getEventInfoSuccess(res.data))

        })
        .catch(err => {
            dispatch(getEventInfoFailure(err))
            console.log(err)
        })
}
export {
    getEventInfoData,
    putCommentsData,
    putAttendeeData
}