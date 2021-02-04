import { createStore, applyMiddleware, compose ,combineReducers} from "redux";
import thunk from "redux-thunk";
import { eventInfoReducer } from "./EventInformationRedux/eventInfoReducer";

const rootReducer = combineReducers({
    eventInfo : eventInfoReducer
})

let composeEnhancers = compose;

if (process.env.NODE_ENV !== "production") {
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;
}

const enhancer = composeEnhancers(applyMiddleware(thunk));

const store = createStore(rootReducer, enhancer);

export default store;