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

        // If action type is ADD_ARTICLES then return a new array for state.results that contains the payload
        case ADD_ARTICLES:
            return {...state, results: action.payload};

        // If action type is UPDATE_SEARCHFIELD then return a new string for state.search that contains the payload
        case UPDATE_SEARCHFIELD:
            return {...state, search: action.payload};

        // If action type is SAVE_SEARCH then return a new array for state.savedSearches that contains the original array plus an additional string that is contained in the payload
        case SAVE_SEARCH:
            return {...state, savedSearches: state.savedSearches.concat(action.payload)};

        // If any other action type is passed to the reducer then just return the current state
        default:
            return state;
    };
};

export default rootReducer;