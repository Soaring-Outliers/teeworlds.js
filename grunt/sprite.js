function melonJSTemplate(params) {
  var obj = {
    'frames': [],
    'meta': {
      "app": "ShoeBox",
      "exporter": "melonJS",
      "size": {
        "w": params.spritesheet.width,
        "h": params.spritesheet.height
      }
    }
  };
  params.items.forEach(function(item) {
    obj.frames.push({
      "filename": item.name,
      "frame": {
        "x": item.x,
        "y": item.y,
        "w": item.width,
        "h": item.height
      },
      "rotated": false,
      "trimmed": true,
      "spriteSourceSize": {
        "x": 0,
        "y": 0,
        "w": item.width,
        "h": item.height
      },
      "sourceSize": {
        "w": item.width,
        "h": item.height
      }
    });
  });
  obj.frames.push({"EOL":"true"});

  return JSON.stringify(obj);
};

module.exports = {
  ui: {
    src: 'data/ui/final/*.png',
    dest: 'data/ui/ui.png',
    destCss: 'data/ui/ui.json',
    padding: 1,
    cssTemplate: melonJSTemplate
  },
  game: {
    src: 'data/game/final/*.png',
    dest: 'data/game/game.png',
    destCss: 'data/game/game.json',
    padding: 1,
    cssTemplate: melonJSTemplate
  }/*,
  grass_main: {
    src: 'data/mapres/extracted/grass_main/*.png',
    dest: 'data/mapres/grass_main2.png',
    destCss: 'data/mapres/grass_main2.json',
    padding: 1,
    cssTemplate: melonJSTemplate
  },*/
};
