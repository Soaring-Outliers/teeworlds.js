module.exports = {
    js: {
        files: ['src/js/**'],
        tasks: ['browserify', 'replace:teeworld', 'notify:js'],
        options: {
            interrupt: true
        }
    },
    web: {
        files: ['src/web/**'],
        tasks: ['copy:web', 'notify:web'],
        options: {
            interrupt: true
        }
    },
    data: {
        files: ['data/**'],
        tasks: ['copy:data', 'notify:data'],
        options: {
            interrupt: true
        }
    },
    lib: {
      files: ['lib/**'],
      tasks: ['concat', 'notify:lib'],
      options: {
          interrupt: true
      }
    }/*,
    libs: {
        files: ['node_modules/**'],
        tasks: ['concat:libs'],
        options: {
            interrupt: true
        }
    },
    melonJS: {
        files: ['lib/melonJS/src/**'],
        tasks: ['subgrunt:melonJS_min', 'concat:libs'],
        options: {
            interrupt: true
        }
    }*/
};
