import me from 'melonJS'
//import Panel from './Panel.js'
//import NickNamePanel from './NickNamePanel.js'
import TextBox from './TextBox.js'
import Player from '../entity/Player.js'

/*class ComplexScreen extends me.ScreenObject {
  
  constructor(topPadding, spacing) {
    super()
    super.init()
    this.panel = new Panel({y: topPadding, spacing: spacing})
  }
  
  update() {
    return true
  }
  
  add(component) {
    this.panel.add(component)
  }
  
  onResetEvent() {
    this.panel.onResetEvent()
  }
 
  onDestroyEvent() {
    this.panel.onDestroyEvent()
  }
 
  draw(context) {
    this.panel.draw(context)
  }
}*/

export default class PlayerScreen extends me.ScreenObject {

  constructor() {
    super()
    super.init()
    this.overlay = null
    me.pool.register("player1", Player)
  }
  
  showNicknamePrompt() {
    this.overlay = new TextBox({text: "Hello World"})
    me.game.world.addChild(this.overlay)
  }
  
  hideNicknamePrompt() {
    me.game.world.removeChild(this.overlay)
    this.overlay = null
  }
  
  onResetEvent() {
    // load a level
    me.levelDirector.loadLevel("mini")

    // enable the keyboard
    me.input.bindKey(me.input.KEY.Q, "left")
    me.input.bindKey(me.input.KEY.D, "right")
    me.input.bindKey(me.input.KEY.SPACE, "jump", false)
    me.input.bindKey(me.input.KEY.X, "shoot", true)
    me.input.bindPointer(me.input.KEY.X)
  }

  onDestroyEvent() {
    // enable the keyboard
    me.input.unbindKey(me.input.KEY.LEFT)
    me.input.unbindKey(me.input.KEY.RIGHT)
    me.input.unbindKey(me.input.KEY.UP)
    me.input.unbindKey(me.input.KEY.SPACE)
  }
}