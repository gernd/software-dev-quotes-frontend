var m = require("mithril");
var config = require("./Config.js");

var quote = {
    list : [],
    loadList : function(){
      return m.request({
            method: "GET",
            url: config.BACKEND_URL + "/quotes"
        })
        .then(function(result) {
            quote.list = result;
        })
    }
};

module.exports = quote;
