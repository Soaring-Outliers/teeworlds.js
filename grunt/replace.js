module.exports = {
    teeworld: {
        "files": {"dist/js/teeworlds.js": "dist/js/teeworlds.js"},
        "options": {
            "patterns": [
                { //Optimizing jay-inheritance when calling a method from a parent class
                    "match": /this\._super\(\s*([\w\.]+)\s*,\s*"(\w+)"\s*(,\s*)?/g,
                    "replacement": "$1.prototype.$2.apply(this$3"
                },
                {
                    "match": "peerJSAPIKey",
                    "replacement": require("./peerJSAPIKey.txt")
                }
            ]
        }
    },
    prod: {
        "files": {"dist/index.html": "dist/index.html"},
        "options": {
            "patterns": [
                { // Use the html5 cache manifest
                    "match": /\<html\>/g,
                    "replacement": "<html manifest='cache.manifest'>"
                },
                { // Use minified js file
                    "match": /<script type='text\/javascript' src='js\/libs.js'><\/script>\s+<script type='text\/javascript' src='js\/teeworlds.js'><\/script>/g,
                    "replacement": "<script type='text/javascript' src='js/teeworlds.min.js'></script>"
                }
            ]
        }
    }
};
