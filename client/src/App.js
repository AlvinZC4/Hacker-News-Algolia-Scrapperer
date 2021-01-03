import React from 'react';
import Articles from "./componets/articles";
import SearchForm from "./componets/form";

function App() {
  return (
    <div>
      <SearchForm 
        label="search"
        id="search"
      />
      <Articles />
    </div>
  );
}

export default App;
