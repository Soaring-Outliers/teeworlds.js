import me from 'melonJS'
import extend from 'extend'
import Component from './Component.js'
import TextBox from './TextBox.js'

export default class InputText extends Component {

  constructor(options) {
    var options = options || {}
    super(extend(options, {cache: false}))

    this.maxTextLength = options.maxTextLength
    this.text = ""
    this.textBox = new TextBox(
      {
        text: Array(this.maxTextLength + 1).join("_"),
        frame: true,
        centeredH: false,
        centeredV: false
      },
      {bgColor: "#000000"}
    )
    this.textBox.setText("_", false)

    super.setHeight(this.textBox.height)
    super.setWidth(this.textBox.width)

    // Alt - Ctrl - Meta
    this.modifierKeys = [91, 93, 17, 18]

    //Key codes from A to Z
    var A = 65,
        Z = 90
    var kAtoZ = Array.apply(0, Array(Z - A + 1))
    kAtoZ = kAtoZ.map(() => A++)

    //Key codes from 0 to 9
    var n0 = 48,
        n9 = 57
    var k0to9 = Array.apply(0, Array(n9 - n0 + 1))
    k0to9 = k0to9.map(() => n0++)

    this.keyCodes = kAtoZ.concat(k0to9).concat([189]) // [A-Z0-9\-]
    this.onResetEvent()
  }

  setX(x) {
    super.setX(x)
    this.textBox.setX(this.pos.x)
  }

  setY(y) {
    super.setY(y)
    this.textBox.setY(this.pos.y)
  }

  setText(text) {
    this.text = text
    this.textBox.setText(this.text + (this.text.length == this.maxTextLength ? "" : "_"))
  }

  draw(context) {
    var textBefore = this.text

    var cancelTyping = false
    this.modifierKeys.some(function (modifKeyCode) {
      if (me.input.isKeyPressed("key" + modifKeyCode))
        cancelTyping = true
      return cancelTyping
    })

    this.keyCodes.map(keyCode => {
      if (!cancelTyping && me.input.isKeyPressed('key' + keyCode)) {
        if (this.text.length < this.maxTextLength)
          this.text += keyCode == 189 ? "-" : String.fromCharCode(keyCode)
      }
    })

    this.modifierKeys.some(function (modifKeyCode) {
      me.input.unlockKey("key" + modifKeyCode)
    })

    if (me.input.isKeyPressed('del')) {
      if (this.text.length)
        this.text = this.text.substr(0, this.text.length - 1)
    }

    if (textBefore != this.text) {
      this.setText(this.text)
    }

    this.textBox.draw(context)
  }

  onResetEvent() {
    me.input.bindKey(8, "del", true)

    this.modifierKeys.map(
      modifKeyCode => me.input.bindKey(modifKeyCode, "key" + modifKeyCode, false)
    )

    this.keyCodes.map(
      keyCode =>  me.input.bindKey(keyCode, "key" + keyCode, true)
    )
  }

  onDestroyEvent() {
    me.input.unbindKey(8)

    this.modifierKeys.map(
      modifKeyCode => me.input.unbindKey(modifKeyCode)
    )

    this.keyCodes.map(
      keyCode => me.input.unbindKey(keyCode)
    )
  }
}