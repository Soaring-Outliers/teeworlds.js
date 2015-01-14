module.exports = {
  dist: {
    src: [ 'src/client/js/game/game.js',
    'src/client/js/game/resources.js',
    'src/client/js/game/websocket.js',
    'src/client/js/game/entity/WinEntity.js',
    'src/client/js/game/entity/accessory/Bullet.js',
    'src/client/js/game/entity/accessory/Coin.js',
    'src/client/js/game/entity/mob/EvilCompagny.js',
    'src/client/js/game/entity/mob/Player.js',
    'src/client/js/game/entity/mob/RemotePlayer.js',
    'src/client/js/game/gui/Animation.js',
    'src/client/js/game/gui/ButtonSelectionHandler.js',
    'src/client/js/game/gui/ScoreObject.js',
    'src/client/js/game/gui/component/Component.js',
    'src/client/js/game/gui/component/PopUpFrame.js',
    'src/client/js/game/gui/component/Panel.js',
    'src/client/js/game/gui/component/ScrollPanel.js',
    'src/client/js/game/gui/component/InputText.js',
    'src/client/js/game/gui/component/FramedRect.js',
    'src/client/js/game/gui/component/TextBox.js',
    'src/client/js/game/gui/component/Button.js',
    'src/client/js/game/gui/screen/ComplexScreen.js',
    'src/client/js/game/gui/screen/TitleScreen.js',
    'src/client/js/game/gui/screen/NewGameScreen.js',
    'src/client/js/game/gui/screen/JoinGameScreen.js',
    'src/client/js/game/gui/screen/InstructionsScreen.js',
    'src/client/js/game/gui/screen/LooseScreen.js',
    'src/client/js/game/gui/screen/PlayScreen.js',
    'src/client/js/game/gui/screen/WinScreen.js' ],
    dest: 'dist/public/js/teeworlds.js',
  },
  libs: {
    src: [
      'node_modules/jquery/dist/jquery.js',
      'lib/melonJS/build/melonJS-2.0.2.js',
      'lib/melonJS/plugins/debug/debugPanel.js',
      'node_modules/peerjs/dist/peer.js'
    ],
    dest: 'dist/public/js/libs.js'
  }
};