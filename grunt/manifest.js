module.exports = {
    generate: {
        options: {
            basePath: 'dist/public/',
            master: '/'
        },
        src: [
            'js/*min.js',
            'css/*.css',
            'data/**/*.*'
        ],
        dest: 'dist/public/cache.manifest'
    }
}