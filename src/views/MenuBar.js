var m = require("mithril");
var quoteModel = require("../models/Quote.js");

module.exports = {
    oninit: quoteModel.loadList,
    view: function(){
        return m("ul",{"class" : "nav nav-tabs"}, [
            m("li", {"role" : "presentation"}, [
                m("a[href='/quotes']", {oncreate: m.route.link}, "Quotes")
            ])
        ]);
    }
};
