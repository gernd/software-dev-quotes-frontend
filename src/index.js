var m = require("mithril");
var menuBar = require("./views/MenuBar.js");
var quoteList = require("./views/QuoteList.js");
var applicationRoot = document.getElementById("appContainer");

m.route(document.body, "/quotes", {
    "/quotes": {
        render: function() {
            return [m(menuBar), m(quoteList)];
        }
    }
})
