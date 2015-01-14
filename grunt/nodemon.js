module.exports = {
  dev: {
    script: 'dist/server.js',
    options: {
        watch: ['dist/server.js', 'dist/express/', 'dist/websocket/'] // Watch only dist because src folder is watched by grunt-contrib-watch
    }
  }
};