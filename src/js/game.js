import me from 'melonJS'
import PlayScreen from './gui/PlayScreen.js'

let game = {

  width: 1280,
  height: 720,

  load: function() {
    var ok = me.video.init(
      game.width, 
      game.height, 
      {
        renderer: me.video.CANVAS, 
        antiAlias: true, 
        scale : 'auto', 
        scaleMethod: "fill-max"
        
      }
    )
    if (!ok) {
      alert("Your browser does not support HTML5 canvas.")
      return
    }
    
    me.audio.init("mp3,ogg")
    me.loader.onload = game.loaded
    me.loader.preload(game.resources)
    me.state.change(me.state.LOADING)
    
    // add "#debug" to the URL to enable the debug Panel
    /*if (document.location.hash === "#debug") {
      me.plugin.register.defer(game, me.debug.Panel, "debug")
    }*/
  },

  loaded: function () {
    game.texture = new me.video.renderer.Texture(
      me.loader.getJSON("game"), 
      me.loader.getImage("game")
    )
    game.guiTexture = new me.video.renderer.Texture(
      me.loader.getJSON("gui"), 
      me.loader.getImage("gui")
    )

    game.font.strokeStyle.parseCSS("rgba(0, 0, 0, 20)")
    game.font.lineWidth = 5
    
    let playScreen = new PlayScreen()
    me.state.set(me.state.PLAY, playScreen)
    me.state.change(me.state.PLAY)
    playScreen.showNicknamePrompt()
  },
  
  connection: require("./connection.js"),
  resources: require("./resources.js"),

  font: new me.Font("dejavu_sansbook", 20, "#ffffff"),
  guiTexture: null,
  texture: null,

  gui: {
    images: {},
    
    newCanvasRenderer: function (height, width) {
      return new me.CanvasRenderer(
        me.video.createCanvas(height, width, false),
        height,
        width
      )
    },
    
    getImageFromTexture: function (regionName) {
      if (this.images[regionName])
        return this.images[regionName]
      else {
        var region = game.guiTexture.getRegion(regionName)
        if (region) {
          var sprite = new me.Sprite(0, 0, {image: game.guiTexture.getTexture(), framewidth: region.width, frameheight: region.height})
          sprite.offset.setV(region.offset)

          return this.getImageFromSprite(regionName, sprite)
        }
        return undefined
      }
    },
    
    getImageFromSprite: function (regionName, sprite) {
      if (this.images[regionName])
        return this.images[regionName]
      else {
        if (sprite) {
          var canvasRenderer = this.newCanvasRenderer(sprite.height, sprite.width)

          sprite.draw(canvasRenderer)

          return this.images[regionName] = canvasRenderer.getCanvas()
        }
        return undefined
      }
    }
  }
}

window.onReady(game.load)

export {game as default} 