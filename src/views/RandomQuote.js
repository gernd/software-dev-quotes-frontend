var m = require("mithril");
var quoteModel = require("../models/Quote.js");

module.exports = {
    oninit: quoteModel.loadRandomQuote,
    view: function(){
        return m("div", "Random Quote");
    }
};
