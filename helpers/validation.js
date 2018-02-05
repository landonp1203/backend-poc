/**
 * List of valid words in the dictionary
 */
const dictionary = ["bastian", "oswego", "computer", "science", "windows", "osx"];

/**
 * Function that validates a user's input
 * @param {String} typed_word - the word entered by the user
 * @returns {Boolean} - true if the word is valid, false if it is not
 */
function validation(typed_word){
    for (let word of dictionary){
        if(typed_word.toLowerCase() === word){
            return true;
        }
    }
    return false;
}

/**
 * Exports variables, functions, objects, etc. for other files to read when imported with the `require` method
 */
module.exports = {
    validation: validation,
    dictionary: dictionary
}
