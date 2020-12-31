// Import the constants to use as action types.

import { ADD_ARTICLES, UPDATE_SEARCHFIELD } from "../constants/action-types";

// Create and export actions.

export function addArticles(payload) {
    return { type: ADD_ARTICLES, payload };
};

export function updateSearchField(payload) {
    return { type: UPDATE_SEARCHFIELD, payload };
};