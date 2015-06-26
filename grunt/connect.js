module.exports = {
  server: {
    options: {
      port: process.env.PORT,
      base: {
        path: 'dist',
        options: {
          index: 'index.html'
        }
      }
    }
  }
}