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
    
    // Use switch statement to return an action for each action type
    switch (action.type) {
        case ADD_ARTICLES:

            // Return a new array with a payload reveived from a dispatch call as the current state of results in the store
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