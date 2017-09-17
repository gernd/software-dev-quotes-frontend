var m = require("mithril");
var quoteList = require("./views/QuoteList.js")
var applicationRoot = document.getElementById("appContainer");

m.route(
    applicationRoot, "/quotes",
    {"/quotes" : quoteList}
);
