var m = require("mithril");

var quote = {
    list : [],
    loadList : function(){
        return m.request({
            method: "GET",
            url: "http://localhost:8080/quotes"
        })
        .then(function(result) {
            quote.list = result;
        })
    }
};

module.exports = quote;
