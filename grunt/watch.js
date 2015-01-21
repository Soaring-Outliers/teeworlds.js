module.exports = {
    client_js: {
        files: ['src/client/js/**/*.js'],
        tasks: ['concat_dist', 'replace:teeworld'],
        options: {
            interrupt: true
        }
    },
    client_web: {
        files: ['src/client/web/**'],
        tasks: ['copy:client', 'replace:teeworld', 'replace:dev'],
        options: {
            interrupt: true
        }
    },
    libs: {
        files: ['bower_components/**'],
        tasks: ['concat:libs'],
        options: {
            interrupt: true
        }
    },
    server: { // Changes in src/server/ will be added to dist/ which is watched by nodemon
        files: ['src/server/**'],
        tasks: ['copy:server', 'replace:server', 'replace:dev'],
        options: {
            interrupt: true
        }
    },
    melonJS: {
        files: ['lib/melonJS/**'],
        tasks: ['subgrunt:melonJS_min'],
        options: {
            interrupt: true
        }
    }
};