module.exports = {
    client_data :{
        files: [
            {
                expand: true,
                src: ['data/**', '!data/**/originals/**', '!data/**/LICENSE.txt'],
                dest: 'dist/public/'
            }
        ]
    },
    client: {
        files: [
            {
                expand: true,
                cwd: 'src/client/web',
                src: '**',
                dest: 'dist'
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
