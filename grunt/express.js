module.exports = {
    options: {
        port: 8080,
        hostname: "0.0.0.0",
        livereload: true
    },
    dev: {
      options: {
        script: 'dist/server.js',
        node_env: 'development'
      }
    },
    prod: {
      options: {
        script: 'dist/server.js',
        node_env: 'production'
      }
    }
};