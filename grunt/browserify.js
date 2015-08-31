module.exports = {
  dist: {
    src: [ 'src/js/game.js' ],
    dest: 'dist/js/teeworlds.js',
    options: {
      transform: [['babelify', { optional: ['runtime'] }]]
    }
  }
}
