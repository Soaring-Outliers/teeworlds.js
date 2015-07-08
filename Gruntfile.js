/*global module:false*/
'use strict';

var fs = require('fs');
require.extensions['.txt'] = function (module, filename) {
    module.exports = fs.readFileSync(filename, 'utf8');
};

module.exports = function(grunt) {
  
  /*require('time-grunt')(grunt, {
      jitGrunt: true
  });*/
  
  require('load-grunt-config')(grunt);
};