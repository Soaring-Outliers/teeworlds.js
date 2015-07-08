module.exports = {
    dist: { 
      options: {
        preserveComments: true
      },
      files: [{
        cwd: 'dist/data/map',
        expand: true,
        src: '**/*.tmx',
        dest: 'dist/data/map'
      }]
    }
};
