import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addArticles, updateSearchField, saveSearch } from "../../utilities/actions";
import API from "../../utilities/api/API.js"

// Create and export form component that contains search bar, submit button and business logic 
export default function SearchForm(props) {

    // Retrieve the "current" state of search and savedSearches from the store and store them in the corresponding respective variables
    const search = useSelector(state => state.search);
    const savedSearches = useSelector(state => state.savedSearches)

    // store useDispatch in the dispatch variable 
    const dispatch = useDispatch();

    // handleInputChange function updates the state of "upDateSearchField" whenever anything changes in the form's input search bar"
    function handleInputChange(event) {

        // The name and value variables are used as a key-value pair to tell the function which form input field to read the value from.
        const name = event.target.name;
        const value = event.target.value;

        // dispatch that current value typed into the search field to the updateSearchField state in the store
        dispatch(updateSearchField({
        [name]: value
        }));
    }

    // searchArticles function takes the current state of "search" from the store and makes an API call to the server to preform a get, 
    // which in turn retrieves articles from Hacker News Algolia based on the search state"
    const searchArticles  = () => {
        console.log("execute search", search.search)

        // If nothing is typed into the search field then return out of the searchArticles function without making an API call.
        if (search === "") {
            return
        }

        // dispatch the search parameter into state.savedSearches in the store
        dispatch(saveSearch(search.search))

        // console log savedSearches to see an array of all search terms used to search articles on this session
        console.log("Saved Searches", savedSearches)

        // Hits the findArticles endpoint on the front-end with the current search state from the store as an argument
        API.findArticles(search.search)
            .then(res => {
                console.log("search results", res.data)

                // dispatch the response from the API call to the state.results in the store
                dispatch(addArticles(res.data))
            });
    }

    // handleFormSubmit function to run when the user clicks the search button
    function handleSubmit(event) {

        // prevent the default behavior of a form submit button
        event.preventDefault();
        
        //run the searchArticles function when the search button is clicked
        searchArticles();
    }

    // render the search form in the brower
    return (
        <form>
            {/* pass in props from parent component for label and id, the handleInput function for onChange and the current state search from the store for value */}
            <label htmlFor="search">{props.label}</label>
            <input 
                onChange={handleInputChange}
                value={search.search}
                name="search"
                type="text"
                className="form-control"
                id={props.id}
            />
            <div>
                {/* pass in the handleSubmit function to run on "onClick" */}
                <button onClick={handleSubmit}>Search</button>
            </div>
        </form>
    )
}