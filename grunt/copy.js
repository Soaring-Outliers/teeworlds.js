module.exports = {
    data :{
        files: [
            {
                expand: true,
                src: ['data/**', '!data/**/originals/**', '!data/**/LICENSE.txt'],
                dest: 'dist/'
            }
        ]
    },
    web: {
        files: [
            {
                expand: true,
                cwd: 'src/web',
                src: '**',
                dest: 'dist'
            }
        ]
    }
};
