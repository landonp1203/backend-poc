const assert = require("assert");

const val = require("./helpers/validation");

// Routes
const indexRoute = require("./routes/index");
const validationRoute = require("./routes/validation_route");
const wordsRoute = require("./routes/words");

describe("val.validation(typed_word)", function() {
    it("should return true for words in the dictionary", function(){
        assert(val.validation("oswego") === true);
    });

    it("should return false for words not in the dictionary", function(){
        assert(val.validation("volcano") === true);
    });
});
