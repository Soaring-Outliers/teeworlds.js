import me from 'melonJS'
import Component from './Component.js'
import Text from './Text.js'

import {range} from '../util/Arrays.js'

class Key {
  constructor(code, lock = false, preventDefault = false) {
    this.code = code
    this.string = code == 189 ? "-" : String.fromCharCode(code)
    this.name = "key" + code
    this.lock = lock
    this.preventDefault = preventDefault
    this.coolDown = 0
  }

  update(dt) {
    var pressed = this.isPressed()
    if(pressed) {
      this.coolDown -= dt
      if(this.coolDown <= 0) {
        this.coolDown = 300
        return true
      }
    }
    else this.coolDown = 0
    return false
  }

  isPressed() {
    return me.input.isKeyPressed(this.name)
  }
}
Key.isPressed = (k) => k.isPressed()
Key.bind = (k) => me.input.bindKey(k.code, k.name, k.lock, k.preventDefault)
Key.unbind = (k) => me.input.unbindKey(k.code)

var modifKeys, majKey, typeableKeys
var allKeys = Array.prototype.concat(
  // Meta(Left-Right) - Ctrl - Alt
  modifKeys = [me.input.KEY.WINDOW_KEY, 93, me.input.KEY.CTRL, me.input.KEY.ALT]
    .map((k) => new Key(k, true, false)),

  // Maj keys
  majKey = new Key(me.input.KEY.SHIFT, false, true),

  // Key codes from A to Z, 0 to 9 and minus/dash
  typeableKeys = (() => {
    var keyCodes =
      range(me.input.KEY.A, me.input.KEY.Z) // A to Z
        .concat(range(me.input.KEY.NUM0, me.input.KEY.NUM9)) // 0 to 9
        .concat([me.input.KEY.MINUS]) // minus/dash
    var delKey = new Key(me.input.KEY.BACKSPACE, false, true)
    return keyCodes.map((k) => new Key(k, false, false)).concat([delKey])
  })()
)

export default class InputText extends Text {

  constructor(options) {
    var {text = "", maxTextLength = 25} = options || {}
    super({
      text: Array(maxTextLength + 1).join("H")//, height: game.titleFont.height + 6
    })

    this.maxTextLength = maxTextLength
    this.textValue = text
    this.fitTextH = false
    this.textCursor = new TextCursor(this)
    this.text = text

    this.onResetEvent()
  }

  update(dt) {
    super.update(dt)

    var cancelTyping = modifKeys.some(Key.isPressed)
    if(!cancelTyping) {
      var majIsPressed = majKey.isPressed()

      var updated = false
      typeableKeys.map(key => {
        if(key.update(dt)) {
          if(key.code === me.input.KEY.BACKSPACE) {
            // Delete character
            this.textValue = this.textValue.substr(0, this.textValue.length - 1)
          } else if(this.textValue.length < this.maxTextLength) {
            // Type character
            this.textValue += majIsPressed ? key.string.toUpperCase() : key.string.toLowerCase()
          }
          updated = true
        }
      })
      if(updated) this.text = this.textValue
    }

    if(this.textCursor.update(dt))
      this.renderer.needUpdate = true

    return true
  }

  clear() {
    this.textValue = ""
  }

  onResetEvent() {
    super.onResetEvent()
    this.clear()
    allKeys.map(Key.bind)
  }

  onDestroyEvent() {
    super.onDestroyEvent()
    allKeys.map(Key.unbind)
  }

  render() {
    //this.renderer.save()
    //this.renderer.translate(this.textCursor.width, 0)
    super.render()
    this.textCursor.render()
    //this.renderer.restore()
  }
}

class TextCursor {
  constructor(input) {
    this.char = "_"
    this.size = input.font.measureText(input.renderer, this.char)
    this.blinkDuration = 0
    this.isVisible = true
    this.input = input
  }

  get width() {
    return this.isVisible ? this._width : 0;
  }

  render() {
    if(!this.isVisible) {
      var posX = this.input.width / 2 + this.input.textWidth / 2
      this.input.font.drawStroke(this.input.renderer, this.char, posX, 7)
      this.input.font.draw(this.input.renderer, this.char, posX, 7)
    }
  }

  update(dt) {
    var canAppear = this.input.textValue.length < this.input.maxTextLength
    if(!canAppear) return false

    this.blinkDuration -= dt
    if(this.blinkDuration <= 0) {
      this.isVisible = !this.isVisible
      this.blinkDuration = 400
      return true
    }
    return false
  }
}
