import {
  EVENT_FAILURE,
  EVENT_REQUEST,
  EVENT_SUCCESS,
  FAVORITE_EVENT_FAILURE,
  FAVORITE_EVENT_REQUEST,
  FAVORITE_EVENT_SUCCESS,
} from "./eventActionTypes";

const initialData = {
  isLoading: false,
  isError: false,
  eventData: [],
  error: "",
  savedEvents:[]
};

const eventReducer = (state = initialData, {
  type,
  payload
}) => {

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
        savedEvents: payload.data.filter((item) => item.isStar === true)
      };
    case EVENT_FAILURE:
      return {
        ...state,
        isError: true,
        error: payload.error,
      };
    case FAVORITE_EVENT_REQUEST:
      return {
        ...state,
        isLoading: true
      };
    case FAVORITE_EVENT_SUCCESS:
      return {
        ...state,
        // savedEvents:[...state.savedEvents, payload.data],
        isLoading:false
      }
    case FAVORITE_EVENT_FAILURE:
      return {
        ...state,
        isError: true,
        isLoading:false,
        error:payload.error
      }
    default:
      return state;
  }
};

export {
  eventReducer
};