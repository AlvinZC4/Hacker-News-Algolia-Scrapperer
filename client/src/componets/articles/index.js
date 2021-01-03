import React from "react";
import { useSelector } from "react-redux";
// import store from "../../utilities/store"

// const mapStateToProps = state => {
//     return { results: state.results };
// };

export default function List() {

    const articles = useSelector(state => state.results)

    return (
        <ul>
            {articles.map(el => (
                <li key={el.id}>
                    <a href={el.url}>
                        <h7>{el.title}</h7>
                    </a>
                    <p>By {el.author}</p>
                </li>
            ))}
        </ul>
    )
    
};
