import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Articles from "./componets/articles";
import SearchForm from "./componets/form";
import API from "./utilities/api/API";
import { useDispatch } from "react-redux";
import { addArticles, updateSearchField } from "./utilities/actions";

function App() {

  const [search, setSearch] = useState({
    search: ""
  })

  const dispatch = useDispatch()

  function handleInputChange(event) {
    const name = event.target.name
    const value = event.target.value

    setSearch({
      [name]: value
    })

    console.log(search)
  }

  const searchArticles  = () => {
    console.log("execute search", search.search)
    if (search === "") {
        return
    }
    API.findArticles(search.search)
        .then(res => {
          console.log("API response", res.data)
            dispatch(addArticles(res.data))
        });
}

function handleSubmit(event) {
    event.preventDefault();
    searchArticles();
}


    return (
      <div>
        <SearchForm 
          label="search"
          id="search"
          value={search.search}
          handleInputChange={handleInputChange}
          handleSubmit={handleSubmit}
        />
        <Articles />
      </div>
    );
  }

export default App;
