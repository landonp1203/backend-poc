/**
 * Imports the `express` and `router` modules
 */
const express = require("express");
const router = express.Router();

/**
 * Route for the index page (default page because the route is just `/`)
 * @returns {String} - tells the user that the server is working
 */
router.get("/", function (req, res, next) {
	res.send("<h1>Server is working</h1>");
});

module.exports = router;