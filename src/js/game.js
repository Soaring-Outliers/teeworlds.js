import me from 'melonJS'
import ConnectionControler from './connection/ConnectionControler.js'
import Player from './entity/player/Player.js'
import Cursor from './ui/Cursor.js'
import Screen from './ui/Screen.js'

var game = {

  uiScale: 1,
  width: 1152,
  height: 720,

  resources: require("./resources.js"),

  titleFont: null,
  font: null,
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
        scaleMethod: "fill-max",
        doubleBuffering: false,
        transparent: true
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
    if (document.location.hash === "#debug") {
      me.debug.renderHitBox = true
      me.plugin.register.defer(game, me.debug.Panel, "debug")
    }
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

    function initFont(size) {
      var font = new me.Font("dejavu_sansbook", size * game.uiScale, "#FFFFFF")
      font.strokeStyle.parseCSS("rgba(0, 0, 0, 0.60)")
      font.lineWidth = 6 * game.uiScale
      font.textAlign = "center"
      font.textBaseline = "hanging"
      return font
    }
    game.font = initFont(17)
    game.titleFont = initFont(22)

    // Creates the game cursor which will follow the computer cursor (mouse)
    game.cursor = new Cursor()
    me.game.world.addChild(game.cursor)

    me.pool.register("player1", Player)

    // Init connection controller
    game.connectionControler = new ConnectionControler()

    // Init screen
    game.screen = new Screen()
    me.state.set(me.state.PLAY, game.screen)
    me.state.change(me.state.PLAY)

    //game.connectionControler.init()
  }
}

window.onReady(game.load)
window.game = game

export {game as default}
