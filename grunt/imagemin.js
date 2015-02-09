module.exports = {
    static: {
      options: {
        optimizationLevel: 3
      },
      files: {  // 'destination': 'source'
        'dist/public/data/game/*.png' : 'dist/public/data/game/*.png',
        'dist/public/data/gui/*.png' : 'dist/public/data/gui/*.png',
        'dist/public/data/mapres/*.png' : 'dist/public/data/mapres/*.png'
      }
    },
};
