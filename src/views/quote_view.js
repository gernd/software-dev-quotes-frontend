var m = require("mithril");

module.exports = {
    view: function(){
        return m("table",{"class" : "table"}, [
            m("caption", "Some dev quotes"),
            m("thead", [
                m("th", "quote"),
                m("th", "author")
            ]),
            m("tbody", [
                m("tr", [
                    m("td", "Quote"),
                    m("td", "Author")
                ])
            ])
        ]);
    }
};
