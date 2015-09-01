import me from 'melonJS'
import game from '../game.js'
import Box from './Box.js'
import Text from './Text.js'

export default class Button extends Box {

  constructor(options) {
    var {
      text, font = game.font, width, color = "white", overOpacity = 0.75,
      onClick, radius = 5, padding = {top: 2, bottom: 2, right: 5, left: 5}
    } = options || {}
    var textCmp = new Text({text, width, font, padding: {top: -2}})
    super(textCmp, {color, overOpacity, onClick, radius, padding})
    this._text = textCmp
  }

  get text() {
    return this._text.text
  }

  set text(t) {
    return this._text.text = t
  }

}
