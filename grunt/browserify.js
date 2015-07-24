module.exports = {
  dist: {
    src: [ 'src/js/game.js' ],
    dest: 'dist/js/teeworlds.js',
    options: {
      transform: [ 'babelify' ]
    }
  }
}
/*
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
      ],
      preBundleCB: function (b) {
        var pathmodify = require('pathmodify')
        var path = require('path')
        
        //Cutsom path for libraries under lib
        b.plugin(pathmodify(), {mods: [
          pathmodify.mod.dir('lib', path.join(process.cwd(), 'lib'))
        ]})
      }
    }
  }
}*/