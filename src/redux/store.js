import { applyMiddleware, compose, createStore } from "redux";
import characterReducer from "./reducers/characterReducer";

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(characterReducer);

export default store;

