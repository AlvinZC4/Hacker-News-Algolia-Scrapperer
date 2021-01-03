const router = require("express").Router();
const searchController = require("../../controllers/searchController");

// Route to controller that is responsible for API get call to Hacker Newa Algolia
router.route("/find/:search")
    .get(searchController.search);

module.exports = router;