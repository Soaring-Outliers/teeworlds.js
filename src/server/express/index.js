'use strict';

var http = require('http'),
    //logger = require('morgan'),
    //favicon = require('serve-favicon'),
    //compression = require('compression'),
    express = require('express');

module.exports = {
    createServer: function (folders) {
        var app = express();

        // Environment configurations
        app.set('port', process.env.PORT || 5000);
        app.set('views', folders.views);
        app.set('view engine', 'jade');
        //app.use(favicon(path.join(folders.public, 'favicon.ico')));
        //app.use(logger('dev'));
        //app.use(compression());

        //Static content
        app.use(express.static(folders.public));

        //Main page
        app.use('/', require(folders.routes));

        //404 error
        app.use(function(req, res, next) {
            var err = new Error('Not Found');
            err.status = 404;
            next(err);
        });

        // Development environment
        if (app.get('env') === 'development') {
            console.log("[NODE_ENV] development");

            //StackTrace On
            app.use(function (err, req, res, next) {
                res.status(err.status || 500);
                res.render('error', {
                    message: err.message,
                    error: err
                });
            });

        }
        // Production environment
        else if (app.get('env') === 'production') {
            console.log("[NODE_ENV] production");

            //StackTrace Off
            app.use(function (err, req, res, next) {
                res.status(err.status || 500);
                res.render('error', {
                    message: err.message,
                    error: {}
                });
            });

            //HTML5 cache manifest configuration
            require("./cache-manifest")(
                app,
                folders
            );
        }

        //Launch HTTP server
        var httpServ = http.createServer(app);
        httpServ.listen(app.get('port'), function () {
            console.log('Express server listening on port ' + app.get('port'));
        });

        return httpServ;
    }
};