var m = require("mithril");
var config = require("./Config.js");

var quote = {
    list : [],
    randomQuote : "",
    loadList : function(){
      return m.request({
            method: "GET",
            url: config.BACKEND_URL + "/quotes"
        })
        .then(function(result) {
            quote.list = result;
        })
    },
    loadRandomQuote : function(){
      return m.request({
            method: "GET",
            url: config.BACKEND_URL + "/quotes/random"
        })
        .then(function(result) {
            quote.randomQuote = result;
        })
    }
};

module.exports = quote;
