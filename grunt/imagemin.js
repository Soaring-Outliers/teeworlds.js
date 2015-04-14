module.exports = {
    static: {
      options: {
        optimizationLevel: 7
      },
      files: [{
        cwd: 'dist/data/',
        expand: true,
        src: '**/*.{png,jpg,gif}',
        dest: 'dist/data/'
      }]
    },
};
