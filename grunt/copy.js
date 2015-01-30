module.exports = {
    client: {
        files: [
            {
                expand: true,
                cwd: 'src/client/web',
                src: '**',
                dest: 'dist'
            },
            {
                expand: true,
                src: ['data/**', '!data/**/originals/**'],
                dest: 'dist/public/'
            }
        ]
    },
    server: {
        files: [
            {
                expand: true,
                cwd: 'src/server',
                src: '**',
                dest: 'dist'
            }
        ]
    }
};
