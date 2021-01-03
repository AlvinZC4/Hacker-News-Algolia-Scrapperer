// Import constants from action-types.js to use as actions
import { ADD_ARTICLES, UPDATE_SEARCHFIELD, SAVE_SEARCH } from "../constants/action-types";

// Set the initial state of the application.
const initialState = {
    search: "",
    results: [],
    savedSearches: []
};
// Create the top level reducer for the application.
function rootReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_ARTICLES:
            return {...state, results: action.payload};
        case UPDATE_SEARCHFIELD:
            return {...state, search: action.payload};
        case SAVE_SEARCH:
            return {...state, savedSearches: state.savedSearches.concat(action.payload)}
        default:
            return state;
    };
};

export default rootReducer;