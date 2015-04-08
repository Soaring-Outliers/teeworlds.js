module.exports = {
    static: {
      options: {
        optimizationLevel: 7
      },
      files: [{
        cwd: 'dist/public/data/',
        expand: true,
        src: '**/*.{png,jpg,gif}',
        dest: 'dist/public/data/'
      }]
    },
};
