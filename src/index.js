var m = require("mithril");
var quotes_view = require("./views/quote_view.js")
var applicationRoot = document.getElementById("appContainer");

m.route(
    applicationRoot, "/quotes",
    {"/quotes" : quotes_view}
);
