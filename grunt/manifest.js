module.exports = {
    generate: {
        options: {
            basePath: 'dist/public/',
            master: '/',
            preferOnline: true
        },
        src: [
            'js/*min.js',
            'css/*.css',
            'data/**/*.*'
        ],
        dest: 'dist/public/cache.manifest'
    }
}