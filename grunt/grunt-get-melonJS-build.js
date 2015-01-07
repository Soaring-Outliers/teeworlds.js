'use strict';

var fs = require('fs');

var buildFolderPath = 'bower_components/melonJS/build';
var filePath = buildFolderPath + '/melonJS-2.0.2.js';

/**
 * Grunt task fetching melonJS build file from CDN into the bower package build folder
 */
module.exports = function () {

    var done = this.async();

    if (!fs.existsSync(filePath)) {
        var http = require('http');

        if (!fs.existsSync(buildFolderPath))
            fs.mkdirSync(buildFolderPath);

        var file = fs.createWriteStream(filePath);
        http.get("http://cdn.jsdelivr.net/melonjs/2.0.2/melonJS.js", function(response) {
            response.pipe(file);

            file.on('finish', function() {
                file.close(function() {
                    done(1);
                });
            });
        }).on("error", function() {
            done(0);
        });
    }
    else done(1);
};