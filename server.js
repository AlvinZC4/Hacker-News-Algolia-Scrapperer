// Requiring packages necessary for server.js to run the application
require("dotenv").config;
const express = require("express");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;
const path = require("path");

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static Assets
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
};

// Include Routes
app.use(routes);

app.use(function(req, res) {
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
  });

// Start API server
app.listen(PORT, () => {
    console.log(`Application running on port ${PORT}!`);
});