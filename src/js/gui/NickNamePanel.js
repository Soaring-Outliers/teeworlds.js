import me from 'melonJS'
import game from '../game.js'
import Panel from './Panel.js'
import TextBox from './TextBox.js'
import InputText from './InputText.js'
import Button from './Button.js'
import PopUpFrame from './PopUpFrame.js'

export default class NickNamePanel extends Panel {
  
  constructor(parentScreen) {
    super()
    
    this.cancelBtn = null
    this.okBtn = null
    this.input = null
    this.popup = null
    this.active = true
    this.parentScreen = parentScreen

    this.add([
      new TextBox({
        text: "ENTER YOUR NICKNAME",
        align: "center"
      }),
      
      this.input = new InputText({
        maxTextLength: 14
      }),
      
      new Panel({
        width: 410,
        spacing: 30,
        components: [
          this.cancelBtn = new Button({text: "cancel", action: me.state.MENU, width: 190}),
          this.okBtn = new Button({text: "ok", action: this.validate.bind(this), width: 190})
        ],
        layout: Panel.HORIZONTAL
      })
    ])
  }
  
  validate() {
    if(this.input.text != "") {
      var text = this.input.text
      var parentScreen = this.parentScreen
      
      //Initialize popup
      this.popup = new PopUpFrame("verifying nickname", this.parentScreen)
         var popup = this.popup
          
         game.connection
           .connect(text)
           .then(function(peerConnection) {
             popup.setText("you are connected")
             setTimeout(function() {
               me.state.change(me.state.PLAY)
             }, 2000)
             parentScreen.hideNicknamePrompt()
           }, function(error) {
             popup.setText(error.type)
             parentScreen.hideNicknamePrompt()
           })
    }
  }

  onResetEvent() {
    this.active = true
    
    this.popup = null
    
    super.onResetEvent()
    me.input.bindKey(me.input.KEY.ESC, "esc", true)
    me.input.bindKey(me.input.KEY.ENTER, "enter", true)
  }

  onDestroyEvent() {
    this.active = false
    
    me.input.unbindKey(me.input.KEY.ESC)
    me.input.unbindKey(me.input.KEY.ENTER)
    
    this.input.setText("")
    
    super.onDestroyEvent()
  }

  draw(context) {
    if(this.active) {
      if(me.input.isKeyPressed("enter"))
        this.okBtn.clicked()
      if(me.input.isKeyPressed("esc")) {
        this.cancelBtn.clicked()
        return
      }
    }
    
    super.draw(context)
    
    if(this.popup != null && !this.active)
      this.popup.draw(context)
  }
}