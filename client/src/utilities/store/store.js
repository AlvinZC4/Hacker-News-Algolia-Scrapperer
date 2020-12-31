import { createStore } from "redux"

// Import rootReducer
import rootReducer from "../reducers/index.js";

// Create store
const store = createStore(rootReducer);

export default store;