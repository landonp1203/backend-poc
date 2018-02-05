const assert = require("assert");
const val = require("./helpers/validation");

describe(".validation(typed_word)", function() {
    it("returns true for words in the dictionary", function(){
        assert(val.validation("oswego") === true);
    });

    it("returns false for words not in the dictionary", function(){
        assert(val.validation("volcano") === false);
    });
});