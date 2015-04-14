module.exports = {
    generate: {
        options: {
            basePath: 'dist/',
            master: '/'
        },
        src: [
            'js/*min.js',
            'css/*.css',
            'data/**/*.*'
        ],
        dest: 'dist/cache.manifest'
    }
}