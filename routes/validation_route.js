/**
 * Imports the `express`, `router`, and `validation` modules
 */
const express = require("express");
const router = express.Router();
const v = require("../helpers/validation");

/**
 * Route that shows the user a webpage to check for valid words
 * @returns {HTML} - HTML page
 */
router.get("/validation", function (req, res, next) {
	res.render('validation_page');
});

/**
 * Route that validates a word
 * @returns {JSON} - object that contains the word requested, whether the word was valid, and the list of valid words if the word is invalid
 */
router.post("/validateWord", function (req, res, next) {
	const word = req.body.req;
	const val = v.validation(word);

	res.json({
		word_requested: word,
		valid: val,
		list_of_valid_words: (val ? undefined : v.dictionary)
	});
});

/**
 * Exports variables, functions, objects, etc. for other files to read when imported with the `require` method
 */
module.exports = router;
