module.exports = {
  dist: {
    options: {
        port: process.env.PORT || 8080,
        base: 'dist',
        keepalive: true
      }
  }
};