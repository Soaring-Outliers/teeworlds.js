module.exports = {
  dev: {
    script: 'dist/server.js',
    options: {
        watch: ['dist/'] // Watch only dist because src folder is watched by grunt-contrib-watch
    }
  }
};