import {
  EVENT_FAILURE,
  EVENT_REQUEST,
  EVENT_SUCCESS,
} from "./eventActionTypes";

const initialData = {
  isLoading: false,
  isError: false,
  eventData: [],
  error: "",
};

const eventReducer = (state = initialData, { type, payload }) => {
  switch (type) {
    case EVENT_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case EVENT_SUCCESS:
      return {
        ...state,
        eventData: payload.data,
      };
    case EVENT_FAILURE:
      return {
        ...state,
        isError: true,
        error: payload.error,
      };
    default:
      return state;
  }
};

export { eventReducer };
