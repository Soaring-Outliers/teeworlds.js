module.exports = {
    client_js: {
        files: ['src/client/js/**/*.js'],
        tasks: ['concat:dist', 'replace:dist', 'uglify:dist'],
        options: {
            interrupt: true
        }
    },
    client_web: {
        files: ['src/client/web/**'],
        tasks: ['copy:client', 'replace:dist', 'replace:dev'],
        options: {
            interrupt: true
        }
    },
    libs: {
        files: ['bower_components/**'],
        tasks: ['concat:libs', 'uglify:libs'],
        options: {
            interrupt: true
        }
    },
    server: { // TODO: restart server on change
        files: ['src/server/**'],
        tasks: ['copy:server', 'replace:dist', 'replace:dev'],
        options: {
            interrupt: true
        }
    }
};