module.exports = {
    teeworld: {
        "files": {"dist/js/teeworlds.js": "dist/js/teeworlds.js"},
        "options": {
            "patterns": [
                {
                    "match": "peerJSAPIKey",
                    "replacement": require('../properties.json').peerJSAPIKey
                }
            ]
        }
    },
    prod: {
        "files": {"dist/index.html": "dist/index.html"},
        "options": {
            "patterns": [
                { // Use the html5 cache manifest
                    "match": /<html>/g,
                    "replacement": "<html manifest='cache.manifest'>"
                },
                { // Use minified js file
                    "match": /<script.*src='js\/libs.js'.*><\/script>\s+<script.*src='js\/teeworlds.js'.*><\/script>/g,
                    "replacement": "<script type='text/javascript' src='js/teeworlds.min.js'></script>"
                }
            ]
        }
    }
};
