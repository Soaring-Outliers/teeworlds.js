function melonJSTemplate(params) {
  var obj = {
    'frames': [],
    'meta': {
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
  gui: {
    src: 'data/gui/originals/*.png',
    dest: 'data/gui/gui.png',
    destCss: 'data/gui/gui.json',
    cssTemplate: melonJSTemplate
  }
};