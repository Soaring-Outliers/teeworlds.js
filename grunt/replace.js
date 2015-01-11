module.exports = {
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
                src: ['dist/public/js/teeworlds.js'],
                dest: 'dist/public/js/'
            },
            {
                expand: true,
                cwd: 'src/server',
                src: '**',
                dest: 'dist/'
            }
        ]
    },
    views: {
        "files": [
            {
                "expand": true,
                "cwd": "src/client/web/views",
                "src": "**",
                "dest": "dist/views"
            }
        ],
        "options": {
            "force": true,
            "patterns": [
                {
                    "match": "libs",
                    "replacement": "libs.js"
                },
                {
                    "match": "main",
                    "replacement": "teeworlds.js"
                }
            ]
        }
    }
};
