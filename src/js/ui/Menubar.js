import me from 'melonJS'
import game from '../game.js'
import Box from './Box.js'
import Panel from './Panel.js'
import Button from './Button.js'

export default class Menubar extends Box {

  constructor(screen) {
    var margin = 15 * game.uiScale, padding = 15, radius = 10
    super({x: margin, y: margin, padding, radius})

    this.joinButton = new Button({text: "Join User"})
    this.joinButton.onClick = () => game.connectionControler.joinUser()

    this.connectButton = new Button({text: "Connect"})
    this.connectButton.onClick = () => game.connectionControler.askUserName()

    this.panel = new Panel([this.connectButton], {layout: Panel.HORIZONTAL})
    this.innerComponent = this.panel
    this.widthResize = () =>
      this.resize({width: me.game.viewport.width - margin * 2 - padding * 2})
    this.widthResize()
    this.onEscKey = () => screen.close(this)

    game.connectionControler.subscribe(game.connectionControler.CONNECTED, this.onConnected.bind(this))
  }

  onScreenResize() {
    super.onScreenResize()
    this.widthResize()
  }

  onConnected() {
    this.panel.remove(this.connectButton)
    this.panel.add(this.joinButton)
  }

  //onChangeUsername() {
  //  Screen.askUserName()
  //}
}
