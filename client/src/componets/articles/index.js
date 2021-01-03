import React from "react";
import { useSelector } from "react-redux";

// Create and export List component that will display articles returned from API
export default function List() {

    // Retrieve the current state of the results array that contains information for articles from API call and store in articles variable.
    const articles = useSelector(state => state.results)

    // Return an unordred list
    return (
        <ul>
            {/* map over the articles array to create list items that display each article's title and author, with links to each article */}
            {articles.map(el => (
                <li key={el.id}>
                    <a href={el.url}>
                        <h6>{el.title}</h6>
                    </a>
                    <p>By {el.author}</p>
                </li>
            ))}
        </ul>
    )
    
};
