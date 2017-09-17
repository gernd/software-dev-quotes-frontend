var m = require("mithril");
var quoteModel = require("../models/Quote.js");

module.exports = {
    view: function(){

        // render quote list items
        var quoteListItems = quoteModel.list.map(function(quoteItem){
            return m("tr", [
                m("td", quoteItem.quote),
                m("td", quoteItem.author)
            ]);
        });

        return m("table",{"class" : "table"}, [
            m("caption", "Some dev quotes"),
            m("thead", [
                m("th", "quote"),
                m("th", "author")
            ]),
            m("tbody", quoteListItems)
        ]);
    }
};
