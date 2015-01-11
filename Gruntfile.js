/*global module:false*/
'use strict';

var path = require('path');

module.exports = function (grunt) {
    
    require('time-grunt')(grunt);
    
    var sourceFiles = require('./grunt/grunt-sourceFiles');
    var buildTasks = ['get-melonJS-build', 'bower_concat', 'concat', 'copy', 'replace'];

    var env = 'development';
    if (require('fs').existsSync('.grunt/environment.json')) {
        env = grunt.file.readJSON('.grunt/environment.json').env;
    }

    var config = grunt.file.readJSON('grunt/config.json');
    if (env == 'development') {
        config.client.main.name = path.basename(config.client.main.path);
        config.client.libs.name = path.basename(config.client.libs.path);
    } else {
        config.client.main.name = path.basename(config.client.main.path_min);
        config.client.libs.name = path.basename(config.client.libs.path_min);

        buildTasks.push('uglify');
    }

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        client: config.client,

        environment: {
            default: 'development',
            environments: ['development', 'production']
        },

        bower_concat: {
            libs: {
                dest: '<%= client.libs.path %>',
                mainFiles: {
                    'melonJS': ['build/melonJS-2.0.2.js', 'plugins/debug/debugPanel.js']
                }
            }
        },

        concat: {
            dist: {
                src: sourceFiles,
                dest: '<%= client.main.path %>'
            }
        },

        uglify: {
            options: {
                report: 'min',
                preserveComments: false
            },
            dist: {
                "files": {
                    "<%= client.main.path_min %>": "<%= client.main.path %>",
                    "<%= client.libs.path_min %>": "<%= client.libs.path %>"
                }
            }
        },

        copy: {
            client: {
                files: [
                    {
                        expand: true,
                        cwd: 'src/client/web',
                        src: '**',
                        dest: 'build'
                    },
                    {
                        expand: true,
                        src: 'data/**',
                        dest: 'build/public/'
                    }
                ]
            },
            server: {
                files: [
                    {
                        expand: true,
                        cwd: 'src/server',
                        src: '**',
                        dest: 'build'
                    }
                ]
            }
        },

        replace: {
            dist: {
                options: {
                    force: true,
                    patterns: [
                        { //Optimizing jay-inheritance when calling a method from a parent class
                            match : /this\._super\(\s*([\w\.]+)\s*,\s*"(\w+)"\s*(,\s*)?/g,
                            replacement : "$1.prototype.$2.apply(this$3"
                        }
                    ]
                },
                files: [
                    {
                        expand: true,
                        flatten: true,
                        src: ['<%= client.main.path %>'],
                        dest: '<%= client.js %>/'
                    },
                    {
                        expand: true,
                        cwd: 'src/server',
                        src: '**',
                        dest: 'build/'
                    }
                ]
            },
            views: {
                "files": [
                    {
                        "expand": true,
                        "cwd": "src/client/web/views",
                        "src": "**",
                        "dest": "build/views"
                    }
                ],
                "options": {
                    "force": true,
                    "patterns": [
                        {
                            "match": "libs",
                            "replacement": "<%= client.libs.name %>"
                        },
                        {
                            "match": "main",
                            "replacement": "<%= client.main.name %>"
                        }
                    ]
                }
            }
        },

        jshint: {
            options: {
                jshintrc: ".jshintrc"
            },

            beforeConcat: {
                files: {
                    src: sourceFiles
                }
            },

            afterConcat: {
                files: {
                    src: [sourceFiles]
                }
            }
        },

        watch: {
            "client-js": {
                files: ["src/client/js/**/*.js"],
                tasks: ["concat", "uglify"],
                options: {
                    interrupt: true
                }
            },
            "client-res": {
                files: ["src/client/web/**"],
                tasks: ["copy:client", "replace:views"],
                options: {
                    interrupt: true
                }
            },
            libs: {
                files: ["bower_components/**"],
                tasks: ["bower_concat", "uglify"],
                options: {
                    interrupt: true
                }
            },
            server: {
                files: ["src/server/**"],
                tasks: ["copy:server", "replace:dist"],
                options: {
                    interrupt: true
                }
            }
        },

        clean: {
            dist: ['build']
        }
    });

    grunt.loadNpmTasks("grunt-replace");


    grunt.loadNpmTasks('grunt-environment');
    grunt.loadNpmTasks('grunt-bower-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-watch');
    //Temporary fix to get the melonJS build which is absent from the bower package
    grunt.registerTask('get-melonJS-build', require('./grunt/grunt-get-melonJS-build'));

    grunt.registerTask('build', buildTasks);

    grunt.registerTask('start', 'Start node server', function () {
        require('./build/server');
    });

    grunt.registerTask('wait', 'Hold grunt if processes are running (eg. node server)', function () {
        this.async();
    });

    grunt.registerTask('dev', ['environment:development']);
    grunt.registerTask('prod', ['environment:production']);

    grunt.registerTask('lint', ['jshint:beforeConcat', 'concat', 'jshint:afterConcat']);
};
