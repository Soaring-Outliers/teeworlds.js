import me from 'melonJS'
import extend from 'extend'
import game from '../game.js'
import TextBox from './TextBox.js'
import Animation from './Animation.js'

export default class Button extends TextBox {

  constructor(options) {
    var defaults = {
        selected: false,
        bgImages: {
          "on": game.gui.getImageFromTexture("bg_hover.png"),
          "off": game.gui.getImageFromTexture("bg.png")
        }
      },
      options = extend(defaults, (options || {}))
    super(extend(options, {align: "center middle", frame: true}))
    
    this.selectionHandler = options.selectionHandler
    this.action = options.action
    this.selected = options.selected
    
    this.selectAnim = new Animation({from: 0.8, to: 1, sec: 0.5})
    
    this.bgImages = options.bgImages
    this.onResetEvent()
  }
  
  clicked() {
    if(typeof this.action === "number" && this.action % 1 == 0)
      me.state.change(this.action)
    else if(typeof this.action === "function")
      this.action()
  }
  
  update() {
    return this.active
  }
  
  draw(context) {
    if(this.active) {
      var selected = this.containsPointV(me.input.mouse.pos) || this.selected
      
      if(this.selectionHandler && selected != this.selected && selected) {
        this.selectionHandler.select(this)
        this.selectAnim.reset()
      }
      
      if(selected) this.frame.setBgImage(this.bgImages["on"])
      else this.frame.setBgImage(this.bgImages["off"])
    }
    
    super.draw(context)
  }
  
  onResetEvent() {
    this.active = true
    me.input.registerPointerEvent("pointerdown", this, this.clicked.bind(this))
  }
  
  onDestroyEvent() {
    this.active = false
    me.input.releasePointerEvent("pointerdown", this)
  }
  
  select(bool) {
    this.select = bool
  }
}
