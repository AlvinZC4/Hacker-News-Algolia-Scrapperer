import axios from "axios";

export default {
    findArticles: function (search) {
        return axios.get("/api/search/find/" + search);
    }
};