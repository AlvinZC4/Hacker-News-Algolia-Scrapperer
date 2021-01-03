const axios = require("axios");

// Create variable for base URL and TAG
const BASEURL = "http://hn.algolia.com/api/v1/search?query=";
const TAG = "&tags=story";

// Export object with search method that will return any articles with the search parameter in the title from Hacker News Algolia
module.exports = {
    search: function (req, res) {
        console.log("searching articles");
        console.log("search parameter", req.params.search);

        // create variable with full URL
        const FULLURL = BASEURL + req.params.search + TAG;
        console.log(FULLURL);

        // Use axios to query Hacker News Algolia
        axios.get(FULLURL)
            .then(result => {

                // create array that contains all results
                const resultArry = result.data.hits;

                // map resultArry to create a respone array that contains only the information that is to be sent back to the user
                const responseArry = resultArry.map((index) => {
                    return (
                        {
                            id: index.objectID,
                            title: index.title,
                            author: index.author,
                            url: index.url
                        }
                    );
                });

                // send the response arrry back to the front-end
                res.json(responseArry)
            })
            // catch error and send 422 status error back to front-end
            .catch(err => {
                res.status(422).json(err);
                console.log(err);
            });
    }
};