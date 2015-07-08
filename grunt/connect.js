module.exports = {
  server: {
    options: {
      port: process.env.PORT || 8080,
//      livereload: true,
      base: {
        path: 'dist',
        options: {
          index: 'index.html'
        }
      }
    }
  }
}