module.exports = {
  dev: {
    src: 'src/js/game.js',
    dest: 'dist/js/teeworlds.js',
    options: {
      //browserifyOptions: {
      //   debug: true
      //},
      transform: [
        'babelify'
      ]
    }
  }
}