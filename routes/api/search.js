const router = require("express").Router();
const searchController = require("../../controllers/searchController");

// Route to controller that is responsible for API call to Hacker Newa Algolia
router.route(":search")
    .get(searchController.search);

module.expors = router