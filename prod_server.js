var finalhandler = require('finalhandler')
var http = require('http')
var serveStatic = require('serve-static')
var port = process.env.PORT;

// Serve root folder
var serve = serveStatic('static', {'index': ['index.html', 'index.htm']})

// Create server
var server = http.createServer(function onRequest (req, res) {
  serve(req, res, finalhandler(req, res))
})

// Listen
server.listen(port)
