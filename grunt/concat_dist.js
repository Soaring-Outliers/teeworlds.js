'use strict'

/**
 * Grunt task concatenating source files in order of dependency
 */
module.exports = function(grunt) {
    grunt.registerTask(
        'concat_dist',
        'Concat source files in order of dependency',
        function() {
            var done = this.async();

            var fs = require("fs");
            var path = require("path");

            var gameSource = 'src/js/game';
            var dest = 'dist/js/teeworlds.js';
            var sourcesInOrder = [];

            // Prepare dest folders and dest file
            (function prepareDest() {
                var base = "";
                path.dirname(dest).split("/").forEach(function(folder) {
                    base += folder + "/";
                    if (!fs.existsSync(base)) {
                        fs.mkdirSync(base);
                    }
                });
                if (fs.existsSync(dest)) {
                    fs.unlinkSync(dest);
                }
            })();

            // Concat jsFile to dest prependended by its dependencies (if not already concatenated)
            function concatWithDependency(jsFile) {
                if (sourcesInOrder.indexOf(jsFile) === -1) {
                    // Read file                
                    var data = fs.readFileSync(jsFile);
                    var content = data.toString('utf-8', 0, data.length);

                    // Parse file
                    var inComment = false;
                    var partial = content,
                        n,
                        line;
                    do {
                        n = partial.indexOf('\n');
                        line = partial.substring(0, n);
                        partial = partial.substring(n + 1);

                        if (!inComment) {
                            if (line.match(/\/\*\*/))
                                inComment = true;
                            else if (!line.match(/^\s*$/))
                                break;
                        }

                        if (inComment) {
                            var match = line.match(/@depend (.+\.js)/);

                            if (match && match.length > 1) {

                                // Concat dependency (with its dependencies) 
                                concatWithDependency(
                                    path.normalize(path.dirname(jsFile) + "/" + match[1])
                                );
                            }

                            if (line.match(/\*\//))
                                break;
                        }
                    } while (partial.length > 0);

                    // Concat file content to the destination file
                    fs.appendFileSync(dest, content + "\n");

                    // Store concatenated files path                
                    sourcesInOrder.push(jsFile);
                }
            }

            // Walk recursivly in the dir in search of js file to process with the processor
            function processJsFiles(dir, processor, done) {
                fs.readdir(dir, function(err, list) {

                    if (err) return done(err);

                    var pending = list.length;
                    if (!pending) return done(null);

                    list.forEach(function(file) {
                        file = path.join(dir, file);

                        fs.stat(file, function(err, stat) {
                            if (stat && stat.isDirectory()) {
                                processJsFiles(file, processor, function(err, res) {
                                    if (!--pending) done(null);
                                });
                            }
                            else if (file.match(/\.js$/)) {
                                processor(file);
                                if (!--pending) done(null);
                            }
                        });
                    });
                });
            }

            // Start processing
            processJsFiles(
                gameSource,

                concatWithDependency,

                function(err) {
                    if (err) done(0);
                    done(1);
                }
            );
        }
    );
};