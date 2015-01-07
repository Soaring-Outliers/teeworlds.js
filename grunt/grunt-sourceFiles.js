/**
 * Generates the list of all game source files in order of dependency
 */

'use strict';

var fs = require('fs'),
    path = require('path'),
    deasync = require('deasync'),
    esprima = require('esprima');

var gameSource = path.join(__dirname, '..', 'src', 'client', 'js');

module.exports = deasync(listJSFiles)(gameSource);

/**
 * @param {String} dir
 * @param {function} done
 */
function listJSFiles(dir, done) {
    var results = [];
    fs.readdir(dir, function (err, list) {
        if (err) return done(err);
        var pending = list.length;
        if (!pending) return done(null, results);
        list.forEach(function (file) {
            file = path.join(dir, file);
            fs.stat(file, function (err, stat) {
                if (stat && stat.isDirectory()) {
                    listJSFiles(file, function (err, res) {
                        results = results.concat(res);
                        if (!--pending) done(null, results);
                    });
                } else {
                    if (file.match(/\.js$/)) {
                        resolveImport(file, results);
                    }
                    if (!--pending) done(null, results);
                }
            });
        });
    });
}

/**
 * @param {String} file
 * @param {Array} results
 */
function resolveImport(file, results) {
    var BreakException = {};

    function name(object) {
        if (object.type === "MemberExpression")
            return name(object.object) + "." + object.property.name;
        else if (object.type === "Identifier")
            return object.name;
        else return "";
    }

    var index = results.indexOf(file);

    if (index == -1) {
        var imported = false;
        var data = fs.readFileSync(file);

        //Parse JS
        var program = esprima.parse(data.toString('utf-8', 0, data.length));
        if (program.type === "Program") {
            try {
                program.body.forEach(function (statement) {
                    if (statement.type === "ExpressionStatement"
                        && statement.expression.type === "AssignmentExpression"
                        && statement.expression.operator === "=")
                    {
                        var assignment = statement.expression;

                        //Using class method extend
                        if (assignment.right.type === "CallExpression" && assignment.right.callee.property.name === "extend") {
                            var classCalled = name(assignment.right.callee.object);

                            //On a game class
                            if (classCalled.indexOf("game.") == 0) {
                                var classPath = path.join(
                                    gameSource,
                                    classCalled.replace(/\./g, path.sep)
                                    + ".js"
                                );

                                var indexImport = results.indexOf(classPath);

                                if (indexImport == -1) {
                                    resolveImport(classPath, results);
                                    indexImport = results.indexOf(classPath);
                                }

                                results.splice(indexImport + 1, 0, file);
                                imported = true;
                                throw BreakException;
                            }
                        }
                    }
                });
            } catch (e) {
                if (e !== BreakException) throw e;
            }
        }

        if (!imported)
            results.push(file);
    }
}
