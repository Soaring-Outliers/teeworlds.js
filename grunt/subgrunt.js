module.exports = {
    melonJS: { // For production purposes
      options: {
        npmInstall: true
      },
      projects: {
        'lib/melonJS': [ 'build' ] // Include jshint steps
      }
    },
    melonJS_min: { // Faster build for development and watch
      options: {
        npmInstall: false
      },
      projects: {
        'lib/melonJS': [ 'glsl', 'concat', 'replace:dist', 'uglify' ] // Minimal build
      }
    }
};