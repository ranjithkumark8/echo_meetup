import {
  EVENT_FAILURE,
  EVENT_REQUEST,
  EVENT_SUCCESS,
  FAVORITE_EVENT_FAILURE,
  FAVORITE_EVENT_REQUEST,
  FAVORITE_EVENT_SUCCESS,
} from "./eventActionTypes";

import axios from "axios";

const eventRequest = () => {
  return {
    type: EVENT_REQUEST,
  };
};

const eventSuccess = (data) => {
  return {
    type: EVENT_SUCCESS,
    payload: {
      data,
    },
  };
};

const eventFailure = (error) => {
  return {
    type: EVENT_FAILURE,
    payload: {
      error: error,
    },
  };
};

const favoriteEventRequest = () => {
  return {
    type: FAVORITE_EVENT_REQUEST,
  };
};

const favoriteEventSuccess = (data) => {
  return {
    type: FAVORITE_EVENT_SUCCESS,
    payload: {
      data,
    },
  };
};

const favoriteEventFailure = (error) => {
  return {
    type: FAVORITE_EVENT_FAILURE,
    payload: {
      error: error,
    },
  };
};

const eventFetch = () => (dispatch) => {
  dispatch(eventRequest());
  return axios
    .get("https://meetup-project.herokuapp.com/events")
    .then((res) => {
      // console.log("response data", res.data)
    //   dispatch(favoriteEventSuccess(res.data.filter(item => item.isStar)))
      return dispatch(eventSuccess(res.data));
    })
    .catch((err) => dispatch(eventFailure(err)));
};

const favoriteEventUpdate = (id, star) => (dispatch) => {
    dispatch(favoriteEventRequest())
    return axios
        .patch(`https://meetup-project.herokuapp.com/events/${id}`, {isStar:star})
        .then((res) => {
            // console.log(res.data, "saved events request")
            dispatch(favoriteEventSuccess(res.data))
            // return dispatch(favoriteEventSuccess(res.data))
          return {success : true}
        })
        .catch((err) => dispatch(favoriteEventFailure(err)))
}
export { eventFetch, favoriteEventUpdate};
