var path = require('path');

var folders = {
    public: path.join(__dirname, 'public'),
    views: path.join(__dirname, 'views'),
    routes: path.join(__dirname, 'routes')
};

//Launch HTTP server
var httpServer = require(path.join(__dirname, 'express')).createServer(folders);

//Launch WebSocket server
var webSocket = require(path.join(__dirname, 'websocket')).createServer(httpServer);
