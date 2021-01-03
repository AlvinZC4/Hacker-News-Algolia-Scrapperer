import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addArticles, updateSearchField, saveSearch } from "../../utilities/actions";
import API from "../../utilities/api/API.js"

export default function SearchForm(props) {

    // function mapDispatchtoProps(dispatch) {
    //     return {
    //         addArticles: articles => dispatch(addArticles(articles)),
    //         updateSearchField: search => dispatch(updateSearchField(search))
    //     };
    // };

    const search = useSelector(state => state.search);
    const savedSearches = useSelector(state => state.savedSearches)
    const dispatch = useDispatch();

    // const [search, setSearch] = useState({
    //     search: ""
    // });

    function handleInputChange(event) {
        const name = event.target.name;
        const value = event.target.value;

        dispatch(updateSearchField({
        [name]: value
        }));
    //     setSearch({
    //         [name]: value
    //     });
    }

    const searchArticles  = () => {
        console.log("execute search", search.search)
        if (search === "") {
            return
        }
        API.findArticles(search.search)
            .then(res => {
                console.log("search results", res.data)
                dispatch(addArticles(res.data))
            });
    }

    function handleSubmit(event) {
        event.preventDefault();
        dispatch(saveSearch(search.search))
        console.log("Saved Searches", savedSearches)
        searchArticles();
    }

    return (
        <form>
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
                <button onClick={handleSubmit}>Search</button>
            </div>
        </form>
    )
}