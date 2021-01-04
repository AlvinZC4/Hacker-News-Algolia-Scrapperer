import React from 'react';
import Articles from "./componets/articles";
import SearchForm from "./componets/form";

// App function that contains all components for the React App
function App() {
    return (
      <div>
        <SearchForm 
        // Pass in label and id to search form as props
          label="Search Hacker News Articles"
          id="search"
        />
        <Articles />
      </div>
    );
  }

export default App;
