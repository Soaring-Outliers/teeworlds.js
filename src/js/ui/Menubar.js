import game from '../game.js'
import Box from './Box.js'
import Panel from './Panel.js'
import Button from './Button.js'

export default class Menubar extends Box {

  constructor(screen) {
    var margin = 15, padding = 15, radius = 10
    super({y: margin, y: margin, padding, radius})
    var joinButton = new Button({text: "Join User"})
    joinButton.onClick = screen.joinUser.bind(screen)
    this.innerComponent = new Panel(
      [joinButton],
      {layout: Panel.HORIZONTAL}
    )
    this.widthResize = () =>
      this.resize({width: me.game.viewport.width - margin * 2 - padding * 2})
    this.widthResize()
    this.onEscKey = () => screen.close(this)
  }

  onScreenResize() {
    super.onScreenResize()
    this.widthResize()
  }

  //onChangeUsername() {
  //  Screen.askUserName()
  //}
}
