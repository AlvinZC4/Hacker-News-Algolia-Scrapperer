import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

// Import rootReducer
import rootReducer from "../reducers/index.js";

const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Create store
const store = createStore(
    rootReducer,
    storeEnhancers(applyMiddleware(thunk))
    );

export default store;