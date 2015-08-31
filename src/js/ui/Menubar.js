import Screen from './Screen.js'
import Box from './Box.js'
import Panel from './Panel.js'
import Button from './Button.js'

export default class Menubar extends Box {
  constructor() {
    var margin = 5
    super({y: margin, y: margin})
    this.innerComponent = new Panel([
      new Button({text: "Join User", onClick: this.onUserJoin}),
      new Button({text: "Change Username", onClick: this.onChangeUsername})
    ])
    this.onEscKey = () => Screen.close(this)
  }

  onUserJoin() {
    Screen.joinUser()
  }

  onChangeUsername() {
    Screen.askUserName()
  }
}
