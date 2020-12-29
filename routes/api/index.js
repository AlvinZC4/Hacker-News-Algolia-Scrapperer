const router = require("express").Router();
const searchRoute = require("./search");

// API route to search articles on Hacker News Aloglia
router.use("/search", searchRoute);

module.exports = router;