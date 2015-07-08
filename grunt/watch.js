module.exports = {
    js: {
        files: ['src/js/**'],
        tasks: ['browserify', 'replace:teeworld'],
        options: {
            interrupt: true
        }
    },
    web: {
        files: ['src/web/**'],
        tasks: ['copy:web'],
        options: {
            interrupt: true
        }
    },
    data: {
        files: ['data/**'],
        tasks: ['copy:data'],
        options: {
            interrupt: true
        }
    }/*,
    libs: {
        files: ['node_modules/**'],
        tasks: ['concat:libs'],
        options: {
            interrupt: true
        }
    },
    melonJS: {
        files: ['lib/melonJS/src/**'],
        tasks: ['subgrunt:melonJS_min', 'concat:libs'],
        options: {
            interrupt: true
        }
    }*/
};