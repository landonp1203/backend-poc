/**
 * Imports the `express`, `router`, and `validation` modules
 */
const express = require("express");
const router = express.Router();
const v = require("../helpers/validation")

/**
 * Array of alphabet characters
 */
const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

/**
 * Route that sends the user the list of valid words in the dictionary
 * @returns {JSON} - object that constains a list of words
 */
router.get("/words", function (req, res, next) {
    res.json({ dictionary: v.dictionary });
});

/**
 * Route that sends the user a random word from the list of valid words in the dictionary
 * @returns {JSON} - object that contains a word
 */
router.get("/randomWord", function (req, res, next) {
    word = v.dictionary[Math.floor(Math.random() * v.dictionary.length)];

    res.json({ random_word: word });
});

/**
 * Route that sends the user a random "bag" of letters from the alphabet list
 * @returns {JSON} - object that contains a list of letters
 */
router.get("/bag", function (req, res, next) {
    var selectedTiles = []
    for (var i = 0; i < 7; i++) {
        selectedTiles.push(alphabet[Math.floor(Math.random() * alphabet.length)]);
    }

    res.json({ bag: selectedTiles });
});

/**
 * Exports variables, functions, objects, etc. for other files to read when imported with the `require` method
 */
module.exports = router;