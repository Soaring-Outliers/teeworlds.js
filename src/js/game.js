import me from 'melonJS'
import Player from './entity/Player.js'
import Cursor from './ui/Cursor.js'
import Screen from './ui/Screen.js'

var game = {

  width: 1280,
  height: 720,

  connection: require("./connection.js"),
  resources: require("./resources.js"),

  titleFont: new me.Font("dejavu_sansbook", 22, "#FFFFFF"),
  font: new me.Font("dejavu_sansbook", 16, "#FFFFFF"),
  uiTexture: null,
  texture: null,

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
    game.debug = false
    if (document.location.hash === "#debug") {
      game.debug = true
    }
    /*if (document.location.hash === "#debug") {
      me.plugin.register.defer(game, me.debug.Panel, "debug")
    }*/
  },

  loaded: function () {
    game.texture = new me.video.renderer.Texture(
      me.loader.getJSON("game"),
      me.loader.getImage("game")
    )
    game.uiTexture = new me.video.renderer.Texture(
      me.loader.getJSON("ui"),
      me.loader.getImage("ui")
    )

    function applyFontStyle(font) {
      font.strokeStyle.parseCSS("rgba(0, 0, 0, 0.70)")
      font.lineWidth = 4.5
      font.textAlign = "center"
      font.textBaseline = "hanging"
    }
    applyFontStyle(game.font)
    applyFontStyle(game.titleFont)

    // Creates the game cursor which will follow the computer cursor (mouse)
    game.cursor = new Cursor()
    me.game.world.addChild(game.cursor)

    me.pool.register("player1", Player)

    game.screen = new Screen()
    me.state.set(me.state.PLAY, game.screen)
    me.state.change(me.state.PLAY)
  }
}

window.onReady(game.load)
window.game = game

export {game as default}
